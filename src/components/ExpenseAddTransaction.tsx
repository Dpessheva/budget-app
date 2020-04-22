import React, { useContext } from "react";
import { v4 as uuidv4 } from "uuid";
import { Formik, ErrorMessage, Form, Field } from "formik";
import * as Yup from "yup";
import { GlobalContext } from "../contexts/GlobulState";

const inputShema = Yup.object().shape({
  expenseText: Yup.string().required(),
  expenseAmount: Yup.number().required(),
});
const initialValues = {
  id: "",
  expenseText: "",
  expenseAmount: 0,
};
const ExpenseAddTransaction = () => {
  const { addExpense } = useContext(GlobalContext);
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={inputShema}
      onSubmit={({ expenseText, expenseAmount }) => {
        const newExpenseTransaction = {
          id: uuidv4(),
          expenseText,
          expenseAmount: expenseAmount * 1,
        };
        addExpense(newExpenseTransaction);
      }}
    >
      {({ dirty, isValid, handleBlur, handleChange, values }) => (
        <Form>
          <div className="input-group expense">
            <div>
              <Field
                type="text"
                name="expenseText"
                placeholder="Add Expence..."
                value={values.expenseText}
                autoComplete="off"
                onBlur={handleBlur}
                onChange={handleChange}
              />
              <ErrorMessage name="expenseText" />
            </div>
            <div>
              <Field
                type="number"
                name="expenseAmount"
                placeholder="Amount"
                value={values.expenseAmount}
                autoComplete="off"
                onBlur={handleBlur}
                onChange={handleChange}
              />
              <ErrorMessage name="expenseAmount" />
            </div>

            <button type="submit" value="submit" disabled={!dirty || !isValid}>
              Submit
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default ExpenseAddTransaction;
