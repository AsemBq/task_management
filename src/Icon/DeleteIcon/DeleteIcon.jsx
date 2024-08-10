import './DeleteIcon.css';

import DeleteSVG from './Delete.svg';

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
