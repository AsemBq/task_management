import WrapperItem from '../WrapperItem/WrapperItem.jsx';
import TaskList1 from '../taskList1/TaskList1';
import TaskList2 from '../taskList2/TaskList2';
import EmptyTaskList from '../EmptyTaskList/EmptyTaskList.jsx';
import CreateTask from '../CreateTask/CreateTask.jsx';
import Login from '../Login/Login.jsx';

import './Wrapper.css';

export default function Wrapper() {
  return (
    <div className="wrapper">
      <Login className="wrapper__item login_page" />
      <TaskList1 className="wrapper__item TaskList1" />
      <EmptyTaskList className="wrapper__item EmptyTaskList" />
      <WrapperItem className="wrapper__item edit_task" />
      <CreateTask className="wrapper__item create_task" />
      <TaskList2 className="wrapper__item TasksList" />
    </div>
  );
}
