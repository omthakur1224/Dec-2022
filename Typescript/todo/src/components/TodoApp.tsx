import React, { useEffect, useState } from 'react'
import { addTodo, deleteTodo, getTodo } from '../api/Api'
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

    const [todos,setTodos]=useState<TodoType[]>([]);
    
    useEffect(()=>{
        getTodos();
    },[])

const getTodos=()=>{

        getTodo().then((res)=>setTodos(res))
    }

    const handleDelete =(id:number)=>{
        deleteTodo(id).then((res)=>getTodos())
 }

    const handleAdd=(task:string)=>{

        const todoItem : TodoType={
            id:Date.now(),
            task,
            status:TodoStatus.PENDING
        }
        
        addTodo(todoItem).then((res)=>{
            getTodos();
        })
   }
    return (
    <div>
        <div>
            <TodoInput handleAdd={handleAdd}/>
        </div>
        <TodoList data={todos} handleDelete={handleDelete}/>
    </div>
  )
}

export default TodoApp