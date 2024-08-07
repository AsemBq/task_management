import './LogOut.css';

import LogOut from './logout.svg';
import { useLoginInfoContext } from '../Context/LoginInfoContext'; // Ensure this import is correct

import { NavLink } from 'react-router-dom';

export default function LogOutIcon(width, height) {
  const { loginStae, setLoginState } = useLoginInfoContext();

  const handleLogout = () => {
    setLoginState({
      isLoggedin: false,
      username: null,
    });
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
