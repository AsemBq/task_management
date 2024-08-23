import {USER_LOGIN, USER_IS_LOGIN, USER_LOGOUT} from "./userType.js";

const userState={
    IsUser:localStorage.getItem('token')? true : false,
}

const userReducer =(state=userState,action)=>{
    switch(action.type){
        case USER_IS_LOGIN:
            return {IsUser: !state.IsUser};
        case USER_LOGIN:
            return state
        case USER_LOGOUT:
            return state
        default:
            return state
    }
}

export default userReducer