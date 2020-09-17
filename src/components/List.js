import React from "react";

function List (props){
    return(
      <ul >
      {props.todoTask.map((task)=>(
        <li  key={task.id} style={styles.list}>
    
                  <p style={
                    task.completed 
                    ?styles.taskDone 
                    : styles.taskNew}>
                    <input type="checkbox" checked={task.completed}/>
    
                    {task.title}
                  </p>
    
        </li>
      ))}
        </ul> 
    )
    }

    const styles={

        list:{
    borderStyle:"solid",
            listDecoration:"none",
            textAlign:"left",
          },
    
          taskDone:{
              color:"#ADC8FF",
              textDecoration:"line-through",
          },
          taskNew:{
              color:"#05215B",
          },
        }
export default List