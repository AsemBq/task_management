import './TaskList2.css';
import LogOutIcon from '../LogOut/LogOut.jsx';
import FilterIcon from '../Icon/FilterIcon/FilterIcon.jsx';
import HeaderWithIcon from '../HeaderWithIcon/HeaderWithIcon.jsx';
import Tasks from '../Tasks/Tasks.jsx';
import AddTaskButton from '../AddTaskButton/AddTaskButton.jsx';
import Pagination from '../Pagination/Pagination.jsx';
import EmptyTaskList from '../EmptyTaskList/EmptyTaskList.jsx';
import { useEffect, useState } from 'react';
import axios from 'axios';

const TaskList2 = ({ className }) => {
  return (
    <div className={className}>
      <HeaderWithIcon
        text={"Jenny's Tasks"}
        leftIcon={LogOutIcon('24px', '24px')}
      />
      <div className="box-body">
        <div className={'filter'}>
          <span className={'filter-icon'}>{FilterIcon(24, 24)}</span>
        </div>
        <Tasks />
      </div>
      <div className={'box-button'}>
        <AddTaskButton />
      </div>
    </div>
  );
};

export default TaskList2;
