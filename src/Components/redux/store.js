import {configureStore} from "@reduxjs/toolkit";
import tasksReducer from "./Tasks/taskRedux.js";
import userReducer from "./User/userRedux.js";

const store = configureStore({
    reducer:{
        tasks: tasksReducer,
        user: userReducer,
    },
})

export default store;