import { useNavigate } from 'react-router-dom';
import { useApp } from '../Context/AppContext';
import CustomForm from '../CustomForm/CustomForm';
import HeaderWithIcon from '../HeaderWithIcon/HeaderWithIcon';
import ReturnIcon from '../Icon/ReturnIcon/ReturnIcon';

import './CreateTask.css';

export default function CreateTask({ className }) {
  const { addTask } = useApp();
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    const formData = Object.fromEntries(new FormData(e.target).entries());
    const name = formData['name'];
    const priority = formData['priority'];
    addTask(name, priority);
    navigate(-1);
  }

  const config = {
    form: {
      onSubmit: handleSubmit,
    },
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
          name: 'name',
          autoComplete: 'name',
          type: 'text',
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
          className: '_text-input__input',
          id: 'priority',
          name: 'priority',
          autoComplete: 'priority',
          type: 'text',
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
