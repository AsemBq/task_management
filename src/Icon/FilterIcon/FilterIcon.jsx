import './FilterIcon.css';

import FilterIconSVG from './filterIcon.svg';

export default function FilterIcon(width, height, onClick) {
  return (
    <img
      className="filter-icon"
      src={FilterIconSVG}
      alt="Filter Icon"
      width={width}
      height={height}
      onClick={onClick}
    ></img>
  );
}
