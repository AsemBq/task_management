import './DeleteIcon.css';

import DeleteSVG from './DeleteIcon.svg';

export default function DeleteIcon(width, height, onClick) {
  return (
    <img
      className="delete-icon"
      src={DeleteSVG}
      alt="Delete Icon"
      width={width}
      height={height}
      onClick={onClick}
    ></img>
  );
}
