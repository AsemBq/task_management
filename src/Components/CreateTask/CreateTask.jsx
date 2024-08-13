import CustomForm from '../CustomForm/CustomForm';
import HeaderWithIcon from '../HeaderWithIcon/HeaderWithIcon';
import ReturnIcon from '../../Icon/ReturnIcon/ReturnIcon';

import './CreateTask.css';

export default function CreateTask({ className }) {


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
          name: 'name',
          placeholder: 'PlaceHolder',
          htmlFor: 'name',
        },
        text: 'name',
      },
      input: {
        tag: {
          className: '_text-input__input',
          id: 'name',
          autoComplete: 'name',
          type: 'text',
          placeholder:"Name"
        },
      },
      icon: {
        tag: {
          className: '_text-input__icon',
          style: {},
        },
        icon: null,
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
          name: 'priority',
          placeholder: 'PlaceHolder',
          htmlFor: 'priority',
        },
        text: 'priority',
      },
      input: {
        tag: {
          id: 'priority',
          autoComplete: 'priority',
          type: 'text',
          className: '_text-input__input',
          placeholder:'high ,medium or low'
        },
      },
      icon: {
        tag: {
          className: '_text-input__icon',
          style: {},
        },
        icon: null,
      },
    },
    button: {
      button: {
        tag: {
          className: '_submit-btn',
        },
        text: {
          text: 'Creaet',
        },
      },
    },
    from:'Creat'
  };

  return (
    <div className={className}>
      <HeaderWithIcon
        text="Create Task"
        rightIcon={ReturnIcon()}
      ></HeaderWithIcon>
      <CustomForm config={config} />
    </div>
  );
}
