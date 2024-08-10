import './EditTask.css';

import CustomForm from '../CustomForm/CustomForm';
import HeaderWithIcon from '../HeaderWithIcon/HeaderWithIcon';
import DeleteIcon from '../Icon/DeleteIcon/DeleteIcon';
import ReturnIcon from '../Icon/ReturnIcon/ReturnIcon';

import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';

import { useApp } from '../Context/AppContext';

export default function EditTask({ className }) {
  const navigate = useNavigate();
  const { getTask, editTask, deleteTask } = useApp();
  const [searchParams] = useSearchParams();
  const taskId = searchParams.get('id') || '1'; // Default to 1 if not defined

  const task = getTask(taskId);

  const token = JSON.parse(localStorage.getItem('token'));

  useEffect(() => {
    const data = {
      token: token,
    };
    const fetchTask = async () => {
      const res = await axios.post(
        'http://localhost:8000/user/user_tasks',
        data
      );
      const task = res.data.Tasks.filter((task) => task.id == TaskId.TaskId);
      editTask(taskId, task[0].name, task[0].priority);
    };
    fetchTask();
  }, []);

  const handleSubmit = (e) => {
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

    editTask(taskId, nameText, priorityText);
    navigate('/list');
  };

  const handleDelete = () => {
    deleteTask(taskId);
    navigate('/list');
  };

  const config = {
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
          name: 'name',
          autoComplete: 'name',
          type: 'text',
          defaultValue: task.name,
          defaultValue: task.name,
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
        text: 'priority',
      },
      input: {
        tag: {
          className: '_text-input__input',
          id: 'priority',
          name: 'priority',
          type: 'text',
          defaultValue: task.priority,
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
          text: 'Save',
        },
      },
    },
    from: 'Edit',
    task: task,
  };

  return (
    <div className={className}>
      <HeaderWithIcon
        text={task.name}
        leftIcon={DeleteIcon('24px', '24px', handleDelete)}
        rightIcon={ReturnIcon('10px', '15px')}
      ></HeaderWithIcon>
      <CustomForm config={config} />
    </div>
  );
}
