import TextInput from '../TextInput/TextInput';
import SubmitButton from '../SubmitButton/SubmitButton';
import { useRef} from 'react';
import useLogin from '../../hooks/useLogin';
import './CustomForm.css';
import Swal from 'sweetalert2'
import {useNavigate, useParams} from "react-router-dom";
import {useDispatch} from "react-redux";
import {loginUser} from "../redux/User/userAction.js";
import {addTask, editTask} from "../redux/Tasks/tasksAction.js";

export default function CustomForm({ config }) {
  const Taskid = useParams();
  const FirstInput=useRef(null)
  const SecondInput=useRef(null)
  const token=JSON.parse(localStorage.getItem("token"));
  const navigate = useNavigate();
  const dispatch = useDispatch();
  let handleSubmit
  switch (config['from']){
    case 'Login':{
       handleSubmit = async (e) => {
        e.preventDefault();
         const userData={
           'UserName':FirstInput.current.value,
           'Password':SecondInput.current.value,
         }
           dispatch(loginUser(userData)).then(
               Swal.fire({
                 position: "center",
                 icon: "success",
                 title: "You Logged in Successfully!",
                 background:'#2b2930',
                 showConfirmButton: true,
                 timer: 1200,
                 customClass:{
                   title:'Custom_tittle_alarm',
                   popup:'Custom_container_alarm',
                 }
               })
           )
      };
      break;
    }
    case 'Edit':{
      handleSubmit = (e) => {
        e.preventDefault();
        const taskData={
          id:Taskid.TaskId,
          name: FirstInput.current.value,
          priority: SecondInput.current.value,
        }
        dispatch(editTask(taskData)).
        then(
            Swal.fire({
          position: "center",
          icon: "success",
          title: "Task changed Successfully!",
          background:'#2b2930',
          showConfirmButton: true,
          timer: 1200,
          customClass:{
            title:'Custom_tittle_alarm',
            popup:'Custom_container_alarm',
          }
        }),
            navigate('/list'))
      }
      break
    }
    case 'Creat':{
      handleSubmit = async (e) => {
        e.preventDefault();
        const data={
          'name':FirstInput.current.value,
          'priority':SecondInput.current.value,
          'user':token
        }
        dispatch(addTask(data)).then(
            Swal.fire({
              position: "center",
              icon: "success",
              title: "Task created Successfully!",
              background:'#2b2930',
              showConfirmButton: true,
              timer: 1200,
              customClass:{
                title:'Custom_tittle_alarm',
                popup:'Custom_container_alarm',
              }
            }),
            navigate('/list')
        )
      }
      break
    }

  }


  return (
    <form action="" className="_custom-form" onSubmit={handleSubmit}>
      <TextInput ref={FirstInput} {...config['firstInput']} />
      <TextInput ref={SecondInput}  {...config['secondInput']} />
      <SubmitButton {...config['button']} />
    </form>
  );
}
