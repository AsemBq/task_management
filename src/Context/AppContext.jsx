import { createContext, useContext, useEffect, useState } from 'react';

const initAppInfo = {
  loggedInUser: 'default',
  users: {
    default: {
      tasks: [
        { id: 0, name: 'task1', done: false, priority: 'low' },
        { id: 1, name: 'task2', done: true, priority: 'high' },
      ],
    },
    mhmd: {
      tasks: [
        { id: 0, name: 'feed the dog', done: true, priority: 'low' },
        { id: 1, name: 'go out', done: false, priority: 'low' },
      ],
    },
  },
};

const getInitialState = () => {
  const appInfo = localStorage.getItem('appInfo');
  return appInfo ? JSON.parse(appInfo) : initAppInfo;
};

export const AppContext = createContext();

const AppContextProvider = ({ children }) => {
  const [appInfo, setAppInfo] = useState(getInitialState);

  useEffect(() => {
    localStorage.setItem('appInfo', JSON.stringify(appInfo));
  }, [appInfo]);

  const logUserIn = (username) => {
    setAppInfo((prev) => {
      const newAppInfo = { ...prev };
      newAppInfo.loggedInUser = username;
      if (!newAppInfo.users[username]) {
        newAppInfo.users[username] = { tasks: [] };
      }
      return newAppInfo;
    });
  };

  const logUserOut = () => {
    setAppInfo((prev) => {
      const newAppInfo = { ...prev };
      newAppInfo.loggedInUser = null;
      return newAppInfo;
    });
  };

  const addTask = (taskName, taskPriority) => {
    setAppInfo((prev) => {
      const newAppInfo = { ...prev };
      const loggedInUser = newAppInfo.loggedInUser;
      const tasks = newAppInfo.users[loggedInUser].tasks;
      if (loggedInUser && newAppInfo.users[loggedInUser]) {
        newAppInfo.users[loggedInUser].tasks.push({
          id: tasks.length > 0 ? tasks[tasks.length - 1].id + 1 : 0,
          name: taskName,
          done: false,
          priority: taskPriority,
        });
      }
      return newAppInfo;
    });
  };

  const markTaskAsDoneOrUndone = (taskId, done) => {
    setAppInfo((prev) => {
      const newAppInfo = { ...prev };
      const loggedInUser = newAppInfo.loggedInUser;
      if (loggedInUser && newAppInfo.users[loggedInUser]) {
        const tasks = newAppInfo.users[loggedInUser].tasks;
        const taskIndex = tasks.findIndex((task) => task.id === taskId);
        if (taskIndex !== -1) {
          tasks[taskIndex] = {
            ...tasks[taskIndex],
            done: done,
          };
        }
      }
      return newAppInfo;
    });
  };

  const editTask = (taskID, newTaskName, taskPriority) => {
    setAppInfo((prev) => {
      const newAppInfo = { ...prev };
      const loggedInUser = newAppInfo.loggedInUser;
      if (loggedInUser && newAppInfo.users[loggedInUser]) {
        const tasks = newAppInfo.users[loggedInUser].tasks;
        const taskIndex = tasks.findIndex((task) => task.id == taskID);
        if (taskIndex !== -1) {
          tasks[taskIndex] = {
            ...tasks[taskIndex],
            name: newTaskName,
            priority: taskPriority,
          };
        }
      }
      return newAppInfo;
    });
  };

  const deleteTask = (taskId) => {
    setAppInfo((prev) => {
      const newAppInfo = { ...prev };
      const loggedInUser = newAppInfo.loggedInUser;
      if (loggedInUser && newAppInfo.users[loggedInUser]) {
        const tasks = newAppInfo.users[loggedInUser].tasks;
        newAppInfo.users[loggedInUser].tasks = tasks.filter(
          (task) => task.id !== taskId
        );
      }
      return newAppInfo;
    });
  };

  const getTasks = () => {
    if (appInfo.loggedInUser) {
      return appInfo.users[loggedInUser].tasks;
    }
  };

  const getTask = (id) => {
    if (appInfo.loggedInUser) {
      const x = appInfo.users[loggedInUser].tasks.find((task) => task.id == id);
      return x;
    }
  };

  const loggedInUser = appInfo.loggedInUser;
  return (
    <AppContext.Provider
      value={{
        logUserIn,
        logUserOut,
        addTask,
        markTaskAsDoneOrUndone,
        editTask,
        deleteTask,
        getTasks,
        getTask,
        loggedInUser,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export function useApp() {
  return useContext(AppContext);
}

export default AppContextProvider;
