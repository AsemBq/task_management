import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import axios from 'axios';

const Task = ({ listId, name, isDone }) => {
  const { markTaskAsDoneOrUndone } = useApp();

  const [isChecked, setIsChecked] = useState(isDone);
  useEffect(() => {
    console.log('is checked: ' + isChecked);
  }, [isChecked]);

  const handleChange = () => {
    console.log('handle change 1: ', isChecked);
    markTaskAsDoneOrUndone(listId, !isChecked);
    setIsChecked(!isChecked);
    console.log('handle change 2: ', isChecked);
  };
  return (
    <li className="task">
      <div className="left">
        <span className="circle">A</span>{' '}
        <NavLink className={'text'} to={`/edit/${task.id}`}>
          <span> {task.name.slice(0, 20)}</span>
        </NavLink>
      </div>
      <label className="custom-checkbox">
        <input type="checkbox" checked={isChecked} onChange={handleChange} />
        <span className="checkmark"></span>
      </label>
    </li>
  );
};

export default Task;
