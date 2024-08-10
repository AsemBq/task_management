import { useNavigate } from 'react-router-dom';
import { useApp } from '../Context/AppContext.jsx';

import { useEffect, useState } from 'react';

const Task = ({ listId, name, isDone }) => {
  const navigate = useNavigate();

  const { markTaskAsDoneOrUndone } = useApp();

  const [isChecked, setIsChecked] = useState(isDone);

  const handleChange = () => {
    markTaskAsDoneOrUndone(listId, !isChecked);
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
