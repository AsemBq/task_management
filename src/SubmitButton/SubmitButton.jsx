import './SubmitButton.css';

export default function SubmitButton({ ...config }) {
  console.log(config['button']['text']);
  return (
    <button type="submit" {...config['button']['tag']}>
      {config['button']['text']['text']}
    </button>
  );
}
