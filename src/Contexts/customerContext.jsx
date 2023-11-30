const { createContext, useReducer } = require("react");

const initialState = {
  nationalId: "",
  fullName: "",
  createdAt: new Date(Date.now()).toLocaleString("en", {
    month: "long",
    year: "numeric",
    day: "numeric",
  }),
};

function reducer(state, action) {
  switch (action.type) {
    case "customer/create":
      return {
        ...state,
        fullName: action.payload.fullName,
        nationalId: action.payload.nationalId,
      };
    case "customer/update":
      return { ...state, fullName: action.payload };
    case "customer/delete":
      return { ...state };
    default:
      throw new Error("Unknown action");
  }
}

const CustomerContext = createContext();

const [{ nationalId, fullName, createdAt }, dispatch] = useReducer(
  initialState,
  reducer
);

function createCustomer(fullName, nationalId) {
  dispatch({ type: "customer/create", payload: { fullName, nationalId } });
}

function updateCustomer(fullName) {
  dispatch({ type: "customer/update", payload: fullName });
}

function deleteCustomer() {
  dispatch({ type: "delete/customer" });
}

export default function CustomerProvider({ children }) {
  return (
    <CustomerContext.Provider
      value={{
        nationalId,
        fullName,
        createdAt,
        createCustomer,
        updateCustomer,
        deleteCustomer,
      }}
    >
      {children}
    </CustomerContext.Provider>
  );
}
