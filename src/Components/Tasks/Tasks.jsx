import './Tasks.css'
import Task from "../Task/Task.jsx";
import EmptyTaskList from "../EmptyTaskList/EmptyTaskList.jsx";
const Tasks=({tasks,loading})=>{
    if(loading){
        return <h2>Loading...</h2>;
    }
    return (
        <ul className='tasks'>
            {tasks.length > 0 ? tasks.map(t=>(
                <Task
                    task={t}
                    key={t.id}
                />
            )):
            <EmptyTaskList/>
            }
        </ul>
    )
}

export default Tasks;