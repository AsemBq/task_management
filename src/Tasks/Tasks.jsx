import './Tasks.css'
import Task from "../Task/Task.jsx";
const Tasks=()=>{
    return (
        <ul className='tasks'>
            <Task
            text={'Task #0'}
            />
            <Task
                text={'Task #0'}
                IsDone={true}
            />
            <Task
                text={'Task #0'}
            />
        </ul>
    )
}

export default Tasks;