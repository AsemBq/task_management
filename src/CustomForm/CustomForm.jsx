import './CustomForm.css';

import TextInput from '../TextInput/TextInput';
import SubmitButton from '../SubmitButton/SubmitButton';

import { useState } from 'react';
import { useApp } from '../Context/AppContext';

export default function CustomForm({ config }) {
  const { logUserIn, appInfo } = useApp();

  return (
    <form action="" className="_custom-form" {...config['form']}>
      <TextInput {...config['firstInput']} />
      <TextInput {...config['secondInput']} />
      <SubmitButton {...config['button']} />
    </form>
  );
}
