import React, {useContext, ReactElement} from 'react';
import {GlobalContext, IincomeTransaction} from '../contexts/GlobulState';
import IncomeTransaction from './IncomeTransaction';

const IncomeList = ():ReactElement => {
    const { incomeTransactions } = useContext(GlobalContext);
    return (
        <div className="transactions transactions-income">
            <h2>Transaction History</h2>
            <ul className="transaction-list">
                {incomeTransactions.map((incomeTransaction:IincomeTransaction) => (
                    <IncomeTransaction key={incomeTransaction.id} incomeTransaction={incomeTransaction} />
                ))}
            </ul>
        </div>
    )
};

export default IncomeList;
