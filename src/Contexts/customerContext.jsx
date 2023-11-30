const { createContext } = require("react");

const initialState = {
  nationalId: "",
  fullName: "",
  createdAt: new Date(Date.now()).toLocaleString("en", {
    month: "long",
    year: "numeric",
    day: "numeric",
  }),
};

const CustomerContext = createContext();

export default function CustomerProvider({ children }) {
  return <CustomerContext.Provider>{children}</CustomerContext.Provider>;
}
