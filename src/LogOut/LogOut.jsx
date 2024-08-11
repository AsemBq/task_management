import './LogOut.css';

import LogOut from './logout.svg';

import { NavLink } from 'react-router-dom';

export default function LogOutIcon(width, height) {
  const handleLogout = () => {
    // logUserOut();
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
