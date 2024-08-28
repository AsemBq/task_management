import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
import useTasks from "../hooks/useTasks";

const initialState = {
  tasks: [],
  reFetch: true,
  currentPage: 1,
  totalPages: 1,
  status: "idle", // 'idle', 'pending , 'loading', 'error'
  error: null,
  reducerType: null,
};

const { getTasks, createTask, editTask, deleteTask, toggleDone } = useTasks();

export const fetchTasksThunk = createAsyncThunk(
  "task/fetchTasks",
  async ({ page, perPage }) => {
    return await getTasks(page, perPage);
  }
);

export const addTaskThunk = createAsyncThunk(
  "tasks/addTask",
  async (taskData) => {
    return await createTask(taskData);
  }
);

export const editTaskThunk = createAsyncThunk(
  "tasks/editTask",
  async (taskId, taskData) => {
    return await editTask(taskId, taskData);
  }
);

export const deleteTaskThunk = createAsyncThunk(
  "tasks/deleteTask",
  async (taskId) => {
    return await deleteTask(taskId);
  }
);

export const toggleDoneThunk = createAsyncThunk(
  "tasks/toggleDong",
  async ({ taskId, done }) => {
    console.log("toggle done thunk, taskId: ", taskId, " done: ", done);
    return await toggleDone(taskId, done);
  }
);

export const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {
    toggleReFetch(state, action) {
      state.reFetch = action.payload;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchTasksThunk.pending, (state) => {
        console.log("pending");
        state.reducerType = "fetchTasks";
        state.status = "pending";
      })
      .addCase(fetchTasksThunk.fulfilled, (state, action) => {
        console.log("fullfilled");
        state.reducerType = "fetchTasks";
        state.currentPage = action.payload.currentPage;
        state.totalPages = action.payload.totalPages;
        state.tasks = action.payload.items;
      })
      .addCase(fetchTasksThunk.rejected, (state, action) => {
        state.reducerType = "fetchTasks";
        state.status = "error";
        console.log("rejected");
        state.error = action.payload;
      })
      .addCase(addTaskThunk.pending, (state) => {
        console.log("pending");
        state.reducerType = "addTask";
        state.status = "pending";
      })
      .addCase(addTaskThunk.fulfilled, (state) => {
        console.log("fullfilled");
        state.reducerType = "addTask";
        state.status = "fulfilled";
      })
      .addCase(addTaskThunk.rejected, (state, action) => {
        console.log("rejected");
        state.reducerType = "addTask";
        state.error = action.payload;
      })
      .addCase(deleteTaskThunk.pending, (state) => {
        console.log("pending");
        state.reducerType = "deleteTask";
        state.status = "pending";
      })
      .addCase(deleteTaskThunk.fulfilled, (state) => {
        console.log("fullfilled");
        state.reducerType = "deleteTask";
        state.status = "fulfilled";
      })
      .addCase(deleteTaskThunk.rejected, (state, action) => {
        console.log("rejected");
        state.reducerType = "deleteTask";
        state.error = action.payload;
      })
      .addCase(editTaskThunk.pending, (state) => {
        console.log("pending");
        state.reducerType = "editTask";
        state.status = "pending";
      })
      .addCase(editTaskThunk.fulfilled, (state) => {
        console.log("fullfilled");
        state.reducerType = "editTask";
        state.status = "fulfilled";
      })
      .addCase(editTaskThunk.rejected, (state, action) => {
        console.log("rejected");
        state.reducerType = "editTask";
        state.error = action.payload;
      })
      .addCase(toggleDoneThunk.pending, (state) => {
        console.log("pending");
        state.reducerType = "toggleDone";
        state.status = "pending";
      })
      .addCase(toggleDoneThunk.fulfilled, (state, action) => {
        console.log("fullfilled");
        console.log("done: ", action.payload);
        state.reducerType = "toggleDone";
        state.status = "fulfilled";
      })
      .addCase(toggleDoneThunk.rejected, (state, action) => {
        console.log("rejected");
        state.reducerType = "toggleDone";
        state.error = action.payload;
      });
  },
});

export const selectReFetch = (state) => state.task.reFetch;
export const selectTasks = (state) => state.task.tasks;
export const selectCurrentPage = (state) => state.task.currentPage;
export const selectTotalPages = (state) => state.task.totalPages;
export const selectTotalItems = (state) => state.task.totalItems;
export const selectStatus = (state) => state.task.status;

export const useTasksSelector = () => {
  return useSelector(selectTasks);
};

export const useReFetchSelector = () => {
  return useSelector(selectReFetch);
};

export const useStatusSelector = () => {
  return useSelector(selectStatus);
};

export const useCurrentPageSelector = () => {
  return useSelector(selectCurrentPage);
};

export const useTotalPagesSelector = () => {
  return useSelector(selectTotalPages);
};

export const useTotatlItemsSelector = () => {
  return useSelector(selectTotalItems);
};

export const { toggleReFetch } = taskSlice.actions;

export default taskSlice.reducer;
