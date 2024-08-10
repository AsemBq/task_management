import './TextInput.css';
import {forwardRef, useRef} from "react";

const TextInput=({ ...config },ref)=>{
  return (
    <div {...config['parentDiv']['tag']}>
      <label {...config['label']['tag']}> {...config['label']['text']}</label>
      <input ref={ref} {...config['input']['tag']} />
      </div>
      )
export default function TextInput({ errorMessage, ...config }) {
  const cn = config['parentDiv']['tag']['className'];
  const error = config['error'];
  return (
    <div
      {...config['parentDiv']['tag']}
      className={error ? `${cn} erroneous_input` : cn}
    >
      <label {...config['label']['tag']}>{config['label']['text']}</label>
      <input {...config['input']['tag']} />
      <div className="_text-input__icon" {...config['icon']['tag']}>
        {config['icon']['icon']}
      </div>
      {error && <span className="error-message">{error}</span>}
    </div>
  );
}

export default forwardRef(TextInput);
