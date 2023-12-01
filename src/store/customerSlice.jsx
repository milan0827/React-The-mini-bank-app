const initialState = {
  nationalId: "",
  fullName: "",
  createdAt: "",
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case "customer/create":
      return {
        ...state,
        fullName: action.payload.fullName,
        nationalId: action.payload.nationalId,
        createdAt: action.payload.createdAt,
      };
    case "customer/update":
      return { ...state, fullName: action.payload };
    case "customer/delete":
      return { ...state };
    default:
      return state;
  }
}

function createCustomer(fullName, nationalId) {
  return {
    type: "customer/create",
    payload: { fullName, nationalId, createdAt: new Date().toISOString() },
  };
}

function updateCustomer(fullName) {
  return {
    type: "customer/update",
    payload: fullName,
  };
}

export default reducer;

export { createCustomer, updateCustomer };
