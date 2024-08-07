import Tasks from "../Tasks/Tasks.jsx";
import {useState} from "react";

const Task=({text,IsDone=false})=>{
    const [Ischeck,setIscheck]=useState(IsDone);
    const ClickHandler=()=>{
        setIscheck(!Ischeck)}
    return (
        <li className='task'>
            <div className='left'><span className='circle'>A</span> <span> {text}</span>
            </div>
            <label className="custom-checkbox">
                <input type="checkbox" checked={Ischeck} onChange={ClickHandler}/>
                <span className="checkmark"></span>
            </label></li>
    )
}


export default Task;