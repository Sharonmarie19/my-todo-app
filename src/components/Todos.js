import React from "react"


function Todos(props){
return(
  <ul style={styles.list}>
  {props.todoTask.map((task)=>(
    <li style={styles.list} key={task.id}>
      
              <p style={
                task.completed 
                ?styles.taskDone 
                : styles.taskNew}>
                <input type="checkbox" checked={task.completed}/>
              
                {task.taskName}
              </p>

    </li>
  ))}
    </ul> 
)
}
const styles={
    list:{
        textAlign:"left",
        listDecoration:"none",
      },
      text:{
        color:"blue",
      },
      logo:{
        color:"blue",
        textAlign:"right",
       
      },
      taskDone:{
          color:"gray",
          textDecoration:"line-through",
      },
      taskNew:{
          color:"black",
      },
}
export default Todos