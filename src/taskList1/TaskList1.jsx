import './TaskList1.css'
import LogOutIcon from "../LogOut/LogOut.jsx";
import PlusIcon from "../Icon/PlusIcon/PlusIcon.jsx";
import LeftArrowIcon from "../Icon/LeftArrowIcon/LeftArrowIcon.jsx";
import RightArrowIcon from "../Icon/RightArrowIcon/RightArrowIcon.jsx";
import HeaderWithIcon from "../HeaderWithIcon/HeaderWithIcon.jsx";
import Tasks from "../Tasks/Tasks.jsx";
import AddTaskButton from "../AddTaskButton/AddTaskButton.jsx";
const TaskList1=({className})=>{
    return (
        <div className={className}>
            <HeaderWithIcon
                text={"Jenny's Tasks"}
                leftIcon={LogOutIcon("24px","24px")}
            />
            <div className='box-body'>
                <Tasks/>
            </div>
            <div className={'box-bottom'}>
                <div className={'Pagination'}>
                    <span className='lef-arrow'>
                        {LeftArrowIcon(8,14)}
                        </span>
                    <ul className='pag-numbers'>
                        <li className='pag-number'>13</li>
                        <li className='pag-number'>14</li>
                        <li className='pag-number'>15</li>
                        <li className='pag-number'>16</li>
                        <li className='pag-number active'>17</li>
                        <li className='pag-number'>18</li>
                        <li className='pag-number'>19</li>
                    </ul>
                    <span>
                        {RightArrowIcon(8,14)}
                       </span>
                </div>
                <div className={'box-button'}>
                    <AddTaskButton/>
                </div>
            </div>

        </div>
    )
}

export default TaskList1;