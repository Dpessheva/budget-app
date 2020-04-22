import React, {ReactElement} from 'react';
import IncomeAddTransaction from './IncomeAddTransaction';
import ExpenseAddTransaction from './ExpenseAddTransaction';


const AddTransaction = ():ReactElement => {
   
    return (
        <div className="form-wrapper">      
        <IncomeAddTransaction/>
        <ExpenseAddTransaction/>    
        </div>
    )
}

export default AddTransaction;
