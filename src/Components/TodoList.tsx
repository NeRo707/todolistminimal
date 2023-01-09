import './TodoList.scss';
import {useState, FC, ChangeEvent} from 'react';
import {ITask} from '../Interfaces';
import TodoTask from './TodoTask';


const TodoList: FC = () => {
  
  const [task, setTask] = useState<string>("");
  const [todoList, setTodoList] = useState<ITask[]>([]);

  const handleChange = (e:ChangeEvent<HTMLInputElement>):void => {
  
      setTask(e.target.value);

  }

  const createTask = ():void => {
    const newTask = {taskName: task};

    if(task === ""){
      return;
    }
    
    setTodoList([...todoList, newTask]);

    console.log(todoList);

    setTask("");
  }


  const completeTask = (taskNameToComplete:string):void => {
    setTodoList(todoList.filter((task) => {
      return task.taskName != taskNameToComplete;
    }))
  }

  return (
    <div>
      <div className="todolist">
        <div className='box'>
          <input 
          type="text" 
          value={task}
          onChange={handleChange}/>
          
          <button onClick={createTask} >Add</button>

        </div>
        {todoList.map((task: ITask, key: number) => {
          return <TodoTask key={key} task={task} completeTask={completeTask} />;
        })}
      </div>
    </div>
     
  )
}

export default TodoList