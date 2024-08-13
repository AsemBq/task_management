import {useState} from "react";
import {NavLink} from "react-router-dom";
import useTasks from '../hooks/useTasks';
import axios from "axios";

const Task=({task})=>{
    const [Ischeck,setIscheck]=useState(task.done);
    const token=JSON.parse(localStorage.getItem("token"));
    const {editTask}=useTasks()
    const ClickHandler=()=> {
        const updatedTask = editTask(task.id, {
            name: task.name,
            priority: task.priority,
            done:!Ischeck
        });
        setIscheck(!Ischeck)
    }
    return (
        <li className='task'>
            <div className='left'><span className='circle'>A</span> <NavLink className={'text'}
                to={`/edit/${task.id}`}><span> {task.name.slice(0,20)}</span></NavLink>
            </div>
            <label className="custom-checkbox">
                <input type="checkbox" checked={Ischeck} onChange={ClickHandler}/>
                <span className="checkmark"></span>
            </label></li>
    )
}


export default Task;