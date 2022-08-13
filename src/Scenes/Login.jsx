import React from "react";
import PropTypes from 'prop-types';
import styled from "styled-components";
import {Form, Formik} from "formik";
import FormikInput from "../Components/FormikFields/formikInput";
import { useNavigate } from "react-router-dom";
import {useDispatch} from "react-redux";
import {userLoggedIn} from "../store/userSlice";

const StyledLoginPage = styled.div`
    background-color: ${props => props.theme.partBackgroundColor};

`
 const LoginPage = (props) => {
    const navigate = useNavigate();
    const dispath = useDispatch();


    return (
        <StyledLoginPage>
            <Formik onSubmit={
                (formValues) => {
                    dispath(userLoggedIn({id:formValues.password, name:formValues.login}))
                   navigate("/list")
                }
            } validate={(formData) => {
               let isValid = true;
               const errors = {};
               if (!formData.login){
                   isValid = false;
                   errors.login = "Login is mandatory"
               }
                if (!formData.password){
                    isValid = false;
                    errors.password = "Password is mandatory"
                }

                if  (!isValid) return errors
            }}>
                <Form>
                    <FormikInput name={"Login"} placeholder={"Input login"}  type ={"email"} />
                    <FormikInput name={"password"} placeholder={"Input password"}  type ={"password"} />
                    <button type={"submit"}>Login</button>
                </Form>
            </Formik>
        </StyledLoginPage>
    );
}

LoginPage.propTypes = {};
LoginPage.defaultProps = {};

export default LoginPage ;
