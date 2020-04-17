import { IincomeTransaction, IexpenseTransaction } from "./GlobulState";

type Appstate = {
  incomeTransactions: IincomeTransaction[];
  expenseTransactions: IexpenseTransaction[],
}

type Actions =
  | {
    type: "ADD_INCOME";
    payload: IincomeTransaction,
    }
| {
    type: "ADD_EXPENSE";
    payload: IexpenseTransaction;
  }
  | {
    type: "DELETE_TRANSACTION";
    payload: string;
  };


export default (state:Appstate, action:Actions) => {

  
    switch (action.type) {
        case 'ADD_INCOME':
            return {
                ...state,
                incomeTransactions: [action.payload, ...state.incomeTransactions]
            };
            case 'ADD_EXPENSE':
                return {
                    ...state,
                    expenseTransactions:[action.payload, ...state.expenseTransactions]
            }
            case "DELETE_TRANSACTION":
                return {
                  ...state,
                  incomeTransactions: state.incomeTransactions.filter(
                    (incomeTransaction) => incomeTransaction.id !== action.payload
                  ),
                  expenseTransactions: state.expenseTransactions.filter(
                    (expenseTransaction) => expenseTransaction.id !== action.payload
                  )
                };
        default:
            return state;
    }
}