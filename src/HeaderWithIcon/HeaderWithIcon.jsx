import './HeaderWithIcon.css';

export default function HeaderWithIcon({ text, leftIcon, RightIcon }) {
  return (
    <header className="_header-wtih-icon">
      <div className="_header-with-icon__left-icon">{leftIcon}</div>
      <h1>{text}</h1>
      <div className="_header-with-icon__right-icon">{RightIcon}</div>
    </header>
  );
}
