import './Wrapper.css';
import WrapperItem from './WrapperItem';

export default function Wrapper() {
  return (
    <div className="wrapper">
      <WrapperItem className="wrapper__item login_page" />
      <WrapperItem className="wrapper__item tasks_list_1" />
      <WrapperItem className="wrapper__item no_tasks_yet" />
      <WrapperItem className="wrapper__item edit_task" />
      <WrapperItem className="wrapper__item create_task" />
      <WrapperItem className="wrapper__item tasks_lsit_2" />
    </div>
  );
}
