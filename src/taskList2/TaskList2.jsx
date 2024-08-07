import './TaskList2.css'
import LogOutIcon from "../LogOut/LogOut.jsx";
import FilterIcon from "../Icon/FilterIcon/FilterIcon.jsx";
import HeaderWithIcon from "../HeaderWithIcon/HeaderWithIcon.jsx";
import Tasks from "../Tasks/Tasks.jsx";
import AddTaskButton from "../AddTaskButton/AddTaskButton.jsx";
import Pagination from "../Pagination/Pagination.jsx";
import EmptyTaskList from "../EmptyTaskList/EmptyTaskList.jsx";
import {useEffect, useState} from "react";
import axios from "axios";

const TaskList2=({className})=>{
    const[tasks, setTasks]=useState([]);
    const [loading,setLoading]=useState(false);
    const [currentPage,setCurrentPage]=useState(1);
    const [tasksPerPage,setTasksPerPage]=useState(3);
    useEffect(() => {
        const fetchTasks=async () => {
            setLoading(true)
            const res= await axios.get('https://jsonplaceholder.typicode.com/posts')
            setTasks(res.data);
            setLoading(false);
        }
        fetchTasks();
    }, []);

    const indexOfLastTask=currentPage*tasksPerPage;
    const indexOfFirstTask=indexOfLastTask - tasksPerPage;
    const currentTasks=tasks.slice(indexOfFirstTask,indexOfLastTask)

    return (
        <div className={className}>
            <HeaderWithIcon
                text={"Jenny's Tasks"}
                leftIcon={LogOutIcon("24px","24px")}
                />
                <div className='box-body'>
                    {loading ? <></> : <div className={'filter'}>
                        <span className={'filter-icon'}>{FilterIcon(24, 24)}</span>
                    </div>}
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