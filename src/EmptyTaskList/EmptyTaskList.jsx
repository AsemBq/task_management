import './EmptyTaskList.css'

import LogOutIcon from "../LogOut/LogOut.jsx";
import FileIcon from "../Icon/FileIcon/FileIcon.jsx";
import PlusIcon from "../Icon/PlusIcon/PlusIcon.jsx";
import AddTaskButton from "../AddTaskButton/AddTaskButton.jsx";


const EmptyTaskList =({className})=>{
    return (
        <>
            <div className='icon'>
                {FileIcon(47, 53)}
            </div>
            <span>Start with create a task</span>
        </>

    )
}

export default EmptyTaskList