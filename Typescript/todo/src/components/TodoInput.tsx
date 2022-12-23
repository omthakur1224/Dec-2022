import React, { useState } from 'react'

type TodoInputProps={
    handleAdd:(task:string)=>void
}

const TodoInput = ({handleAdd}:TodoInputProps) => {
    
    const [text,setText]=useState<string>('')
   
    const handleClick :
    React.MouseEventHandler<HTMLButtonElement>
        =()=>{
        handleAdd(text)
    }
    const handleChange: React.ChangeEventHandler<HTMLInputElement>=(e)=>{
        setText(e.target.value)
    }
    return (
    <div>
        <input type="text" onChange={handleChange}/>
        <button onClick={handleClick}>Add</button>
        </div>
  )
}

export default TodoInput