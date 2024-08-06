import TextInput from '../TextInput/TextInput';
import SubmitButton from '../SubmitButton/SubmitButton';
import { useContext } from 'react';
import { UserContext } from '../Wrapper/MainContext.jsx';

import './CustomForm.css';

export default function CustomForm({ config }) {
  const context = useContext(UserContext);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('hanlde submit');
    console.log(config['button']['button']['text']);

    switch (config['button']['button']['text']['text']) {
      case 'Login':
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
