import './SubmitButton.css';

export default function SubmitButton({ className, text }) {
  return (
    <button type="submit" className={`${className} _submit-btn`}>
      {text}
    </button>
  );
}
