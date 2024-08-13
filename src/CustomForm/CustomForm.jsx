import TextInput from '../TextInput/TextInput';
import SubmitButton from '../SubmitButton/SubmitButton';
import {useContext, useRef} from 'react';
import { UserContext } from '../Wrapper/MainContext.jsx';
import useLogin from '../hooks/useLogin';
import './CustomForm.css';
import axios from "axios";
import Swal from 'sweetalert2'
import {useNavigate, useParams} from "react-router-dom";
import useTasks from '../hooks/useTasks';

export default function CustomForm({ config }) {
  const context = useContext(UserContext);
  const Taskid = useParams();
  const FirstInput=useRef(null)
  const SecondInput=useRef(null)
  const token=JSON.parse(localStorage.getItem("token"));
  const navigate = useNavigate();
  const { editTask,createTask } = useTasks();
  let handleSubmit
  switch (config['from']){
    case 'Login':{
       handleSubmit = async (e) => {
        e.preventDefault();
         const data={
           'UserName':FirstInput.current.value,
           'Password':SecondInput.current.value,
         }

         try {
           const login = useLogin();
           const { record, token } = await login(data.UserName, data.Password);
           const { name, username, id } = record;
           context.setIsUser(true);
           localStorage.setItem('token',JSON.stringify(id))
           localStorage.setItem('UserName',JSON.stringify(username))
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
           });
         } catch (e) {
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
         }

         // const UserLogin=async ()=>{
         //   const res=await axios.post('http://localhost:8000/user/login',data);
         //   if (res.data.success === true){
         //     context.setIsUser(true);
         //     localStorage.setItem('token',JSON.stringify(res.data.Token))
         //     localStorage.setItem('UserName',JSON.stringify(FirstInput.current.value))
         //     Swal.fire({
         //       position: "center",
         //       icon: "success",
         //       title: "You Logged in Successfully!",
         //       background:'#2b2930',
         //       showConfirmButton: true,
         //       timer: 1200,
         //       customClass:{
         //         title:'Custom_tittle_alarm',
         //         popup:'Custom_container_alarm',
         //       }
         //     });
         //   }else {
         //     if (res.data.success === false){
         //       Swal.fire({
         //         position: "center",
         //         icon: "error",
         //         title: "Username or Password is wrong",
         //         background:'#2b2930',
         //         showConfirmButton: true,
         //         timer: 1200,
         //         customClass:{
         //           title:'Custom_tittle_alarm',
         //           popup:'Custom_container_alarm',
         //         }
         //       });
         //     }
         //   }
         // }
         // UserLogin()
      };
      break;
    }
    case 'Edit':{
      handleSubmit = (e) => {
        e.preventDefault();
        // const data={
        //   'token':token,
        //   'id': parseInt(Taskid.TaskId),
        //   'name':FirstInput.current.value,
        //   'priority':SecondInput.current.value,
        //   'IsDone':config['task'].IsDone,
        // }
        const updatedTask = editTask(Taskid.TaskId, {
          name: FirstInput.current.value,
          priority: SecondInput.current.value,
        });
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
        });
        navigate('/list')

      }
      break
    }
    case 'Creat':{
      console.log('work')
      handleSubmit = async (e) => {
        e.preventDefault();
        const newTask = await createTask({
          name: FirstInput.current.value,
          priority: SecondInput.current.value,
          user: token,
        });
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
        });
        navigate('/list')

      }
      break
    }
    case 'CreatUser':{
      handleSubmit = (e) => {
        e.preventDefault();
        const data={
          'UserName':FirstInput.current.value,
          'Password':SecondInput.current.value,
        }
        const UserLogin=async ()=>{
          const res=await axios.post('http://localhost:8000/user/create',data);
          if (res.data.success === true){
            context.setIsUser(true);
            localStorage.setItem('token',JSON.stringify(res.data.Token))
            localStorage.setItem('UserName',JSON.stringify(FirstInput.current.value))
            Swal.fire({
              position: "center",
              icon: "success",
              title: "You Registered Successfully!",
              background:'#2b2930',
              showConfirmButton: true,
              timer: 1200,
              customClass:{
                title:'Custom_tittle_alarm',
                popup:'Custom_container_alarm',
              }
            });
          }else {
            if (res.data.success === false){
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
            }
          }
        }
        UserLogin()
      };
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
