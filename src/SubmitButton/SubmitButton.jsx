import './SubmitButton.css';

export default function SubmitButton({ ...config }) {
  return (
    <button type="submit" {...config['button']['tag']}>
      {config['button']['text']['text']}
    </button>
  );
}
