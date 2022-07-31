import React from "react";
import styled from "styled-components";


const StyledMainLayout = styled.div`
  .header {
    width: 100%;
    height: 50px;
    background-color: aquamarine;
  }
  .content {
    width: 100%;
    height: calc(100vh - 70px);
    overflow: auto;
    background-color: antiquewhite;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-direction: column;
  }
  
  .footer {
    width: 100%;
    height: 20px;
    background-color: aquamarine;
  }
`
const MainLayout =(props) => {
    return (
        <StyledMainLayout>
            <div className={'header'}>

            </div>
            <div className={'content'}>
                {props.children}
            </div>
            <div className={'footer'}>

            </div>
        </StyledMainLayout>
    )
};
export default MainLayout;
