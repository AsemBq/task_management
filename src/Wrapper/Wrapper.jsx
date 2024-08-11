import './Wrapper.css';

import TaskList1 from '../taskList1/TaskList1';
import TaskList2 from '../taskList2/TaskList2';
import CreateTask from '../CreateTask/CreateTask.jsx';
import Login from '../Login/Login.jsx';
import EditTask from '../EditTask/EditTask.jsx';

import { Navigate, Route, Routes } from 'react-router-dom';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute.jsx';
import UserContextProvider from '../Context/UserContext.jsx';
import { TaskProvider } from '../Context/TaskContext.jsx';

export default function Wrapper() {
  return (
    <div className="wrapper">
      <UserContextProvider>
        <TaskProvider>
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
              path="/edit/"
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
                  <TaskList1 className="wrapper__item TasksList" />
                </ProtectedRoute>
              }
            />
          </Routes>
        </TaskProvider>
      </UserContextProvider>
    </div>
  );
}
