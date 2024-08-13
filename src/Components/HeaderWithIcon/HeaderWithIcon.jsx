import './HeaderWithIcon.css';

export default function HeaderWithIcon({ text, leftIcon, rightIcon }) {
  return (
    <header className="_header-with-icon">
      <div className="_header-with-icon__left-icon _header-with-icon__icon">
        {leftIcon}
      </div>
      <h1>{text}</h1>
      <div className="_header-with-icon__right-icon _header-with-icon__icon">
        {rightIcon}
      </div>
    </header>
  );
}
