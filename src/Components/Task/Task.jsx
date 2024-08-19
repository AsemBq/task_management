import './Task.css';

import { useNavigate } from 'react-router-dom';

import { useState } from 'react';
import useTasks from '../../hooks/useTasks';

import { useDispatch } from 'react-redux';
import { toggleDone } from '../../Slices/taskSlice';

const Task = ({ listId, name, isDone }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { editTask, getTaskById } = useTasks();

  const handleChange = async () => {
    isDone = !isDone;
    await editTask(listId, { ...getTaskById(listId), done: isDone });
    dispatch(toggleDone({ id: listId, done: isDone }));
  };

  const handleClick = () => {
    navigate(`/edit?id=${listId}`);
  };

  return (
    <li className="task">
      <div className="left" onClick={handleClick}>
        <span className="circle">A</span> <span> {name}</span>
      </div>
      <label className="custom-checkbox">
        <input type="checkbox" checked={isDone} onChange={handleChange} />
        <span className="checkmark"></span>
      </label>
    </li>
  );
};

export default Task;
