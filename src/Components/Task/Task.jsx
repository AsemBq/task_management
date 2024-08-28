import "./Task.css";

import { useNavigate } from "react-router-dom";

import { useState } from "react";
import useTasks from "../../hooks/useTasks";

import { useDispatch } from "react-redux";
import { toggleDoneThunk, toggleReFetch } from "../../Slices/taskSlice";

const Task = ({ listId, name, isDone }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // const { editTask, getTaskById } = useTasks();

  const handleChange = async () => {
    isDone = !isDone;
    console.log("Task.jsx: ", isDone);
    dispatch(toggleDoneThunk({ taskId: listId, done: isDone })).then(() =>
      dispatch(toggleReFetch(true))
    );
  };

  const handleClick = () => {
    navigate(`/edit?id=${listId}`);
  };

  return (
    <li className='task'>
      <div className='left' onClick={handleClick}>
        <span className='circle'>A</span> <span> {name}</span>
      </div>
      <label className='custom-checkbox'>
        <input type='checkbox' checked={isDone} onChange={handleChange} />
        <span className='checkmark'></span>
      </label>
    </li>
  );
};

export default Task;
