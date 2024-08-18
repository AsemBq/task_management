import './Login.css';
import React, { useState } from 'react';
import CustomForm from '../CustomForm/CustomForm';
import EraseIcon from '../../Icon/EraseIcon/EraseIcon';
import HeaderWithIcon from '../HeaderWithIcon/HeaderWithIcon';
import VisibilityIcon from '../../Icon/VisibilityIcon/VisibilityIcon';
import useLogin from '../../hooks/useLogin';
import { useUser } from '../../Context/UserContext';

export default function Login({ className }) {
  const { logUserIn } = useUser();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [passwordType, setPasswordType] = useState('password');

  const handleEraseClick = () => {
    setUsername(''); // Clears the username input field
  };

  const handleVisibilityClick = () => {
    setPasswordType((prevType) =>
      prevType === 'password' ? 'text' : 'password'
    ); // Toggles password visibility
  };

  const [loginError, setLoginError] = useState({
    username: null,
    password: null,
    wrongUsernameOrPassword: null,
  });

  const handleSubmit = async (e) => {
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
    try {
      const login = useLogin();
      const { record, token } = await login(usernameText, passwordText);
      const { name, username, id } = record;
      logUserIn(name, username, token, id);
    } catch (e) {
      console.log('error: ', e);
      setLoginError((prev) => ({
        ...prev,
        wrongUsernameOrPassword: 'Wrong username or password',
      }));
    }
  };

  const config = {
    error: {
      tag: {
        className: null,
      },
      text: loginError['wrongUsernameOrPassword'],
    },
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
          value: username,
          type: 'text',
          onChange: (e) => setUsername(e.target.value),
        },
      },
      icon: {
        tag: {
          className: '_text-input__icon',
          style: {
            right: '0.05rem',
          },
          onClick: handleEraseClick,
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
          value: password,
          type: passwordType, // Controlled type for password visibility
          onChange: (e) => setPassword(e.target.value),
        },
      },
      icon: {
        tag: {
          className: '_text-input__icon',
          style: {
            right: '0.8rem',
          },
          onClick: handleVisibilityClick,
        },
        icon: VisibilityIcon('23px', '23px'),
      },
    },
    button: {
      button: {
        tag: {
          className: '_submit-btn',
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
