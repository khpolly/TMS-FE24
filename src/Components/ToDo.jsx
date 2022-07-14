import React, {useState} from "react";

import ToDoItem from './ToDoItem.jsx'
import styled from 'styled-components'

const styledToDo = styled.div`
  
   border-radius: 30px;
   box-shadow: 0 3px 5px rgba(0. 0. 0. 0.1);
   display: block;
   max-width: 60%;
   margin: 0 auto;
   padding: 5px 10px;

`

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
        <div>
            {toDoBase.map(todo => (
                <ToDoItem key={`_todo_${todo._id}`} todo={todo} />
            ))}

                <input type="text" value={name}
                        onChange={e =>setName(e.target.value)}
                        placeholder='Add new task'
                />


        </div>
    )
}




export default ToDo
