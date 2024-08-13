import LogOut from './logout.svg';
import './LogOut.css'
import {NavLink} from "react-router-dom";
import {useContext} from "react";
import {UserContext} from "../../Wrapper/MainContext.jsx";
import pb from "../lib/Pocketbase.js";
export default function LogOutIcon(width, height) {
    const context=useContext(UserContext);
    const LogOutHandler=()=>{
        localStorage.removeItem('token')
        localStorage.removeItem('UserName')
        context.setIsUser(false)
        pb.authStore.clear()
    }
    return (
        <NavLink to='/login'>
            <img
                className="logout-icon"
                src={LogOut}
                alt="LogOut Icon"
                width={width}
                height={height}
                onClick={LogOutHandler}
            ></img>
        </NavLink>
    );
}