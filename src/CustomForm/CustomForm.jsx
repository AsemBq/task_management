import TextInput from '../TextInput/TextInput';
import SubmitButton from '../SubmitButton/SubmitButton';

import './CustomForm.css';

export default function CustomForm({ config }) {
  const baseConfig = {
    firstInput: {
      placeholder: 'Placeholder',
      type: 'text',
    },
    secondInput: {
      placeholder: 'Placeholder',
      type: 'text',
    },
    button: {},
  };
  console.log(config);

  // const updatedConfig = { ...baseConfig, ...config };
  // console.log(updatedConfig);
  function handleSubmit(event) {
    event.preventDefault();
  }
  return (
    <form action="" className="_custom-form" onSubmit={handleSubmit}>
      <TextInput {...config['firstInput']} />
      <TextInput {...config['secondInput']} />
      <SubmitButton {...config['button']} />
    </form>
  );
}
