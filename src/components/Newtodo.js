import React from "react";

const Newtodo=({text}) => {
    return(
<div className="todo">
<li className="todo-things">{text} <button className="button">-

</button>
<button className="delete">+

</button>
</li>

</div>
    );
};




export default Newtodo;