import './LogOut.css';

import LogOut from './logout.svg';

import { NavLink } from 'react-router-dom';
import { useContext } from 'react';
import { UserContext } from '../Wrapper/MainContext.jsx';

export default function LogOutIcon(width, height) {
  const context = useContext(UserContext);
  const LogOutHandler = () => {
    context.setIsUser(false);
  };
  return (
    <NavLink to="/login">
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
