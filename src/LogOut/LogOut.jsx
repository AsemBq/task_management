import LogOut from './logout.svg';
import './LogOut.css'
export default function LogOutIcon(width, height) {
    return (
        <img
            className="logout-icon"
            src={LogOut}
            alt="LogOut Icon"
            width={width}
            height={height}
        ></img>
    );
}