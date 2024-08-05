import './EmptyTaskList.css'
import LogOutIcon from "../LogOut/LogOut.jsx";
import FileIcon from "../FileIcon/FileIcon.jsx";
import PlusIcon from "../PlusIcon/PlusIcon.jsx";
const EmptyTaskList =({className})=>{
    return (
        <div className={className}>

            <div className="box-tittle">
                    <span className='top-left-icon'>{LogOutIcon(24,24)}</span>
                <h1>Jenny&#39;s Tasks</h1>
            </div>
            <div className='box-body'>
                <div className='icon'>
                    {FileIcon(47,53)}
                </div>
                <span>Start with create a task</span>
            </div>
            <div className={'box-button'}>
                <button className={'button'}>
                        <span className='plus-icon'>{PlusIcon(13,12)}</span>
                    <span className={'text'}>Task</span>
                </button>
            </div>

        </div>
    )
}

export default EmptyTaskList