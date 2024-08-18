import './ReturnIcon.css';

import ReturnSVG from './Return.svg';

import { useNavigate } from 'react-router-dom';

export default function ReturnIcon(width, height) {
  const navigate = useNavigate();
  return (
    <img
      className="return-icon"
      src={ReturnSVG}
      alt="Return Icon"
      width={width}
      height={height}
      onClick={() => navigate('/list')}
    ></img>
  );
}
