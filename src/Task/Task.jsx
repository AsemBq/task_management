import {useState} from "react";
import {NavLink} from "react-router-dom";
import axios from "axios";

const Task=({task})=>{
    const [Ischeck,setIscheck]=useState(task.IsDone);
    const token=JSON.parse(localStorage.getItem("token"));
    const ClickHandler=()=>{
        const data={
            'token':token,
            'id': task.id,
            'name':task.name,
            'priority':task.priority,
            'IsDone':!task.IsDone,
        }
        axios.post('http://localhost:8000/user/edit_tasks',data).then(res=>{
            console.log(res)
            setIscheck(!task.IsDone);
        })};

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