import React, {useContext, ReactElement } from "react";
import { Formik, Form, ErrorMessage, Field } from "formik";
import * as Yup from "yup";
import { GlobalContext } from "../contexts/GlobulState";
import { v4 as uuidv4 } from "uuid";

const initialValues = {
  id: '',
  incomeText: '',
  incomeAmount: 0,
}
const inputShema = Yup.object().shape({
  incomeText: Yup.string().required(),
  incomeAmount: Yup.number().required()
});

const IncomeAddTransaction = (): ReactElement => {
   const { addIncome } = useContext(GlobalContext);
  return (
    <Formik
      onSubmit={({incomeText, incomeAmount}) => {
        const newIncomeTransaction = {
            id: uuidv4(),
            incomeText,
            incomeAmount: incomeAmount * 1,
            };
        addIncome(newIncomeTransaction);
      }}
      validationSchema={inputShema}
      initialValues={initialValues}
    >
      {({dirty, isValid, handleBlur , values, handleChange}) => (
        <Form>
          <div className="input-group income">
            <div>
              <Field
                type="text"
                placeholder="Add income..."
                name="incomeText"
                value={values.incomeText}
                autoComplete="off"
                onBlur={handleBlur}
                onChange={handleChange}

                          />
              <ErrorMessage name="incomeText" />
            </div>
            <div>
              <Field
                type="number"
                placeholder="Amount"
                name="incomeAmount"
                autoComplete="off"
                value={values.incomeAmount}
                onChange={handleChange}
                onBlur={handleBlur}
                
              />
              <ErrorMessage name="incomeAmount" />
            </div>
            <button type="submit" value="submit" disabled={! dirty || !isValid}>
              Subit
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default IncomeAddTransaction;
