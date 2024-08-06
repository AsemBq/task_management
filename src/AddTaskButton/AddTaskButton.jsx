import PlusIcon from "../Icon/PlusIcon/PlusIcon.jsx";
import './AddTaskButton.css'
import {NavLink} from "react-router-dom";

export default function AddTaskButton() {
    return (
        <NavLink to={'/create'}>
            <button className={'button'}>
                <span className='plus-icon'>{PlusIcon(13, 12)}</span>
                <span className={'text'}>Task</span>
            </button>
        </NavLink>
    )
}