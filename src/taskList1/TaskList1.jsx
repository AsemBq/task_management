import './TaskList1.css';
import LogOutIcon from '../LogOut/LogOut.jsx';
import PlusIcon from '../Icon/PlusIcon/PlusIcon.jsx';
import LeftArrowIcon from '../Icon/LeftArrowIcon/LeftArrowIcon.jsx';
import RightArrowIcon from '../Icon/RightArrowIcon/RightArrowIcon.jsx';
import HeaderWithIcon from '../HeaderWithIcon/HeaderWithIcon.jsx';
import Tasks from '../Tasks/Tasks.jsx';
import AddTaskButton from '../AddTaskButton/AddTaskButton.jsx';
import { useUser } from '../Context/UserContext.jsx';

const TaskList1 = ({ className }) => {
  const { username } = useUser();
  return (
    <div className={className}>
      <HeaderWithIcon
        text={`${username}'s Tasks`}
        leftIcon={LogOutIcon('24px', '24px')}
      />
      <div className="box-body">
        <Tasks />
      </div>
      <div className={'box-bottom'}>
        {/* <Pagination /> */}
        <div className={'box-button'}>
          <AddTaskButton />
        </div>
      </div>
    </div>
  );
};

export default TaskList1;
