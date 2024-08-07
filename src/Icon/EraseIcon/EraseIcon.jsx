import './EraseIcon.css';

import EraseSVG from './Erase.svg';

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
