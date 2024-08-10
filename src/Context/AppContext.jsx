import { createContext, useContext, useEffect, useState } from 'react';

const initAppInfo = {
  loggedInUser: 'default',
  users: {
    default: {
      tasks: [
        { name: 'task1', done: false, priority: 'low' },
        { name: 'task2', done: true, priority: 'high' },
      ],
    },
    mhmd: {
      tasks: [
        { name: 'feed the dog', done: true, priority: 'low' },
        { name: 'go out', done: false, priority: 'low' },
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
      if (loggedInUser && newAppInfo.users[loggedInUser]) {
        newAppInfo.users[loggedInUser].tasks.push({
          name: taskName,
          done: false,
          priority: taskPriority,
        });
      }
      console.log('newAppInfo: ', newAppInfo);

      return newAppInfo;
    });
  };

  const markTaskAsDoneOrUndone = (taskName, done) => {
    setAppInfo((prev) => {
      const newAppInfo = { ...prev };
      const loggedInUser = newAppInfo.loggedInUser;
      if (loggedInUser && newAppInfo.users[loggedInUser]) {
        const tasks = newAppInfo.users[loggedInUser].tasks;
        const taskIndex = tasks.findIndex((task) => task.name === taskName);
        console.log('mark, taskIndex: ' + taskIndex + ' done: ' + done);
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

  const editTask = (oldTaskName, newTaskName, taskPriority) => {
    setAppInfo((prev) => {
      const newAppInfo = { ...prev };
      const loggedInUser = newAppInfo.loggedInUser;
      if (loggedInUser && newAppInfo.users[loggedInUser]) {
        const tasks = newAppInfo.users[loggedInUser].tasks;
        const taskIndex = tasks.findIndex((task) => task.name === oldTaskName);
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

  const deleteTask = (taskName) => {
    setAppInfo((prev) => {
      const newAppInfo = { ...prev };
      const loggedInUser = newAppInfo.loggedInUser;
      if (loggedInUser && newAppInfo.users[loggedInUser]) {
        const tasks = newAppInfo.users[loggedInUser].tasks;
        newAppInfo.users[loggedInUser].tasks = tasks.filter(
          (task) => task.name !== taskName
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
