import './TextInput.css';

export default function TextInput({
  className,
  name,
  placeholder,
  inputType = 'text',
  icon,
  right,
}) {
  return (
    <div className={`_text-input__form-group ${className}`}>
      <label className={`_text-input__label`}>{name}</label>
      <input
        type={inputType}
        className="_text-input__input"
        placeholder={placeholder}
      />
      <div className="_text-input__icon" style={{ right }}>
        {icon}
      </div>
    </div>
  );
}
