import './TaskList2.css'
import LogOutIcon from "../LogOut/LogOut.jsx";
import FilterIcon from "../Icon/FilterIcon/FilterIcon.jsx";
import PlusIcon from "../Icon/PlusIcon/PlusIcon.jsx";

const TaskList2=({className})=>{
    return (
        <div className={className}>

            <div className="box-tittle">
                    <span className='top-left-icon'>{LogOutIcon(24,24)}</span>
                <h1>Jenny&#39;s Tasks</h1>
            </div>
            <div className='box-body'>
                <div className={'filter'}>
                    <span className={'filter-icon'}>{FilterIcon(24,24)}</span>
                </div>
                <ul className='tasks'>
                    <li className='task'>
                        <div className='left'><span className='circle'>A</span> <span> Task #1</span>
                        </div>
                        <label className="custom-checkbox">
                            <input type="checkbox"/>
                            <span className="checkmark"></span>
                        </label></li>
                    <li className='task'>
                        <div className='left'><span className='circle'>A</span> <span> Task #2</span>
                        </div>
                        <input type="checkbox"/></li>
                    <li className='task'>
                        <div className='left'><span className='circle'>A</span> <span> Task #3</span>
                        </div>
                        <input type="checkbox"/></li>

                </ul>
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

export default TaskList2;