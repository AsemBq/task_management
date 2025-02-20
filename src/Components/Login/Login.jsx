import CustomForm from '../CustomForm/CustomForm';
import EraseIcon from '../../Icon/EraseIcon/EraseIcon';
import HeaderWithIcon from '../HeaderWithIcon/HeaderWithIcon';
import VisibilityIcon from '../../Icon/VisibilityIcon/VisibilityIcon';
import './Login.css';

export default function Login({ className }) {
  const config = {
    firstInput: {
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
          id: 'password',
          autoComplete: 'password',
          type: 'password',
          className: '_text-input__input',
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
    from:'Login'
  };
  return (
    <div className={className}>
      <HeaderWithIcon text="Task Manager"></HeaderWithIcon>
      <CustomForm config={config} />
    </div>
  );
}
