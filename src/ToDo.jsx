import React, {useState} from "react";

import ToDoItem from './ToDoItem.jsx'



const toDoBase = [{
    _id: 1,
    name:'Купить Макбук',
    isChecked: true,
},
    {
        _id: 2,
        name:'Закончить курс',
        isChecked: true,
    },
    {
        _id: 3,
        name:'Купить PS',
        isChecked: false,
    },
]


const ToDo = () => {
    const [name, setName] = useState('')
    return (
        <>
            {toDoBase.map(todo => (
                <ToDoItem key={`_todo_${todo._id}`} todo={todo} />
            ))}

            <input type="text" value={name}
                   onChange={e =>setName(e.target.value)}
                   placeholder='Add new task'
            />
        </>
    )
}




export default ToDo
