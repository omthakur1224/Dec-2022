import React from 'react'
import { TodoType } from './TodoApp'
import TodoItems from './TodoItems'

type TodoListProps={
    data:TodoType[]
}
const TodoList = ({data}:TodoListProps) => {
  return (
    <div>
        {
            data.map((todo)=>(

                <TodoItems todo={todo}/>
            ))
        }
        </div>
  )
}

export default TodoList