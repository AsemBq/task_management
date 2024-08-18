import './CheckIcon.css';

import CheckSVG from './CheckIcon.svg';

export default function CheckIcon(width, height) {
  return (
    <img
      className="check-icon"
      src={CheckSVG}
      alt="Check Icon"
      width={width}
      height={height}
    ></img>
  );
}
