import React, { useContext } from 'react';
import {GlobalContext, IexpenseTransaction } from '../contexts/GlobulState';

const ExpenseTransaction: React.FC<{ expenseTransaction: IexpenseTransaction }> = ({ expenseTransaction}) => {
    const { deleteTransaction } = useContext(GlobalContext);
    return (
        <li className="transaction">
            <span className="transaction-text">{expenseTransaction.expenseText}</span>
        <span className="transaction-amount">
                ${expenseTransaction.expenseAmount} </span> 
            <button className="delete-btn" onClick={() => deleteTransaction(expenseTransaction.id)}>
            <i className="fas fa-trash"></i>
        </button>
    </li>
    )
}

export default ExpenseTransaction;
