import CustomForm from '../CustomForm/CustomForm';
import HeaderWithIcon from '../HeaderWithIcon/HeaderWithIcon';
import DeleteIcon from '../DeleteIcon/DeleteIcon';
import ReturnIcon from '../ReturnIcon/ReturnIcon';

import './EditTask.css';

export default function EditTask({ className }) {
  return (
    <div className={className}>
      <HeaderWithIcon
        text="Edit Task #1"
        leftIcon={DeleteIcon('24px', '24px')}
        rightIcon={ReturnIcon('10px', '15px')}
      ></HeaderWithIcon>
      <CustomForm
        firstClassName="name"
        firstName="name"
        firstValue="Task #1"
        secondClassName="priority"
        secondName="priority"
        secondValue="high"
        buttonText="Save"
      />
    </div>
  );
}
