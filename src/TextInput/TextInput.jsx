import './TextInput.css';

export default function TextInput({
  className,
  name,
  placeholder,
  inputType = 'text',
}) {
  return (
    <div className="_text-input__form-group">
      <label className={`${className} _text-input__label`}>{name}</label>
      <input
        type={inputType}
        className="_text-input__input"
        placeholder={placeholder}
      />
    </div>
  );
}
