import './TextInput.css';

export default function TextInput({
  className,
  name,
  inputName,
  id,
  value,
  placeholder,
  inputType = 'text',
  icon,
  right,
}) {
  return (
    <div className={`_text-input__form-group ${className}`}>
      <label className={`_text-input__label`} htmlFor={id}>
        {name}
      </label>
      <input
        name={inputName}
        type={inputType}
        className="_text-input__input"
        value={value}
        placeholder={placeholder}
        id={id}
      />
      <div className="_text-input__icon" style={{ right }}>
        {icon}
      </div>
    </div>
  );
}
