import './Tasks.css';

import Task from '../Task/Task.jsx';
import EmptyTaskList from '../EmptyTaskList/EmptyTaskList.jsx';

const Tasks = ({ tasks, status }) => {
  console.log('tasks:', tasks);

  if (status == 'loading') {
    return <h4>Loading</h4>;
  }

  if (status != 'loading' && tasks.length == 0) {
    return <EmptyTaskList />;
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
