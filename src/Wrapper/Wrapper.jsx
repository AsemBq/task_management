import './Wrapper.css';
import WrapperItem from '../WrapperItem/WrapperItem.jsx';
import TaskList1 from "../taskList1/TaskList1";
import TaskList2 from "../taskList2/TaskList2";

export default function Wrapper() {
    return (
        <div className="wrapper">
            <WrapperItem className="wrapper__item login_page"/>
            <TaskList1 className="wrapper__item TaskList1"/>
            <WrapperItem className="wrapper__item no_tasks_yet"/>
            <WrapperItem className="wrapper__item edit_task"/>
            <WrapperItem className="wrapper__item create_task"/>
            <TaskList2 className='wrapper__item TasksList'/>
        </div>
    );
}
