import './CustomForm.css';

import TextInput from '../TextInput/TextInput';
import SubmitButton from '../SubmitButton/SubmitButton';

export default function CustomForm({ config }) {
  return (
    <>
      {config['error']['text'] && (
        <h3
          className={`_custom-form__error ${config['error']['tag']['classNmae']}}`}
        >
          {config['error']['text']}
        </h3>
      )}
      <form action="" className="_custom-form" {...config['form']}>
        <TextInput {...config['firstInput']} />
        <TextInput {...config['secondInput']} />
        <SubmitButton {...config['button']} />
      </form>
    </>
  );
}
