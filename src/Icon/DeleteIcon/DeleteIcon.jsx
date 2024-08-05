import DeleteSVG from './Delete.svg';
import './DeleteIcon.css';
export default function DeleteIcon(width, height) {
  return (
    <img
      className="delete-icon"
      src={DeleteSVG}
      alt="Delete Icon"
      width={width}
      height={height}
    ></img>
  );
}
