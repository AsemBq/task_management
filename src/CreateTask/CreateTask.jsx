import CustomForm from '../CustomForm/CustomForm';
import HeaderWithIcon from '../HeaderWithIcon/HeaderWithIcon';
import ReturnIcon from '../ReturnIcon/ReturnIcon';

import './CreateTask.css';

export default function CreateTask({ className }) {
  return (
    <div className={className}>
      <HeaderWithIcon
        text="Create Task"
        rightIcon={ReturnIcon()}
      ></HeaderWithIcon>
      <CustomForm
        firstClassName="name"
        firstName="name"
        secondClassName="priority"
        secondName="priority"
        buttonText="Create"
      />
    </div>
  );
}
