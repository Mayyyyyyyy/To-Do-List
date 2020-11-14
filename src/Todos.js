import React from 'react';
import {EditFilled, DeleteFilled } from '@ant-design/icons';

const Todos = ({data,deleteTodo,editTodo})=>{
    const todoList = data.length ? (
       data.map((todo)=>{
         return (
             <div key={todo.id} className="list" > 
                 <h3 className="listItem">{todo.content}</h3>   
                 <div className="editIcon">
                     <EditFilled className="edit" onClick={()=>{editTodo(todo.id)}}/>
                     <DeleteFilled className="delete" onClick={()=>{deleteTodo(todo.id)}}/>
                 </div>   
             </div>
         )
       })
    ):(
         <h3 className="info">You have no todo's left, add one?</h3>
    )
    return(
        <div>
            {todoList}
        </div>
    )
}

export default Todos