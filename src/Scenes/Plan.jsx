import React, {useState} from "react";
import PropTypes, {array} from "prop-types";
import styled from "styled-components";
import {FieldArray, Form, Formik} from "formik";
import FormikInput from "../Components/FormikFields/formikInput";


const StyledPlan = styled.div`
    .month {
      min-width: 90vh;
      max-width: 1200px;
      width: 100%;
      
      .month_header {
        border-bottom: solid 3px black;
        border-top: solid 3px black;
        height: 50px;
      }
      
      .month_content-wrapper {
        overflow: hidden;
        
        .month_content {
          
        }
      }
      &.closed {
        .month_content-wrapper {
          overflow: hidden;
          height: 0px;
        }
      }
    }
      
`

const Plan = () => {
    const [months, setMonths] = useState([{name:'Fist month', expenses:[], incomes:[]}]);
    const [openMonth, setOpenMonth] = useState(0);

    const validateMonth = (formData) => {
        return {}
    }

    const getForm = (monthDate, isOpen, monthIndex) => {
        return (
            <div className={"month"}>
                <div className={"month_header"}
                     onClick={() => {setOpenMonth(monthIndex)}}>
                    {monthDate.name}
                    <div>{monthDate.valid ? "Month valid" : "Month is nod valid" }</div>
                </div>
                <div className={`month_content ${isOpen ? "" : "closed"}`}>
                    {isOpen &&
                        <Formik initialValues={monthDate.manual ? monthDate : months[0]}
                                enableReinitialize={!monthDate.manual}
                                validate={
                            (formData) => {
                                const errors = validateMonth(formData);
                                const newMonths = [...months];
                                const newMonthData = {...formData, manual:true, valid: !errors}
                                newMonths[monthIndex] = newMonthData;
                                setMonths(newMonths);
                                return errors
                            }

                        }
                                render = {({values}) => {
                                    return (
                                        <Form>
                                            <FieldArray name="expenses" render={(arrayHelpers) => {
                                                return (
                                                    <div>
                                                        <button type="button"
                                                                onClick={() => {
                                                                    arrayHelpers.push({name:"", amount:""});
                                                                }
                                                                }>
                                                            Add expense
                                                        </button>
                                                        {values.expenses.map((expense, expenseIndex) => (
                                                            <div>
                                                                Target
                                                                <FormikInput name={`expenses ${expenseIndex}.name`}/>
                                                                Value
                                                                <FormikInput name={`expenses ${expenseIndex}.amount`} type={"number"}/>
                                                                <button type="button"
                                                                        onClick={() => {
                                                                            arrayHelpers.remove(expenseIndex);
                                                                        }}>
                                                                    Remove
                                                                </button>
                                                            </div>
                                                        ))}
                                                        {values.incomes.map((income, incomeIndex) => (
                                                                <div>
                                                                    <FormikInput name={`incomes ${incomeIndex}.name`}/>
                                                                    <FormikInput name={`incomes ${incomeIndex}.amount`} type={"number"}/>
                                                                    <button type="button"
                                                                            onClick={() => {
                                                                                arrayHelpers.remove(incomeIndex);
                                                                            }}>
                                                                        Remove
                                                                    </button>
                                                                </div>
                                                            ))}
                                                    </div>
                                                    )
                                            }}/>
                                            <FieldArray name="expenses" render={(arrayHelpers) => {
                                                return (
                                                    <div>
                                                        <button type="button"
                                                                onClick={() => {
                                                                    arrayHelpers.push({name:"", amount:""});
                                                                }
                                                                }>
                                                            Add income
                                                        </button>
                                                        {values.incomes.map((income, incomeIndex) => (
                                                            <div>
                                                                <FormikInput name={`incomes ${incomeIndex}.name`}/>
                                                                <FormikInput name={`incomes ${incomeIndex}.amount`} type={"number"}/>
                                                                <button type="button"
                                                                        onClick={() => {
                                                                            arrayHelpers.remove(incomeIndex);
                                                                        }}>
                                                                    Remove
                                                                </button>
                                                            </div>
                                                        ))}
                                                    </div>
                                                )
                                            }}/>
                                        </Form>
                                    )
                                }}
                        >
                        </Formik>
                    }
                </div>
            </div>
        )
    }

  return (
      <StyledPlan>
          {months.map((month, index ) => {
              return (
                  getForm(month, openMonth === index, index)
              )
          })}
          <button type={"button"}
                  onClick={() =>{
                      const newMonths = [...months];
                      newMonths.push({name:`month ${newMonths.length + 1}`, expenses:[], incomes:[]});
                      setMonths(newMonths);
                  }}>
            Add month
          </button>
      </StyledPlan>
  );
}

Plan.propTypes = {};
Plan.defaultProps = {};

export default Plan;
