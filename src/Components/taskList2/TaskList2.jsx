import './TaskList2.css'
import LogOutIcon from "../LogOut/LogOut.jsx";
import FilterIcon from "../../Icon/FilterIcon/FilterIcon.jsx";
import HeaderWithIcon from "../HeaderWithIcon/HeaderWithIcon.jsx";
import Tasks from "../Tasks/Tasks.jsx";
import AddTaskButton from "../../AddTaskButton/AddTaskButton.jsx";
import Pagination from "../Pagination/Pagination.jsx";
import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {fetchTasks} from "../redux/Tasks/tasksAction.js";
import useTasks from "../../hooks/useTasks.jsx";
const {getTasks} = useTasks();

const TaskList2=({className})=>{
    const Username=JSON.parse(localStorage.getItem("UserName"));
    const {tasks}=useSelector((state)=>state.tasks);
    const {loading}=useSelector((state)=>state.tasks);
    const [currentPage,setCurrentPage]=useState(1);
    const [tasksPerPage,setTasksPerPage]=useState(3);
    const indexOfLastTask=currentPage*tasksPerPage;
    const indexOfFirstTask=indexOfLastTask - tasksPerPage;
    const dispatch = useDispatch();
    const currentTasks=tasks.slice(indexOfFirstTask,indexOfLastTask)
    useEffect(() => {
        dispatch(fetchTasks())
    }, []);

    return (
        <div className={className}>
            <HeaderWithIcon
                text={`${Username}'s Tasks`}
                leftIcon={LogOutIcon("24px","24px")}
                />
                <div className='box-body'>
                    {(!loading && tasks.length!=0) ? <div className={'filter'}>
                        <span className={'filter-icon'}><FilterIcon width={24} height={24}/></span>
                    </div> :<></>}
                    <Tasks tasks={currentTasks} loading={loading}/>
                </div>
            <div className={'box-button'}>
                    <Pagination taskPerPage={tasksPerPage} totalTasks={tasks.length} currentPage={currentPage}
                                setCurrentPage={setCurrentPage} loading={loading}/>
                    <AddTaskButton/>
                </div>

        </div>
    )
}

export default TaskList2;