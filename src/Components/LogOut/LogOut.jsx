import LogOut from './logout.svg';
import './LogOut.css'
import {NavLink} from "react-router-dom";
import {useDispatch} from "react-redux";
import {logoutUser} from "../redux/User/userAction.js";

export default function LogOutIcon(width, height) {
    const dispatch = useDispatch();
    const LogOutHandler=()=>{
        dispatch(logoutUser())
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