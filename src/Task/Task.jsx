import {useState} from "react";
import {NavLink} from "react-router-dom";

const Task=({text,IsDone,id=false})=>{
    const [Ischeck,setIscheck]=useState(IsDone);
    const ClickHandler=()=>{
        setIscheck(!Ischeck)}
    return (
        <li className='task'>
            <div className='left'><span className='circle'>A</span> <NavLink className={'text'}
                to={`edit/${id}`}><span> {text}</span></NavLink>
            </div>
            <label className="custom-checkbox">
                <input type="checkbox" checked={Ischeck} onChange={ClickHandler}/>
                <span className="checkmark"></span>
            </label></li>
    )
}


export default Task;