import './TextInput.css';
import { forwardRef, useRef } from 'react';

const TextInput = ({ ...config }, ref) => {
  return (
    <div {...config['parentDiv']['tag']}>
      <label {...config['label']['tag']}> {...config['label']['text']}</label>
      <input ref={ref} {...config['input']['tag']} />
      <div className="_text-input__icon" {...config['icon']['tag']}>
        {config['icon']['icon']}
      </div>
    </div>
  );
};

export default forwardRef(TextInput);
