import React from "react";

import styled from 'styled-components'

const StyleToDoItem = styled.div`
  width: 100%;
  height: 40px;
  margin: 10px;
  border: solid 2px black;
  
  
  
`



const ToDoItem =({name, isChecked}) => {
    return (
        <StyleToDoItem className={'todo-item'}>
            <input type="checkbox" checked={isChecked}/>
            <span className={'name'}>{name}</span>
        </StyleToDoItem>
    )
}

export default ToDoItem

