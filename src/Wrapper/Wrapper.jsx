import './Wrapper.css';

import TaskList2 from '../Components/TaskList/TaskList2.jsx';
import CreateTask from '../Components/CreateTask/CreateTask.jsx';
import Login from '../Components/Login/Login.jsx';
import EditTask from '../Components/EditTask/EditTask.jsx';

import { Navigate, Route, Routes } from 'react-router-dom';
import ProtectedRoute from '../Components/ProtectedRoute/ProtectedRoute.jsx';
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
                  <TaskList2 className="wrapper__item task-list" />
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
                  <TaskList2 className="wrapper__item task-list" />
                </ProtectedRoute>
              }
            />
          </Routes>
        </TaskProvider>
      </UserContextProvider>
    </div>
  );
}
