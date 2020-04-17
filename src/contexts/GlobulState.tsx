import React, {
  createContext,
  useReducer,
  useEffect,
  ReactNode,
  ReactElement,
} from "react";
import AppReducer from "./AppReducer";

export interface IincomeTransaction {
  id: string;
  incomeText: string;
  incomeAmount: number;
}

export interface IexpenseTransaction {
  id: string;
  expenseText: string;
  expenseAmount: number;
}

export type InitialState = {
  incomeTransactions: IincomeTransaction[];
  expenseTransactions: IexpenseTransaction[];
  addIncome: (incomeTransaction: IincomeTransaction) => void;
  addExpense: (expenseTransaction: IexpenseTransaction) => void;
  deleteTransaction: (id: string) => void;
};

// const initialState = {
//   incomeTransactions: JSON.parse(localStorage.getItem("incomeTransactions")) || [],
//   expenseTransactions:JSON.parse(localStorage.getItem("expenseTransactions")) || [],
//   addIncome: (incomeTransaction: IincomeTransaction) => {},
//   addExpense: (expenseTransaction: IexpenseTransaction) => {},
//   deleteTransaction: (id:string) => {},
// };

const initialState = {
  incomeTransactions:[{id:"1", incomeText: 'Salary', incomeAmount:2000}, {id:"9", incomeText:"Rent", incomeAmount: 500}],
  expenseTransactions:[{id:"2", expenseText: 'Car Wash', expenseAmount: 25}],
  addIncome: (incomeTransaction: IincomeTransaction) => {},
  addExpense: (expenseTransaction: IexpenseTransaction) => {},
  deleteTransaction: (id:string) => {},
};

export const GlobalContext = createContext<InitialState>(initialState);

export const GlobalContextProvider = ({
  children,
}: {
  children: ReactNode;
}): ReactElement => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  useEffect(() => {
    localStorage.setItem(
      "incomeTransactions",
      JSON.stringify(state.incomeTransactions)
    );
    localStorage.setItem(
      "expenseTransactions",
      JSON.stringify(state.expenseTransactions)
    );
  });

  const addIncome = (incomeTransaction: IincomeTransaction)=> {
    dispatch({
      type: "ADD_INCOME",
      payload: incomeTransaction,
    });
  };
  const addExpense = (expenseTransaction: IexpenseTransaction)=> {
    dispatch({
      type: "ADD_EXPENSE",
      payload: expenseTransaction,
    });
  };
  const deleteTransaction = (id: string) => {
    dispatch({
      type: "DELETE_TRANSACTION",
      payload: id,
    });
  };
  return (
    <GlobalContext.Provider
      value={{
        incomeTransactions: state.incomeTransactions,
        expenseTransactions: state.expenseTransactions,
        addIncome,
        addExpense,
        deleteTransaction,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
