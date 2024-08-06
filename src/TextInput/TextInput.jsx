import './TextInput.css';

export default function TextInput({ ...config }) {
  console.log('text input');
  console.log(config['input']['tag']);
  return (
    <div {...config['parentDiv']['tag']}>
      <label {...config['label']['tag']}> {...config['label']['text']}</label>
      <input {...config['input']['tag']} />
      <div className="_text-input__icon" {...config['icon']['tag']}>
        {config['icon']['icon']}
      </div>
    </div>
  );
}
