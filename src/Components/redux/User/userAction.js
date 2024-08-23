import {USER_IS_LOGIN, USER_LOGIN, USER_LOGOUT} from "./userType.js";
import {createAsyncThunk} from "@reduxjs/toolkit";
import useLogin from "../../../hooks/useLogin.jsx";
import Swal from "sweetalert2";
import pb from "../../lib/Pocketbase.js";


export const setIsUser =()=>{
    return{
        type:USER_IS_LOGIN
    }
}

export const loginUser=createAsyncThunk('user',
    async (userData, { dispatch,state }) => {
        try{
            const login = useLogin();
            const { record } = await login(userData.UserName, userData.Password);
            const {username, id } = record;
            localStorage.setItem('token',JSON.stringify(id))
            localStorage.setItem('UserName',JSON.stringify(username))
            dispatch(setIsUser())
            return{
                type:USER_LOGIN
            }
        }catch (e){
            Swal.fire({
                position: "center",
                icon: "error",
                title: "Username or Password is wrong",
                background:'#2b2930',
                showConfirmButton: true,
                timer: 1200,
                customClass:{
                    title:'Custom_tittle_alarm',
                    popup:'Custom_container_alarm',
                }
            });
            console.log('error: ', e);
            console.error(e);
        }
    })

export const logoutUser=()=>{
    return(dispatch)=>{
        localStorage.removeItem('token')
        localStorage.removeItem('UserName')
        dispatch(setIsUser())
        pb.authStore.clear()
        return{
            type:USER_LOGOUT
        }
    }
}