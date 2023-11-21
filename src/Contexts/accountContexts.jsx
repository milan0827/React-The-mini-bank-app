import { createContext, useContext, useEffect, useReducer } from "react";

const initialState = {
  balance: 0,
  deposit: 0,
  loan: 0,
  loanPurpose: 0,
  remarks: "",
  receiversName: "",
  receiversAccoountNumber: "",
  isLoading: false,
};

function reducer(state, action) {
  switch (action.type) {
    case "account/loading":
      return { ...state, isLoading: true };
    case "account/deposit":
      return {
        ...state,
        balance: state.balance + action.payload.amount,
        remarks: action.payload.remarks,
        isLoading: false,
      };
    case "account/withdraw":
      if (state.balance < 10) return;
      return {
        ...state,
        balance: state.balance - action.payload.amount,
        remarks: action.payload.remarks,
      };
    case "account/transfer":
      if (state.balance < 10) return;
      return {
        ...state,
        balance: state.balance - action.payload.amount,
        remarks: action.payload.remarks,
        receiversName: action.payload.accName,
        receiversAccoountNumber: action.payload.accNo,
      };
    case "account/requestLoan":
      if (state.loan > 0) return;
      return {
        ...state,
        loan: action.payload.amount,
        balance: state.balance + action.payload.amount,
        loanPurpose: action.payload.purpose,
      };
    case "account/payLoan":
      if (state.balance < state.loan) return;
      return {
        ...state,
        balance: state.balance - state.loan,
        remarks: action.payload,
      };
    default:
      throw new Error("Unknown action");
  }
}

const AccountContext = createContext();

function AccountProvider({ children }) {
  const [
    {
      balance,
      deposit,
      loan,
      loanPurpose,
      remarks,
      receiversName,
      receiversAccoountNumber,
      isLoading,
    },
    dispatch,
  ] = useReducer(reducer, initialState);

  // useEffect(
  //   function () {
  //     dispatch({ type: "account/loading" });
  //   },
  //   [balance, deposit, loan]
  // );

  function accountDeposit(amount, remarks) {
    dispatch({ type: "account/deposit", payload: { amount, remarks } });
  }

  function accountWithdraw(amount, remarks) {
    dispatch({ type: "account/withdraw", payload: { amount, remarks } });
  }

  function accountTransfer(amount, remarks, accName, accNo) {
    dispatch({
      type: "account/transfer",
      payload: { amount, remarks, accName, accNo },
    });
  }

  function accountRequestLoan(amount, purpose) {
    dispatch({ type: "account/requestLoan", payload: { amount, purpose } });
  }

  function accountPayLoan(remarks) {
    dispatch({ type: "account/payLoan", payload: remarks });
  }

  return (
    <AccountContext.Provider
      value={{
        balance,
        deposit,
        loan,
        loanPurpose,
        remarks,
        receiversName,
        receiversAccoountNumber,
        isLoading,
        accountDeposit,
        accountWithdraw,
        accountTransfer,
        accountRequestLoan,
        accountPayLoan,
      }}
    >
      {children}
    </AccountContext.Provider>
  );
}

function useAccount() {
  const context = useContext(AccountContext);
  if (context === undefined)
    throw new Error("context was defined outside the AccountContext");
  return context;
}

export { AccountProvider, useAccount };
