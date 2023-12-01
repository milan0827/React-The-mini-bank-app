const initialState = {
  balance: 0,
  deposit: 0,
  loan: 0,
  loanPurpose: 0,
  remarks: "",
  receiversName: "",
  receiversAccoountNumber: "",
  isLoading: false,
  message: "",
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case "account/loading":
      return { ...state, isLoading: true };
    case "account/deposit":
      return {
        ...state,
        balance: state.balance + action.payload.amount,
        remarks: action.payload.remarks,
        message: `You have deposited ${action.payload.amount}NRs to your account.`,
        isLoading: false,
      };
    case "account/withdraw":
      if (state.balance < 10) return;
      return {
        ...state,
        balance: state.balance - action.payload.amount,
        remarks: action.payload.remarks,
        message: `You have withdraw ${action.payload.amount}NRs from your account.`,
      };
    case "account/transfer":
      if (state.balance < 10) return;
      return {
        ...state,
        balance: state.balance - action.payload.amount,
        remarks: action.payload.remarks,
        receiversName: action.payload.accName,
        receiversAccoountNumber: action.payload.accNo,
        message: `You have transferred ${action.payload.amount}NRs to ${action.payload.accName}. Account no.: ${action.payload.accNo}.`,
      };
    case "account/requestLoan":
      if (state.loan > 0) return;
      return {
        ...state,
        loan: action.payload.amount,
        balance: state.balance + action.payload.amount,
        loanPurpose: action.payload.purpose,
        message: `You have requested loan ${action.payload.amount}NRs for ${action.payload.purpose}.`,
      };
    case "account/payLoan":
      if (state.balance < state.loan) return;
      return {
        ...state,
        balance: state.balance - state.loan,
        remarks: action.payload,
        message: `You have paid your loan ${state.loan}NRs.`,
      };
    default:
      return state;
  }
}

function accountDeposit(amount, remarks) {
  return { type: "account/deposit", payload: { amount, remarks } };
}

function accountWithdraw(amount, remarks) {
  return { type: "account/withdraw", payload: { amount, remarks } };
}

function accountTransfer(amount, remarks, accName, accNo) {
  return {
    type: "account/transfer",
    payload: { amount, remarks, accName, accNo },
  };
}

function accountRequestLoan(amount, purpose) {
  return { type: "account/requestLoan", payload: { amount, purpose } };
}

function accountPayLoan(remarks) {
  return { type: "account/payLoan", payload: remarks };
}

export default reducer;

export {
  accountDeposit,
  accountWithdraw,
  accountRequestLoan,
  accountTransfer,
  accountPayLoan,
};
