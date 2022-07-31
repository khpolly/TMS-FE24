import React, {useState} from 'react';
import MainLayout from "./Layouts/MainLayout";



const App = (props) => {
    const [someText, setSomeText] = useState("Hello world");

    return (
        <MainLayout>
            <div onClick={() => {setSomeText("fooo")}}>
                {someText}
                {props.someName}
            </div>
        </MainLayout>
    )
}

export default App;
