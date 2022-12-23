import React from 'react'
import { deleteTodo } from '../api/Api'
import { TodoType } from './TodoApp'

type TodoItemProps={
    todo:TodoType,
    handleDelete:(id:number)=>void
}
const TodoItems = (props:TodoItemProps) => {

  // const {task,status}=props.todo;
    return (
    <div>
      <h1>{props.todo.task}</h1>
      <div>
          <button >{props.todo.status}</button>
          <button onClick={()=>props.handleDelete(props.todo.id)}>Remove</button>
      </div>
    </div>
  )
}

export default TodoItems
