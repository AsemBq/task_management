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
                    key={t.id}
                    text={t.title.slice(0,15)}
                    id={t.id}
                    IsDone={true}
                />
            )):
            <EmptyTaskList/>
            }
        </ul>
    )
}

export default Tasks;