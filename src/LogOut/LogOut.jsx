import './LogOut.css';

import LogOut from './logout.svg';

import { NavLink } from 'react-router-dom';
import { useApp } from '../Context/AppContext';

export default function LogOutIcon(width, height) {
  const { appInfo, logUserOut } = useApp();

  const handleLogout = () => {
    logUserOut();
  };

  return (
    <NavLink to="/login">
      <img
        className="logout-icon"
        src={LogOut}
        alt="LogOut Icon"
        width={width}
        height={height}
        onClick={handleLogout}
      ></img>
    </NavLink>
  );
}
