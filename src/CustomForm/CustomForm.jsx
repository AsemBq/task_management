import TextInput from '../TextInput/TextInput';
import SubmitButton from '../SubmitButton/SubmitButton';

import './CustomForm.css';

export default function CustomForm({
  firstClassName,
  firstName,
  firstPlaceHolder = 'Placeholder',
  firstType = 'text',
  firstIcon,
  secondClassName,
  secondName,
  secondPlaceHolder = 'Placeholder',
  secondType = 'text',
  SecondIcon,
  buttonText,
}) {
  return (
    <form action="" className="_custom-form">
      <TextInput
        className={`custom-form__label ${firstClassName}`}
        name={firstName}
        placeholder={firstPlaceHolder}
        type={firstType}
      />
      <TextInput
        className={`custom-form__label ${secondClassName}`}
        name={secondName}
        placeholder={secondPlaceHolder}
        type={secondType}
      />
      <SubmitButton text={buttonText} />
    </form>
  );
}
