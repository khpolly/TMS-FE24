import React from "react";




const ToDoItem =({name, isChecked}) => {
    return (
        <div className='todo-item'>
            <input type="checkbox" checked={isChecked}/>
            <span className='name'>{name}</span>
        </div>
    )
}

export default ToDoItem

