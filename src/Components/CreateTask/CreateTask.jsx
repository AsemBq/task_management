import './CreateTask.css';

import { useNavigate } from 'react-router-dom';
import CustomForm from '../CustomForm/CustomForm';
import HeaderWithIcon from '../HeaderWithIcon/HeaderWithIcon';
import ReturnIcon from '../../Icon/ReturnIcon/ReturnIcon';

import { useState } from 'react';
import useTasks from '../../hooks/useTasks';
import { useTaskContext } from '../../Context/TaskContext';

export default function CreateTask({ className }) {
  const navigate = useNavigate();

  const [taskError, setTaskError] = useState({
    name: null,
    priority: null,
  });

  const { createTask } = useTasks();

  const { setAllTasks, tasks } = useTaskContext();

  async function handleSubmit(e) {
    e.preventDefault();
    const formData = Object.fromEntries(new FormData(e.target).entries());
    const nameText = formData['name'];
    const priorityText = formData['priority'];

    const errors = {
      name: !nameText ? "Name field can't be empty" : null,
      priority: !priorityText ? "Priority field can't be empty" : null,
    };

    setTaskError(errors);

    if (errors.name || errors.priority) {
      return;
    }

    const newTask = await createTask({
      name: nameText,
      priority: priorityText,
      user: JSON.parse(localStorage.getItem('user')).userId,
    });

    setAllTasks([...tasks, newTask]);

    navigate('/list');
  }

  const config = {
    error: {
      text: null,
      tag: {
        className: null,
      },
    },
    form: {
      onSubmit: handleSubmit,
    },
    firstInput: {
      error: taskError.name,
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
        text: 'Name',
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
      error: taskError.priority,
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
        text: 'Priority',
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
          text: 'Create',
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
