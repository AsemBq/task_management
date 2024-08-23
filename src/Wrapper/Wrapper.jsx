import TaskList2 from '../Components/taskList2/TaskList2';
import CreateTask from '../Components/CreateTask/CreateTask.jsx';
import Login from '../Components/Login/Login.jsx';
import './Wrapper.css';
import EditTask from '../Components/EditTask/EditTask.jsx';
import {Navigate, Route, Routes} from 'react-router-dom';
import {Provider, useDispatch, useSelector} from "react-redux";
import store from "../Components/redux/store.js";
import {setIsUser} from "../Components/redux/User/userAction.js";
import {useEffect} from "react";

export default function Wrapper() {
    const {IsUser}= useSelector(state=>state.user)
    console.log(IsUser)
    return (
        <Provider store={store}>
            <div className="wrapper">
                    <Routes>
                        <Route
                            path="/list"
                            element={
                                IsUser ? (
                                    <TaskList2 className="wrapper__item TasksList"/>
                                ) : (
                                    <Navigate to={'/login'}/>
                                )
                            }
                        />
                        <Route
                            path="/create"
                            element={
                                IsUser ? (
                                    <CreateTask className="wrapper__item create_task"/>
                                ) : (
                                    <Navigate to={'/login'}/>
                                )
                            }
                        />
                        <Route
                            path="/login"
                            element={
                                IsUser ? (
                                    <Navigate to={'/list'}/>
                                ) : (
                                    <Login className="wrapper__item login_page"/>
                                )
                            }
                        />

                        <Route
                            path="/edit/:TaskId"
                            element={
                            IsUser ?(<EditTask className="wrapper__item edit_task"/>
                            ): (
                                     <Navigate to={'/login'}/>
                                 )
                            }
                        />
                        <Route
                            path="*"
                            element={
                                IsUser ? (
                                    <TaskList2 className="wrapper__item TasksList"/>
                                ) : (
                                    <Navigate to={'/login'}/>
                                )
                            }
                        />
                    </Routes>
            </div>
        </Provider>
    );
}
