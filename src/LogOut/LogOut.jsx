import LogOut from './logout.svg';
import './LogOut.css'
import {NavLink} from "react-router-dom";
export default function LogOutIcon(width, height) {
    return (
        <NavLink to={'login'}>
            <img
                className="logout-icon"
                src={LogOut}
                alt="LogOut Icon"
                width={width}
                height={height}
            ></img>
        </NavLink>
    );
}