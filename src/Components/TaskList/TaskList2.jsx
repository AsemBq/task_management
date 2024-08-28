import "./TaskList.css";

import FilterIcon from "../../Icon/FilterIcon/FilterIcon";
import CheckIcon from "../../Icon/CheckIcon/CheckIcon.jsx";
import HeaderWithIcon from "../HeaderWithIcon/HeaderWithIcon";
import LogoutIcon from "../../Icon/LogoutIcon/LogoutIcon.jsx";
import Tasks from "../Tasks/Tasks";
import AddTaskButton from "../AddTaskButton/AddTaskButton";

import { useUser } from "../../Context/UserContext";
import {
  useTasksSelector,
  useCurrentPageSelector,
  useTotalPagesSelector,
  useTotatlItemsSelector,
  useReFetchSelector,
  useStatusSelector,
  fetchTasksThunk,
  toggleReFetch,
  setCurrentPage,
} from "../../Slices/taskSlice.js";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import Pagination from "../Pagination/Pagination.jsx";

export default function TaskList2({ className }) {
  const dispatch = useDispatch();

  const tasks = useTasksSelector();
  const status = useStatusSelector();
  const reFetch = useReFetchSelector();
  const currentPage = useCurrentPageSelector();
  const totalPages = useTotalPagesSelector();
  const totalItems = useTotatlItemsSelector();
  console.log(("tp: ", totalPages, " ti: ", totalItems));

  const { username } = useUser();
  const [isFiltered, setIsFiltered] = useState(false);

  useEffect(() => {
    console.log("refetch: ", reFetch);
    if (!reFetch) return;
    console.log("fethcing tasks for paeg ", currentPage);
    dispatch(fetchTasksThunk({ page: currentPage, perPage: 3 }));
    dispatch(toggleReFetch(false));
  }, [reFetch]);

  return (
    <div className={className}>
      <HeaderWithIcon
        text={`${username}'s Tasks`}
        leftIcon={LogoutIcon("24px", "24px")}
      />
      <div className='box-body'>
        {tasks.length > 0 || (tasks.length == 0 && isFiltered) ? (
          <div className='filter-icon-parent'>
            {isFiltered ? CheckIcon("16px", "16px") : <></>}
            {FilterIcon("24px", "24px", () => setIsFiltered(!isFiltered))}
          </div>
        ) : (
          <></>
        )}

        <Tasks
          tasks={
            isFiltered ? tasks.filter((task) => task.done === true) : tasks
          }
          status={status}
        />

        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          totalItems={totalItems}
          setCurrentPage={(number) => dispatch(setCurrentPage({ number }))}
          loading={status === "pending"}
        />
      </div>
      <div className='box-button'>
        <AddTaskButton />
      </div>
    </div>
  );
}
