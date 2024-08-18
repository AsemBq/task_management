import './TaskList.css';

import { useUser } from '../../Context/UserContext';
import FilterIcon from '../../Icon/FilterIcon/FilterIcon';
import HeaderWithIcon from '../HeaderWithIcon/HeaderWithIcon';
import LogOutIcon from '../LogOut/LogOut';
import Tasks from '../Tasks/Tasks';
import AddTaskButton from '../AddTaskButton/AddTaskButton';

import { useTaskContext } from '../../Context/TaskContext.jsx';

import { useEffect, useState } from 'react';
import useTasks from '../../hooks/useTasks.jsx';
import CheckIcon from '../../Icon/CheckIcon/CheckIcon.jsx';

export default function TaskList2({ className }) {
  const { username } = useUser();

  const { tasks, setAllTasks } = useTaskContext();

  const { getTasks } = useTasks();

  const [isFiltered, setIsFiltered] = useState(false);

  useEffect(() => {
    async function fetchTasks() {
      try {
        const tasksData = await getTasks('1l2ig7vpgbndfwg');
        if (isFiltered) {
          setAllTasks(tasksData.filter((task) => task.done == true));
        } else {
          setAllTasks(tasksData);
        }
        console.log(tasksData);
      } catch (error) {
        console.error('Error fetching tasks:', error);
      }
    }

    fetchTasks();
  }, [isFiltered]);

  function hanldeFilterClick(e) {
    setIsFiltered(!isFiltered);
  }

  return (
    <div className={className}>
      <HeaderWithIcon
        text={`${username}'s Tasks`}
        leftIcon={LogOutIcon('24px', '24px')}
      />
      <div className="box-body">
        {tasks.length > 0 ? (
          <div className="filter-icon-parent">
            {isFiltered ? CheckIcon('16px', '16px') : <></>}
            {FilterIcon('24px', '24px', hanldeFilterClick)}
          </div>
        ) : (
          <></>
        )}

        <Tasks tasks={tasks} />
      </div>
      <div className="box-button">
        <AddTaskButton />
      </div>
    </div>
  );
}
