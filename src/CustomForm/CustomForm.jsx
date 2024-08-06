import TextInput from '../TextInput/TextInput';
import SubmitButton from '../SubmitButton/SubmitButton';

import './CustomForm.css';
import {useContext} from "react";
import {UserContext} from "../Wrapper/MainContext.jsx";

export default function CustomForm({
  firstClassName,
  firstName,
  firstId,
  firstInputName,
  firstValue,
  firstPlaceHolder = 'Placeholder',
  firstType = 'text',
  firstIcon,
  firstRight,
  secondClassName,
  secondName,
  secondId,
  secondInputName,
  secondValue,
  secondPlaceHolder = 'Placeholder',
  secondType = 'text',
  SecondIcon,
  secondRight,
  buttonText,
}) {
  const context=useContext(UserContext)
  const HandleForm = (e)=>{
    e.preventDefault();
    switch (buttonText) {
      case 'login':
        context.setIsUser(true)
        break;
      case 'Save':

        break;
      case 'Create':
        break
    }
  }

  return (
    <form action="" className="_custom-form" onSubmit={HandleForm}>
      <TextInput
        className={`custom-form__label ${firstClassName}`}
        name={firstName}
        id={firstId}
        inputName={firstInputName}
        value={firstValue}
        placeholder={firstPlaceHolder}
        inputType={firstType}
        icon={firstIcon}
        right={firstRight}
      />
      <TextInput
        className={`custom-form__label ${secondClassName}`}
        name={secondName}
        id={secondId}
        inputName={secondInputName}
        value={secondValue}
        placeholder={secondPlaceHolder}
        inputType={secondType}
        icon={SecondIcon}
        right={secondRight}
      />
      <SubmitButton text={buttonText} />
    </form>
  );
}
