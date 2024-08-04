import ReturnSVG from './Return.svg';
import './ReturnIcon.css';
export default function ReturnIcon(width, height) {
  return (
    <img
      className="return-icon"
      src={ReturnSVG}
      alt="Return Icon"
      width={width}
      height={height}
    ></img>
  );
}
