import React, { useState } from 'react'
import TodoInput from './TodoInput'
import TodoList from './TodoList'

enum TodoStatus{
    PENDING="PENDING",
    PROCESSING="PROCESSING",
    DONE="DONE"
}
export interface TodoType{
    id:number,
    task:string,
    status:TodoStatus
}
const TodoApp = () => {
    const [todos,setTodos]=useState<TodoType[]>([])
    const handleAdd=(task:string)=>{
        const todoItem : TodoType={
            id:Date.now(),
            task,
            status:TodoStatus.PENDING
        }
        setTodos([...todos,todoItem])
    }
    return (
    <div>
        <div>
            <TodoInput handleAdd={handleAdd}/>
        </div>
        <TodoList data={todos} />
    </div>
  )
}

export default TodoApp