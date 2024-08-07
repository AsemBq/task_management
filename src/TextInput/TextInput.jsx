import './TextInput.css';
import {forwardRef, useRef} from "react";

<<<<<<< HEAD
const TextInput=({ ...config },ref)=>{
  return (
    <div {...config['parentDiv']['tag']}>
      <label {...config['label']['tag']}> {...config['label']['text']}</label>
      <input ref={ref} {...config['input']['tag']} />
=======
export default function TextInput({ errorMessage, ...config }) {
  const cn = config['parentDiv']['tag']['className'];

  return (
    <div
      {...config['parentDiv']['tag']}
      className={errorMessage ? `${cn} erroneous_input` : cn}
    >
      <label {...config['label']['tag']}>{config['label']['text']}</label>
      <input {...config['input']['tag']} />
>>>>>>> c04c40e (added LoginInfo Context which takes care of logging users in and out.also deleted the previous Context. also added errors to login form on submit for empty username and password fields.)
      <div className="_text-input__icon" {...config['icon']['tag']}>
        {config['icon']['icon']}
      </div>
      {errorMessage && <span className="error-message">{errorMessage}</span>}
    </div>
  );
}

export default forwardRef(TextInput);
