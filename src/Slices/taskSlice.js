import { createSlice } from '@reduxjs/toolkit';
import { useSelector } from 'react-redux';

const initialState = {
  tasks: [],
  tasksFetched: false,
};

export const taskSlice = createSlice({
  name: 'task',
  initialState,
  reducers: {
    addTask(state, action) {
      if (action.payload.unshift === true) {
        state.tasks.unshift(action.payload.data);
      } else {
        state.tasks.push(action.payload.data);
      }
    },
    deleteTask(state, action) {
      const newTasks = state.tasks.filter(
        (task) => task.id !== action.payload.id
      );
      return { tasks: newTasks, tasksFetched: state.tasksFetched };
    },
    editTask(state, action) {
      const existingTask = state.tasks.find(
        (task) => task.id === action.payload.id
      );
      if (existingTask) {
        existingTask.name = action.payload.name;
        existingTask.priority = action.payload.priority;
      }
    },
    toggleDone(state, action) {
      const existingTask = state.tasks.find(
        (task) => task.id === action.payload.id
      );
      if (existingTask) {
        existingTask.done = action.payload.done;
      }
    },
    toggleFetchtedTasks(state, action) {
      state.tasksFetched = action.payload.fetched;
    },
  },
});

export const {
  addTask,
  deleteTask,
  editTask,
  toggleDone,
  toggleFetchtedTasks,
} = taskSlice.actions;

export const selectTask = (state) => state.task.tasks;
export const selectTaskFetched = (state) => state.task.tasksFetched;

export const useTasksSelector = () => {
  return useSelector(selectTask);
};

export const useTasksFetchedSelector = () => {
  return useSelector(selectTaskFetched);
};

export default taskSlice.reducer;
