import './TaskList1.css'
import LogOutIcon from "../LogOut/LogOut.jsx";
import PlusIcon from "../Icon/PlusIcon/PlusIcon.jsx";
import LeftArrowIcon from "../Icon/LeftArrowIcon/LeftArrowIcon.jsx";
import RightArrowIcon from "../Icon/RightArrowIcon/RightArrowIcon.jsx";
const TaskList1=({className})=>{
    return (
        <div className={className}>

            <div className="box-tittle">
                    <span className='top-left-icon'>{LogOutIcon(24,24)}</span>
                <h1>Jenny&#39;s Tasks</h1>
            </div>
            <div className='box-body'>
                <ul className='tasks'>
                    <li className='task'>
                        <div className='left'><span className='circle'>A</span> <span> Task #1</span>
                        </div>
                        <label className="custom-checkbox">
                            <input type="checkbox"/>
                            <span className="checkmark"></span>
                        </label></li>
                    <li className='task'>
                        <div className='left'><span className='circle'>A</span> <span> Task #2</span>
                        </div>
                        <input type="checkbox"/></li>
                    <li className='task'>
                        <div className='left'><span className='circle'>A</span> <span> Task #3</span>
                        </div>
                        <input type="checkbox"/></li>

                </ul>
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
                    <button className={'button'}>
                        <span className='plus-icon'>{PlusIcon(13,12)}</span>
                        <span className={'text'}>Task</span>
                    </button>
                </div>
            </div>

        </div>
    )
}

export default TaskList1;