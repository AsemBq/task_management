import './App.css';
import Wrapper from './Wrapper';

function App() {
  return <Wrapper />;
const TaskList=()=>{
    return (
            <div className="Box">

                <div className="box-tittle">
                    <span className='exit-icon'><svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                                     xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M17 8L15.59 9.41L17.17 11H9V13H17.17L15.59 14.58L17 16L21 12L17 8ZM5 5H12V3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H12V19H5V5Z"
                            fill="#D0BCFF"/>
                    </svg></span>
                    <h1>Jenny's Tasks</h1>
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

const EditTask=()=>{
    return (
        <div className="Box">

            <div className="box-tittle">
                    <span className='top-left-icon'><svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                                     xmlns="http://www.w3.org/2000/svg">
<path
    d="M16 9V19H8V9H16ZM14.5 3H9.5L8.5 4H5V6H19V4H15.5L14.5 3ZM18 7H6V19C6 20.1 6.9 21 8 21H16C17.1 21 18 20.1 18 19V7Z"
    fill="#D0BCFF"/>
</svg></span>
                <h1>Edit Task #1</h1>
                <span className={'top-right-icon'}><svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10.3688 20.7375L16.0938 15L10.3688 9.2625L12.1313 7.5L19.6313 15L12.1313 22.5L10.3688 20.7375Z"
      fill="#D0BCFF"/>
</svg></span>
            </div>
            <div className='box-body'>
                <div className={'top'}>
                    {/*<label htmlFor="name">Name</label>*/}
                    <input type="text" name="name" placeholder="Task #1" required/>
                </div>
                <div className={'bottom'}></div>
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

function App() {
    return (
        <>
            <TaskList/>
            {/*<EditTask/>*/}
        </>
    )
}

export default App;
