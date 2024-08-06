import CustomForm from '../CustomForm/CustomForm';
import HeaderWithIcon from '../HeaderWithIcon/HeaderWithIcon';
import DeleteIcon from '../Icon/DeleteIcon/DeleteIcon';
import ReturnIcon from '../Icon/ReturnIcon/ReturnIcon';

import './EditTask.css';

export default function EditTask({ className }) {
  function handleClick(event) {}

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
          name: 'Name',
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
          value: 'Task #1',
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
          value: 'High',
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
          onClick: handleClick,
        },
        text: {
          text: 'Save',
        },
      },
    },
  };

  return (
    <div className={className}>
      <HeaderWithIcon
        text="Edit Task #1"
        leftIcon={DeleteIcon('24px', '24px')}
        rightIcon={ReturnIcon('10px', '15px')}
      ></HeaderWithIcon>
      <CustomForm config={config} />
    </div>
  );
}
