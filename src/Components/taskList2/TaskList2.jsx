import './TaskList2.css'
import LogOutIcon from "../LogOut/LogOut.jsx";
import FilterIcon from "../../Icon/FilterIcon/FilterIcon.jsx";
import HeaderWithIcon from "../HeaderWithIcon/HeaderWithIcon.jsx";
import Tasks from "../Tasks/Tasks.jsx";
import AddTaskButton from "../../AddTaskButton/AddTaskButton.jsx";
import Pagination from "../Pagination/Pagination.jsx";
import useTasks from "../../hooks/useTasks.jsx";
import {useEffect, useState} from "react";
import axios from "axios";
import task from "../Task/Task.jsx";

const TaskList2=({className})=>{
    const token=JSON.parse(localStorage.getItem("token"));
    const Username=JSON.parse(localStorage.getItem("UserName"));
    const [tasks, setTasks]=useState([]);
    const [loading,setLoading]=useState(true);
    const [currentPage,setCurrentPage]=useState(1);
    const [tasksPerPage,setTasksPerPage]=useState(3);
    const indexOfLastTask=currentPage*tasksPerPage;
    const indexOfFirstTask=indexOfLastTask - tasksPerPage;
    const {getTasks} = useTasks();

    const [isFiltered,setIsFiltered]=useState(false);
    const [filtered,setFiltered]=useState([]);
    let currentTasks

    if (!isFiltered){
        currentTasks=tasks.slice(indexOfFirstTask,indexOfLastTask)
    }else {
        currentTasks=filtered.slice(indexOfFirstTask,indexOfLastTask)
    }

    useEffect(() => {
        const data={
            'token': token,
        }
        async function fetchTasks() {
            try {
                const tasksData = await getTasks(localStorage.getItem("token"));
                setTasks(tasksData)
                setLoading(false);
            } catch (error) {
                console.error('Error fetching tasks:', error);
            }
        }

        fetchTasks();
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