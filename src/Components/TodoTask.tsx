
import { ITask } from '../Interfaces'
import './TodoTask.scss'
import {FC} from 'react';

interface Props {
  task: ITask;
  completeTask(taskNameToComplete:string):void;
}

const TodoTask:FC<Props> = ({task, completeTask}) => {
  return (
    <div className='task'>
      <div className="content">
        <span>{task.taskName}</span>
        </div>

        <button onClick={() => {completeTask(task.taskName)}}>X</button>
    </div>
  )
}

export default TodoTask