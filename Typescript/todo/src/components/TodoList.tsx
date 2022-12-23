import React from 'react'
import { TodoType } from './TodoApp'
import TodoItems from './TodoItems'

type TodoListProps={
    data:TodoType[],
    handleDelete:(id:number)=>void
}
const TodoList = (props:TodoListProps) => {
  return (
    <div>
        {
            props.data.map((todo)=>(
                // <div key={todo.id} onClick={()=>props.handleDelete(1671790376386)}>
                <TodoItems key={todo.id} todo={todo} handleDelete={props.handleDelete}/>
                
            ))
        }
        </div>
  )
}

export default TodoList