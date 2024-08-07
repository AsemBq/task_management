import './VisibilityIcon.css';

import VisibilitySVG from './Visibility.svg';

export default function VisibilityIcon(width, height) {
  return (
    <img
      className="visibility-icon"
      src={VisibilitySVG}
      alt="Visibility Icon"
      width={width}
      height={height}
    ></img>
  );
}
