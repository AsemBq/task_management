import './EmptyTaskList.css'
const EmptyTaskList =({className})=>{
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
                <div className='icon'>
                    <svg width="47" height="53" viewBox="0 0 47 53" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M34.1875 0.375H5.6875C3.075 0.375 0.9375 2.5125 0.9375 5.125V38.375H5.6875V5.125H34.1875V0.375ZM31.8125 9.875H15.1875C12.575 9.875 10.4613 12.0125 10.4613 14.625L10.4375 47.875C10.4375 50.4875 12.5512 52.625 15.1637 52.625H41.3125C43.925 52.625 46.0625 50.4875 46.0625 47.875V24.125L31.8125 9.875ZM15.1875 47.875V14.625H29.4375V26.5H41.3125V47.875H15.1875Z"
                            fill="#D0BCFF"/>
                    </svg>
                </div>
                <span>Start with create a task</span>
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

export default EmptyTaskList