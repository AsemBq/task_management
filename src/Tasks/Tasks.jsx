import './Tasks.css';

import Task from '../Task/Task.jsx';
import useTasks from '../hooks/useTasks.jsx';
import { useTaskContext } from '../Context/TaskContext.jsx';

import { useEffect } from 'react';

const Tasks = () => {
  const { tasks, setAllTasks } = useTaskContext();

  const { getTasks } = useTasks();

  useEffect(() => {
    async function fetchTasks() {
      try {
        const tasksData = await getTasks('1l2ig7vpgbndfwg');
        setAllTasks(tasksData);
        console.log(tasksData);
      } catch (error) {
        console.error('Error fetching tasks:', error);
      }
    }
    console.log('fetch');

    fetchTasks();
  }, []);

  if (!tasks) {
    return <div>Loading...</div>; // Show a loading state or nothing while tasks are undefined
  }

  const tasksList = tasks.map((item) => {
    return (
      <Task
        key={item.name}
        listId={item.id}
        name={item.name}
        isDone={item.done}
      />
    );
  });
  return <ul className="tasks">{tasksList}</ul>;
};

export default Tasks;
