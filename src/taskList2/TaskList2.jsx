import './TaskList2.css'
const TaskList2=({className})=>{
    return (
        <div className={className}>

            <div className="box-tittle">
                    <span className='top-left-icon'><svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                                     xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M17 8L15.59 9.41L17.17 11H9V13H17.17L15.59 14.58L17 16L21 12L17 8ZM5 5H12V3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H12V19H5V5Z"
                            fill="#D0BCFF"/>
                    </svg></span>
                <h1>Jenny&#39;s Tasks</h1>
            </div>
            <div className='box-body'>
                <div className={'filter'}>
                    <span className={'filter-icon'}><svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                               xmlns="http://www.w3.org/2000/svg">
                        <path d="M10 18H14V16H10V18ZM3 6V8H21V6H3ZM6 13H18V11H6V13Z" fill="#D0BCFF"/>
                    </svg></span>
                </div>
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

export default TaskList2;