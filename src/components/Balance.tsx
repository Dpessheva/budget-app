import React, {useContext, ReactElement} from "react";
import {GlobalContext, IincomeTransaction, IexpenseTransaction } from '../contexts/GlobulState';


const Balance = ():ReactElement => {
  const { incomeTransactions, expenseTransactions } = useContext(GlobalContext);
  const incomeAmounts = incomeTransactions.map((incomeTransaction:IincomeTransaction) =>
    incomeTransaction.incomeAmount); 
    const expenseAmounts = expenseTransactions.map((expenseTransaction:IexpenseTransaction) =>
      expenseTransaction.expenseAmount); 
  
  const totalIncome = incomeAmounts.reduce((acc:number, curr:number) => (
    acc +=curr
  ), 0).toFixed(2);
  
  const totalExpense = expenseAmounts.reduce((acc:number, curr:number) => (
    acc +=curr
  ), 0).toFixed(2);
  
  const result = (Number(totalIncome) - Number(totalExpense)).toFixed(2);
  return (
    <div className="balance">
      <h2>Your balance</h2>
      <h3>${result}</h3>
      <div className="income-expense">
        <div className="plus">
          <h3>Income</h3>
          <p>+${totalIncome}</p>
        </div>
        <div className="minus">
          <h3>Expenses</h3>
          <p>-${totalExpense}</p>
        </div>
      </div>
    </div>
  );
};

export default Balance;
