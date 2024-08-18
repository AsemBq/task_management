import './EditTask.css';

import CustomForm from '../CustomForm/CustomForm';
import HeaderWithIcon from '../HeaderWithIcon/HeaderWithIcon';
import DeleteIcon from '../../Icon/DeleteIcon/DeleteIcon';
import ReturnIcon from '../../Icon/ReturnIcon/ReturnIcon';
import useTasks from '../../hooks/useTasks';

import { useNavigate, useSearchParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

export default function EditTask({ className }) {
  const navigate = useNavigate();

  const [taskError, setTaskError] = useState({
    name: '',
    priority: '',
  });

  const [task, setTask] = useState({
    name: null,
    priority: null,
  });

  const { getTaskById, editTask, deleteTask } = useTasks();

  const [searchParams] = useSearchParams();
  let taskId = searchParams.get('id') || null; // Default to 1 if not defined

  useEffect(() => {
    if (!taskId) {
      navigate('/list');
    }
  }, [taskId]);

  useEffect(() => {
    async function getTask() {
      try {
        if (!taskId) {
          return;
        }
        const tasksData = await getTaskById(taskId);
        setTask(tasksData);
        taskId = '';
        console.log('task data: ', tasksData);
      } catch (error) {
        console.error('Error fetching task:', error);
      }
    }
    getTask();
  }, [taskId]);

  const handleSubmit = async (e) => {
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

    const updatedTask = await editTask(taskId, {
      name: nameText,
      priority: priorityText,
    });

    navigate('/list');
  };

  const handleDelete = async () => {
    await deleteTask(taskId);
    navigate('/list');
  };

  const config = {
    error: {
      text: null,
      tag: { className: null },
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
