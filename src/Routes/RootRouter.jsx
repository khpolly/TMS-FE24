import React, {useState} from "react";
import PropTypes from "prop-types";
import {useSelector} from "react-redux";

import {Route, Routes, Outlet, Navigate, useLocation} from "react-router-dom";
import Login from "Scenes/Login";
import MainLayout from "Layouts/MainLayout";
import Plan from "Scenes/Plan";



const RootRouter =() => {
    const [redirectLocation, setRedirectLocation] = useState();
    const {location} = useLocation();
    const user = useSelector(store => store.userSlice);


    const renderForGuestUser = (Scene) => {
        if (!user.userLoggedIn) {
            return Scene
        } else {
            return <Navigate to={redirectLocation || "/list"}/>
        }
    }
    const renderLoggedInUser = (Scene) => {
        if (user.userLoggedIn()) {
            return Scene
        } else {
            setRedirectLocation(location);
            return <Navigate to={"/login"}/>
        }
    }

    return (
        <Routes>
            <Route path={"/login"} element={renderForGuestUser(<MainLayout/>)}>
            <Route index element={<Login/>}/>
            </Route>
            <Route path={"/plan"} element={<MainLayout/>}>
                <Route index element={<Plan/>}/>
            </Route>
        </Routes>
    );
}

RootRouter.propTypes = {};
RootRouter.defaultProps = {};

export default RootRouter;
