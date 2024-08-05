import CustomForm from '../CustomForm/CustomForm';
import EraseIcon from '../Icon/EraseIcon/EraseIcon';
import HeaderWithIcon from '../HeaderWithIcon/HeaderWithIcon';
import VisibilityIcon from '../Icon/VisibilityIcon/VisibilityIcon';

import './Login.css';

export default function Login({ className }) {
  return (
    <div className={className}>
      <HeaderWithIcon text="Task Manager"></HeaderWithIcon>
      <CustomForm
        firstClassName="username"
        firstName="Username"
        firstIcon={EraseIcon('45px', '45px')}
        firstRight="0.05rem"
        secondClassName="password"
        secondName="Password"
        secondType="password"
        SecondIcon={VisibilityIcon('23px', '23px')}
        buttonText="login"
        secondRight="0.8rem"
      />
    </div>
  );
}
