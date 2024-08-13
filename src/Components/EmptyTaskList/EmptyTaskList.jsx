import './EmptyTaskList.css'
import FileIcon from "../../Icon/FileIcon/FileIcon.jsx";
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