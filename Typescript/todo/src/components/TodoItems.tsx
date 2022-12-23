import React from 'react'
import { TodoType } from './TodoApp'

type TodoItemProps={
    todo:TodoType
}
const TodoItems = (props:TodoItemProps) => {
  const {task,status}=props.todo;
    return (
    <div>
      <h1>{task}</h1>
      <button>{status}</button>
    </div>
  )
}

export default TodoItems
