import DeleteSVG from './Delete.svg';
import './DeleteIcon.css';
import Swal from 'sweetalert2'
import {useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import {deleteTask} from "../../Components/redux/Tasks/tasksAction.js";


export default function DeleteIcon(width, height,id) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const deleteHandler=(id)=>{
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: "btn btn-success",
        cancelButton: "btn btn-danger"
      },
      buttonsStyling: false
    });
    swalWithBootstrapButtons.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      iconColor:'red',
      showCancelButton: true,
      confirmButtonText: "Yes, delete it!",
      cancelButtonText: "No, cancel!",
      reverseButtons: true,
      customClass:{
        title:'Custom_tittle_alarm2',
        popup:'Custom_container_alarm2',
        confirmButton: 'Custom_confirmButton_alarm2',
        cancelButton:'Custom_cancelButton_alarm2',
      }
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(deleteTask(id))
        swalWithBootstrapButtons.fire({
          title: "Deleted!",
          text: "Your Task has been deleted.",
          icon: "success",
          customClass:{
            title:'Custom_tittle_alarm2',
            popup:'Custom_container_alarm2',
            confirmButton: 'Custom_confirmButton_alarm2',
            cancelButton:'Custom_cancelButton_alarm2',
          }
        });
        navigate('/list')
      } else if (
          result.dismiss === Swal.DismissReason.cancel
      ) {
        swalWithBootstrapButtons.fire({
          title: "Cancelled",
          text: "Your Task is safe :)",
          icon: "error",
          customClass:{
            title:'Custom_tittle_alarm2',
            popup:'Custom_container_alarm2',
            confirmButton: 'Custom_confirmButton_alarm2',
            cancelButton:'Custom_cancelButton_alarm2',
          }
        });
      }
    });
  }
  return (
    <img
      className="delete-icon"
      src={DeleteSVG}
      alt="Delete Icon"
      width={width}
      height={height}
      onClick={()=>deleteHandler(id)}
    ></img>
  );
}
