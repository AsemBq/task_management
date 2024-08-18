import './Tasks.css';

import Task from '../Task/Task.jsx';
// import useTasks from '../../hooks/useTasks.jsx';
// import { useTaskContext } from '../../Context/TaskContext.jsx';
import EmptyTaskList from '../EmptyTaskList/EmptyTaskList.jsx';
// import { useEffect } from 'react';

const Tasks = ({ tasks }) => {
  console.log('tasks:', tasks);

  if (tasks.length == 0) {
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
