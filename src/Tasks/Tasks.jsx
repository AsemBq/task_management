import './Tasks.css';
import Task from '../Task/Task.jsx';
import { useApp } from '../Context/AppContext.jsx';

const Tasks = () => {
  const { getTasks } = useApp();

  const tasksList = getTasks().map((item) => {
    console.log('tasks,  ' + item.name + ': ' + item.done);
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
