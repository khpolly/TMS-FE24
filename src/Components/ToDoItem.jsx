import React from "react";

import styled from 'styled-components'

const StyleToDoItem = styled.div`
  width: 920px;
  height: 40px;
  margin: 10px;
  border: solid 2px ;
  border-radius: 30px;
  display: flex;
  align-items: center;

  .todo-item{
    font-size: 16px;
    margin-left: 10px;
  }
  
  
  
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

