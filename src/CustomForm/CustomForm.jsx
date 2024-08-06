import TextInput from '../TextInput/TextInput';
import SubmitButton from '../SubmitButton/SubmitButton';
import { useContext } from 'react';
import { UserContext } from '../Wrapper/MainContext.jsx';

import './CustomForm.css';
import { useContext } from 'react';
import { UserContext } from '../Wrapper/MainContext.jsx';

export default function CustomForm({ config }) {
  const context = useContext(UserContext);
  const handleSubmit = (e) => {
    e.preventDefault();
    switch (buttonText) {
      case 'login':
        context.setIsUser(true);
        break;
      case 'Save':
        break;
      case 'Create':
        break;
    }
  };

  return (
    <form action="" className="_custom-form" onSubmit={handleSubmit}>
      <TextInput {...config['firstInput']} />
      <TextInput {...config['secondInput']} />
      <SubmitButton {...config['button']} />
    </form>
  );
}
