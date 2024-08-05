import RemoveSVG from './Remove.svg';
import './RemoveIcon.css';
export default function RemoveIcon(width, height) {
  return (
    <img
      className="remove-icon"
      src={RemoveSVG}
      alt="Remove Icon"
      width={width}
      height={height}
    ></img>
  );
}
