import './TaskList1.css'
const TaskList1=({className})=>{
    return (
        <div className={className}>

            <div className="box-tittle">
                    <span className='exit-icon'><svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                                     xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M17 8L15.59 9.41L17.17 11H9V13H17.17L15.59 14.58L17 16L21 12L17 8ZM5 5H12V3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H12V19H5V5Z"
                            fill="#D0BCFF"/>
                    </svg></span>
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
                <div className={'Pagination'}>
                    <span className='lef-arrow'> <svg width="9" height="14" viewBox="0 0 9 14" fill="none"
                                                      xmlns="http://www.w3.org/2000/svg">
<path d="M8.22949 1.58002L7.10875 0.400024L0.881714 7.00002L7.11505 13.6L8.22949 12.42L3.1106 7.00002L8.22949 1.58002Z"
      fill="#D0BCFF"/>
</svg></span>
                    <ul className='pag-numbers'>
                        <li className='pag-number'>13</li>
                        <li className='pag-number'>14</li>
                        <li className='pag-number'>15</li>
                        <li className='pag-number'>16</li>
                        <li className='pag-number active'>17</li>
                        <li className='pag-number'>18</li>
                        <li className='pag-number'>19</li>
                    </ul>
                    <span><svg width="8" height="14" viewBox="0 0 8 14" fill="none"
                               xmlns="http://www.w3.org/2000/svg">
<path
    d="M0.0766602 12.4867L1.25666 13.6667L7.92333 7.00004L1.25666 0.333374L0.0766602 1.51337L5.56333 7.00004L0.0766602 12.4867Z"
    fill="#D0BCFF"/>
</svg></span>
                </div>
            </div>
            <div className={'box-button'}>
                <button className={'button'}>
                        <span className='plus-icon'><svg width="13" height="12" viewBox="0 0 13 12" fill="none"
                                                         xmlns="http://www.w3.org/2000/svg">
<path d="M12.5 6.75H7.25V12H5.75V6.75H0.5V5.25H5.75V0H7.25V5.25H12.5V6.75Z" fill="#D0BCFF"/>
</svg></span>
                    <span className={'text'}>Task</span>
                </button>
            </div>

        </div>
    )
}

export default TaskList1;