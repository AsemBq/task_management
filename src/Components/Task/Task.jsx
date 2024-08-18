import './Task.css';

import { useNavigate } from 'react-router-dom';

import { useState } from 'react';
import useTasks from '../../hooks/useTasks';

const Task = ({ listId, name, isDone }) => {
  const navigate = useNavigate();

  const [isChecked, setIsChecked] = useState(isDone);

  const { editTask, getTaskById } = useTasks();

  const handleChange = async () => {
    await editTask(listId, { ...getTaskById(listId), done: !isChecked });
    setIsChecked(!isChecked);
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
        <input type="checkbox" checked={isChecked} onChange={handleChange} />
        <span className="checkmark"></span>
      </label>
    </li>
  );
};

export default Task;
