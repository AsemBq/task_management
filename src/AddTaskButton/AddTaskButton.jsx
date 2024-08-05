import PlusIcon from "../Icon/PlusIcon/PlusIcon.jsx";
import './AddTaskButton.css'
export default function AddTaskButton () {
    return (
        <button className={'button'}>
            <span className='plus-icon'>{PlusIcon(13, 12)}</span>
            <span className={'text'}>Task</span>
        </button>
    )
}