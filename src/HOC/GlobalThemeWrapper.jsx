import React from "react";
import {ThemeProvider, createGlobalStyle} from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    //background: teal;
    //font-family: Open-Sans, Helvetica, Sans-Serif;
  }
`;


const GlobalThemeWrapper = (props) => {

    return (
        <React.Fragment>
            <ThemeProvider theme={{accentBackgroundColor: "cadetblue", baseBackgroundColor:"antiquewhite", partBackgroundColor:"white"}}>
                <GlobalStyle/>
                {props.children}
            </ThemeProvider>

        </React.Fragment>
    )
};

export default GlobalThemeWrapper
