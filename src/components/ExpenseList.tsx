import React, {useContext, ReactElement} from 'react';
import {GlobalContext, IexpenseTransaction} from '../contexts/GlobulState';
import ExpenseTransaction from './ExpenseTransaction';

const ExpenseList = ():ReactElement => {
    const { expenseTransactions } = useContext(GlobalContext);
    return (
        <div className="transactions transactions-expense">
            <h2>Transaction History</h2>
            <ul className="transaction-list">
                {expenseTransactions.map((expenseTransaction:IexpenseTransaction) => (
                    <ExpenseTransaction key={expenseTransaction.id} expenseTransaction={expenseTransaction}/>
                ))}
            </ul>
            
        </div>
    )
}

export default ExpenseList;
