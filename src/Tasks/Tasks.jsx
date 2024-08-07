import './Tasks.css'
import Task from "../Task/Task.jsx";
const Tasks=({tasks,loading})=>{
    if(loading){
        return <h2>Loading...</h2>;
    }
    return (
        <ul className='tasks'>
            {tasks.map(t=>(
                <Task
                    key={t.id}
                    text={t.title.slice(0,15)}
                    IsDone={true}
                />
            ))}
        </ul>
    )
}

export default Tasks;