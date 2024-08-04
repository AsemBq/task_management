import TextInput from '../TextInput/TextInput';
import SubmitButton from '../SubmitButton/SubmitButton';

import './CustomForm.css';

export default function CustomForm({
  firstClassName,
  firstName,
  firstPlaceHolder = 'Placeholder',
  firstType = 'text',
  firstIcon,
  firstRight,
  secondClassName,
  secondName,
  secondPlaceHolder = 'Placeholder',
  secondType = 'text',
  SecondIcon,
  secondRight,
  buttonText,
}) {
  return (
    <form action="" className="_custom-form">
      <TextInput
        className={`custom-form__label ${firstClassName}`}
        name={firstName}
        placeholder={firstPlaceHolder}
        type={firstType}
        icon={firstIcon}
        right={firstRight}
      />
      <TextInput
        className={`custom-form__label ${secondClassName}`}
        name={secondName}
        placeholder={secondPlaceHolder}
        type={secondType}
        icon={SecondIcon}
        right={secondRight}
      />
      <SubmitButton text={buttonText} />
    </form>
  );
}
