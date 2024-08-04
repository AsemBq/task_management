import CustomForm from '../CustomForm/CustomForm';
import DeleteIcon from '../DeleteIcon/DeleteIcon';
import HeaderWithIcon from '../HeaderWithIcon/HeaderWithIcon';
import VisibilityIcon from '../VisibilityIcon/VisibilityIcon';

import './Login.css';

export default function Login({ className }) {
  return (
    <div className={className}>
      <HeaderWithIcon text="Task Manager"></HeaderWithIcon>
      <CustomForm
        firstClassName="username"
        firstName="Username"
        firstIcon={DeleteIcon('45px', '45px')}
        firstRight="0.05rem"
        secondClassName="password"
        secondName="Password"
        SecondIcon={VisibilityIcon('23px', '23px')}
        buttonText="login"
        secondRight="0.8rem"
      />
    </div>
  );
}
