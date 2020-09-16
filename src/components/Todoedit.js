import { useState } from "react";
import  Todoform from "./Todoform"


function Todoedit(){

const [edit, setEdit]= useStae({
    id: null,
    value:""
});

    return todos.map((todo, index) =>(
        <div 
        className={todo.isComplete ? "todo-row complete" : "todo-row"} 
        key={index}
        >
           
<div key={todo.id} onClick={() => completeTodo(todo.id)}>
    {todo.text}
    </div>
        </div>
    ));
}

export default Todoedit