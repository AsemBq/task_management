import './Login.css';

import CustomForm from '../CustomForm/CustomForm';
import EraseIcon from '../Icon/EraseIcon/EraseIcon';
import HeaderWithIcon from '../HeaderWithIcon/HeaderWithIcon';
import VisibilityIcon from '../Icon/VisibilityIcon/VisibilityIcon';
import { useState } from 'react';
import { useApp } from '../Context/AppContext';

export default function Login({ className }) {
  const { logUserIn } = useApp();

  const [loginError, setLoginError] = useState({
    username: null,
    password: null,
  });

  const handleSubmit = (e) => {
    console.log('handle submit');

    e.preventDefault();
    const formData = Object.fromEntries(new FormData(e.target).entries());
    const usernameText = formData['username'];
    const passwordText = formData['password'];

    const errors = {
      username: !usernameText ? "username field can't be empty" : null,
      password: !passwordText ? "password field can't be empty" : null,
    };

    setLoginError(errors);

    if (errors.username || errors.password) {
      return;
    }

    logUserIn(usernameText);
  };

  const config = {
    form: {
      onSubmit: handleSubmit,
    },
    firstInput: {
      error: loginError.username,
      parentDiv: {
        tag: {
          className: '_text-input__form-group',
        },
      },
      label: {
        tag: {
          className: '_text-input__label',
          name: 'Username',
          placeholder: 'PlaceHolder',
          htmlFor: 'username',
        },
        text: 'username',
      },
      input: {
        tag: {
          className: '_text-input__input',
          name: 'username',
          id: 'username',
          autoComplete: 'username',
          type: 'text',
        },
      },
      icon: {
        tag: {
          className: '_text-input__icon',
          style: {
            right: '0.05rem',
          },
        },
        icon: EraseIcon('45px', '45px'),
      },
    },
    secondInput: {
      error: loginError.password,
      parentDiv: {
        tag: {
          className: '_text-input__form-group',
        },
      },
      label: {
        tag: {
          className: '_text-input__label',
          name: 'password',
          placeholder: 'PlaceHolder',
          htmlFor: 'password',
        },
        text: 'password',
      },
      input: {
        tag: {
          className: '_text-input__input',
          id: 'password',
          name: 'password',
          autoComplete: 'password',
          type: 'password',
        },
      },
      icon: {
        tag: {
          className: '_text-input__icon',
          style: {
            right: '0.8rem',
          },
        },
        icon: VisibilityIcon('23px', '23px'),
      },
    },
    button: {
      button: {
        tag: {
          className: '_submit-btn',
          // onClick: handleClick,
        },
        text: {
          text: 'Login',
        },
      },
    },
    from: 'Login',
  };
  return (
    <div className={className}>
      <HeaderWithIcon text="Task Manager"></HeaderWithIcon>
      <CustomForm config={config} />
    </div>
  );
}
