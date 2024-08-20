import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { useSelector } from 'react-redux';
import useTasks from '../hooks/useTasks';

const { getTasks } = useTasks();

export const fetchTasks = createAsyncThunk(
  'task/fetchTasks',
  async ({ page, perPage }) => {
    return await getTasks(page, perPage);
  }
);

const initialState = {
  tasks: [],
  page: 1,
  status: 'idle', // 'idle', 'loading', 'error'
  error: null,
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
  extraReducers(builder) {
    builder
      .addCase(fetchTasks.pending, (state, action) => {
        console.log('pending');
        state.status = 'loading';
      })
      .addCase(fetchTasks.fulfilled, (state, action) => {
        const newTasks = [];
        console.log('fullfilled');

        action.payload.forEach((task) => {
          newTasks.push(task);
        });
        state.tasks = newTasks;
        state.status = 'idle';
      })
      .addCase(fetchTasks.rejected, (state, action) => {
        state.status = 'error';
        console.log('rejected');
        state.error = action.payload;
      });
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
export const selectPage = (state) => state.task.page;
export const selectStatus = (state) => state.task.status;
export const selectTaskFetched = (state) => state.task.tasksFetched;

export const useTasksSelector = () => {
  return useSelector(selectTask);
};

export const useTasksFetchedSelector = () => {
  return useSelector(selectTaskFetched);
};

export const useStatusSelector = () => {
  return useSelector(selectStatus);
};

export const usePageSelector = () => {
  return useSelector(selectPage);
};

export default taskSlice.reducer;
