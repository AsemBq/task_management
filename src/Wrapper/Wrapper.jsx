import './Wrapper.css';

import TaskList1 from '../taskList1/TaskList1';
import TaskList2 from '../taskList2/TaskList2';
import CreateTask from '../CreateTask/CreateTask.jsx';
import Login from '../Login/Login.jsx';
import EditTask from '../EditTask/EditTask.jsx';
import { LoginInfoContext } from '../Context/LoginInfoContext.jsx';

import { Navigate, Route, Routes } from 'react-router-dom';
import { useState } from 'react';

export default function Wrapper() {
  const [loginState, setLoginState] = useState({
    isLoggedin: false,
    username: null,
  });

  return (
    <div className="wrapper">
      <LoginInfoContext.Provider value={{ loginState, setLoginState }}>
        <Routes>
          <Route
            path="/list"
            element={
              loginState.isLoggedin ? (
                <TaskList1 className="wrapper__item TaskList1" />
              ) : (
                <Navigate to={'/login'} />
              )
            }
          />
          <Route
            path="/create"
            element={
              loginState.isLoggedin ? (
                <CreateTask className="wrapper__item create_task" />
              ) : (
                <Navigate to={'/login'} />
              )
            }
          />
          <Route
            path="/login"
            element={
              loginState.isLoggedin ? (
                <Navigate to={'/list'} />
              ) : (
                <Login className="wrapper__item login_page" />
              )
            }
          />
          <Route
            path="/edit/:TaskId"
            element={
              loginState.isLoggedin ? (
                <EditTask className="wrapper__item edit_task" />
              ) : (
                <Navigate to={'/login'} />
              )
            }
          />
          <Route
            path="*"
            element={
              loginState.isLoggedin ? (
                <TaskList2 className="wrapper__item TasksList" />
              ) : (
                <Navigate to={'/login'} />
              )
            }
          />
        </Routes>
      </LoginInfoContext.Provider>
    </div>
  );
}
