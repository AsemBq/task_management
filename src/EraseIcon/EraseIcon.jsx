import EraseSVG from './Erase.svg';
import './EraseIcon.css';
export default function EraseIcon(width, height) {
  return (
    <img
      className="erase-icon"
      src={EraseSVG}
      alt="Erase Icon"
      width={width}
      height={height}
    ></img>
  );
}
