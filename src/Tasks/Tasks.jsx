import './Tasks.css';
import Task from '../Task/Task.jsx';
import useTasks from '../hooks/useTasks.jsx';
import { useEffect, useState } from 'react';

const Tasks = () => {
  const { getTasks } = useTasks();
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    async function fetchTasks() {
      try {
        const tasksData = await getTasks('1l2ig7vpgbndfwg');
        setTasks(tasksData);
      } catch (error) {
        console.error('Error fetching tasks:', error);
      }
    }

    fetchTasks();
  }, []);

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
