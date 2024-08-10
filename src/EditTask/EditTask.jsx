import CustomForm from '../CustomForm/CustomForm';
import HeaderWithIcon from '../HeaderWithIcon/HeaderWithIcon';
import DeleteIcon from '../Icon/DeleteIcon/DeleteIcon';
import ReturnIcon from '../Icon/ReturnIcon/ReturnIcon';

import './EditTask.css';
import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import axios from "axios";

export default function EditTask({ className }) {
  const TaskId=useParams()
  const token=JSON.parse(localStorage.getItem("token"));
  const [task,setTask]=useState({});

  useEffect(() => {
    const data={
      'token': token,
    }
    const fetchTask=async () => {
      const res= await axios.post('http://localhost:8000/user/user_tasks',data)
      const task= res.data.Tasks.filter(task=>task.id == TaskId.TaskId)
      setTask(task[0])
      
    }
    fetchTask();
  }, []);

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
    from:'Edit',
    task:task
  };

  return (
    <div className={className}>
      <HeaderWithIcon
        text="Edit Task"
        leftIcon={DeleteIcon('24px', '24px',TaskId.TaskId)}
        rightIcon={ReturnIcon('10px', '15px')}
      ></HeaderWithIcon>
      <CustomForm config={config}  />
    </div>
  );
}
