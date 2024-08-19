import './TaskList.css';

import { useUser } from '../../Context/UserContext';
import FilterIcon from '../../Icon/FilterIcon/FilterIcon';
import HeaderWithIcon from '../HeaderWithIcon/HeaderWithIcon';
import LogoutIcon from '../../Icon/LogoutIcon/LogoutIcon.jsx';
import Tasks from '../Tasks/Tasks';
import AddTaskButton from '../AddTaskButton/AddTaskButton';

import {
  useTasksSelector,
  useTasksFetchedSelector,
  toggleFetchtedTasks,
} from '../../Slices/taskSlice.js';

import { useDispatch } from 'react-redux';

import { addTask } from '../../Slices/taskSlice.js';

import { useEffect, useState } from 'react';
import useTasks from '../../hooks/useTasks.jsx';
import CheckIcon from '../../Icon/CheckIcon/CheckIcon.jsx';

export default function TaskList2({ className }) {
  const dispatch = useDispatch();

  const { username } = useUser();

  const tasks = useTasksSelector();
  const tasksFetched = useTasksFetchedSelector();

  const { getTasks } = useTasks();

  const [isFiltered, setIsFiltered] = useState(false);

  useEffect(() => {
    function getUseId() {
      return localStorage.getItem('user').userId;
    }

    async function fetchTasks() {
      try {
        if (!tasksFetched) {
          const tasksData = await getTasks(getUseId());
          tasksData.forEach((task) => {
            dispatch(addTask({ unshift: false, data: task }));
          });
          dispatch(toggleFetchtedTasks({ fetched: true }));
        }
      } catch (error) {
        console.error('Error fetching tasks:', error);
      }
    }

    fetchTasks();
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
        />
      </div>
      <div className="box-button">
        <AddTaskButton />
      </div>
    </div>
  );
}
