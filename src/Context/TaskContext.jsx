import { createContext, useContext, useState } from 'react';

const TaskContext = createContext();

export const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);

  const updateTask = (updatedTask) => {
    setTasks((prev) => {
      prev.map((task) => (task.id == updatedTask.id ? updatedTask : task));
    });
  };

  const setAllTasks = (taskList) => {
    setTasks(taskList);
  };

  return (
    <TaskContext.Provider value={{ tasks, updateTask, setAllTasks }}>
      {children}
    </TaskContext.Provider>
  );
};

export const useTaskContext = () => useContext(TaskContext);
