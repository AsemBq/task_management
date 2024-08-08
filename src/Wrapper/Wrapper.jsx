import WrapperItem from '../WrapperItem/WrapperItem.jsx';
import TaskList1 from '../taskList1/TaskList1';
import TaskList2 from '../taskList2/TaskList2';
import EmptyTaskList from '../EmptyTaskList/EmptyTaskList.jsx';
import CreateTask from '../CreateTask/CreateTask.jsx';
import Login from '../Login/Login.jsx';
import './Wrapper.css';
import EditTask from '../EditTask/EditTask.jsx';
import { Navigate, Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import { UserContext } from './MainContext.jsx';

export default function Wrapper() {
  const [IsUser, setIsUser] = useState(true);

    if (localStorage.getItem('User')){
        setIsUser(true);
    }

  return (
    <div className="wrapper">
      <UserContext.Provider value={{ IsUser, setIsUser }}>
        <Routes>
          <Route
            path="/list"
            element={
              IsUser ? (
                  <TaskList2 className="wrapper__item TasksList" />
              ) : (
                <Navigate to={'/login'} />
              )
            }
          />
          <Route
            path="/create"
            element={
              IsUser ? (
                <CreateTask className="wrapper__item create_task" />
              ) : (
                <Navigate to={'/login'} />
              )
            }
          />
          <Route
            path="/login"
            element={
              IsUser ? (
                <Navigate to={'/list'} />
              ) : (
                <Login className="wrapper__item login_page" />
              )
            }
          />
          <Route
            path="/edit/:id"
            element={
              IsUser ? (
                <EditTask className="wrapper__item edit_task" />
              ) : (
                <Navigate to={'/login'} />
              )
            }
          />
          <Route
            path="*"
            element={
              IsUser ? (
                <TaskList2 className="wrapper__item TasksList" />
              ) : (
                <Navigate to={'/login'} />
              )
            }
          />
        </Routes>
      </UserContext.Provider>
      {/*<Login className="wrapper__item login_page" />*/}
      {/*<TaskList1 className="wrapper__item TaskList1" />*/}
      {/*<EmptyTaskList className="wrapper__item EmptyTaskList" />*/}
      {/*/!* <WrapperItem className="wrapper__item edit_task" /> *!/*/}
      {/*<EditTask className="wrapper__item edit_task" />*/}
      {/*<CreateTask className="wrapper__item create_task" />*/}
      {/*<TaskList2 className="wrapper__item TasksList" />*/}
    </div>
  );
}
