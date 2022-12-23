import axios, {AxiosResponse} from "axios"
import { TodoType } from "../components/TodoApp"

export const addTodo=async(todo:TodoType)=>{
    let response: AxiosResponse<TodoType[]>= 
    await axios.post('http://localhost:8080/todo',todo)
    return response.data;
}

export const getTodo=async()=>{
    let response: AxiosResponse<TodoType[]> = 
    await axios.get('http://localhost:8080/todo')
    return response.data;
}

export const updateTodo=async(id:number, todo:TodoType)=>{
    let response: AxiosResponse<TodoType[]> = 
    await axios.patch(`http://localhost:8080/todo/${id}`)
    return response.data;
}

export const deleteTodo=async(id:number|string)=>{
    let response: AxiosResponse<TodoType[]> = 
    await axios.delete(`http://localhost:8080/todo/${id}`)
    return response.data;
}
