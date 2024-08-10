import './Wrapper.css';

import TaskList1 from '../taskList1/TaskList1';
import TaskList2 from '../taskList2/TaskList2';
import CreateTask from '../CreateTask/CreateTask.jsx';
import Login from '../Login/Login.jsx';
import EditTask from '../EditTask/EditTask.jsx';

import { Navigate, Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import AppContextProvider, { useApp } from '../Context/AppContext.jsx';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute.jsx';

export default function Wrapper() {
  return (
    <div className="wrapper">
      <AppContextProvider>
        <Routes>
          <Route
            path="/list"
            element={
              <ProtectedRoute nav={<Navigate to={'/login'} />}>
                <TaskList1 className="wrapper__item TaskList1" />
              </ProtectedRoute>
            }
          />
          <Route
            path="/create"
            element={
              <ProtectedRoute nav={<Navigate to={'/login'} />}>
                <CreateTask className="wrapper__item create_task" />
              </ProtectedRoute>
            }
          />
          <Route
            path="/login"
            element={
              <ProtectedRoute nav={<Navigate to={'/list'} />} reverse={true}>
                <Login className="wrapper__item login_page" />
              </ProtectedRoute>
            }
          />
          <Route
            path="/edit/:TaskId"
            element={
              <ProtectedRoute nav={<Navigate to={'/login'} />}>
                <EditTask className="wrapper__item edit_task" />
              </ProtectedRoute>
            }
          />
          <Route
            path="*"
            element={
              <ProtectedRoute nav={<Navigate to={'/login'} />}>
                <TaskList2 className="wrapper__item TasksList" />
              </ProtectedRoute>
            }
          />
        </Routes>
      </AppContextProvider>
    </div>
  );
}
