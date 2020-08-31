import React from "react"


function Todos(props){
return(
    <li style={styles.list} >
      <p> 
        <input type="checkbox" />
      </p>
    </li>
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