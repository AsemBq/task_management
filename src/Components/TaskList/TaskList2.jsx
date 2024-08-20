import './TaskList.css';

import FilterIcon from '../../Icon/FilterIcon/FilterIcon';
import CheckIcon from '../../Icon/CheckIcon/CheckIcon.jsx';
import HeaderWithIcon from '../HeaderWithIcon/HeaderWithIcon';
import LogoutIcon from '../../Icon/LogoutIcon/LogoutIcon.jsx';
import Tasks from '../Tasks/Tasks';
import AddTaskButton from '../AddTaskButton/AddTaskButton';

import { useUser } from '../../Context/UserContext';
import {
  useTasksSelector,
  usePageSelector,
  useTasksFetchedSelector,
  useStatusSelector,
  fetchTasks,
  toggleFetchtedTasks,
} from '../../Slices/taskSlice.js';
import { useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';

export default function TaskList2({ className }) {
  const dispatch = useDispatch();

  const { username } = useUser();

  const tasks = useTasksSelector();
  const status = useStatusSelector();
  const tasksFetched = useTasksFetchedSelector();
  const page = usePageSelector();

  const [isFiltered, setIsFiltered] = useState(false);

  useEffect(() => {
    if (!tasksFetched) {
      dispatch(fetchTasks({ page, perPage: 3 }));
      dispatch(toggleFetchtedTasks({ fetched: true }));
    }
  }, []);

  function hanldeFilterClick(e) {
    setIsFiltered(!isFiltered);
  }

  return (
    <div className={className}>
      <HeaderWithIcon
        text={`${username}'s Tasks`}
        leftIcon={LogoutIcon('24px', '24px')}
      />
      <div className="box-body">
        {tasks.length > 0 || (tasks.length == 0 && isFiltered) ? (
          <div className="filter-icon-parent">
            {isFiltered ? CheckIcon('16px', '16px') : <></>}
            {FilterIcon('24px', '24px', hanldeFilterClick)}
          </div>
        ) : (
          <></>
        )}

        <Tasks
          tasks={
            isFiltered ? tasks.filter((task) => task.done === true) : tasks
          }
          status={status}
        />
      </div>
      <div className="box-button">
        <AddTaskButton />
      </div>
    </div>
  );
}
