import './LogOut.css';
import LogOut from './logout.svg';

import { NavLink } from 'react-router-dom';

import { useUser } from '../../Context/UserContext.jsx';

export default function LogOutIcon(width, height) {
  const { logUserOut } = useUser();
  return (
    <NavLink to="/login">
      <img
        className="logout-icon"
        src={LogOut}
        alt="LogOut Icon"
        width={width}
        height={height}
        onClick={logUserOut}
      ></img>
    </NavLink>
  );
}
