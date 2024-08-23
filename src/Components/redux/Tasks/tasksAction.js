import {CREATE_TASK, DELETE_TASK, EDIT_TASK, RECEIVE_TASKS} from "./tasksType.js";
import {createAsyncThunk} from "@reduxjs/toolkit";
import pb from "../../lib/Pocketbase.js";

export const setTask = (tasks)=>{
    return{
        type:RECEIVE_TASKS,
        payload:tasks
    }
}

export const editTask = createAsyncThunk('task',
    async (taskData,{dispatch,state})=>{
        const taskId=taskData.id
        delete taskData.id
        try {
            const editedTask = await pb.collection('tasks').update(taskId,taskData);
            return {
                type:EDIT_TASK,
            };
        } catch (error) {
            console.error(error);
        }
    })

export const deleteTask=createAsyncThunk('task',
    async(taskId,{dispatch,state})=> {
        console.log(taskId)
        try {
            await pb.collection('tasks').delete(taskId);
            return{
                type:DELETE_TASK,
            }
        } catch (error) {
            console.error('Error deleting task:', error);
        }
    })

export const addTask = createAsyncThunk('data',
    async(taskData,{dispatch,state})=>{
        try {
            const newTask = await pb.collection('tasks').create(taskData);
            return {
                type:CREATE_TASK,
            };
        } catch (error) {
            console.error('Error creating task:', error);
        }
    } )

export const fetchTasks= createAsyncThunk('data',
    async (_, {dispatch})=>{
        try {
            const tasksData = await pb.collection('tasks').getList(1, 9999, {
                sort: '-created',
            })
            dispatch(setTask(tasksData.items))
        } catch (error) {
            console.log(error)
        }
    }
)
