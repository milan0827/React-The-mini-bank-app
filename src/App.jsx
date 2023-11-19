import PageNav from "./Components/PageNav.jsx/PageNav";
import SideNav from "./Components/SideNav/SideNav";
import "./App.css";
import { useState } from "react";
import Login from "./Pages/Login/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PageNotFound from "./Pages/PageNotFound/PageNotFound";
import Welcome from "./Pages/Welcome/Welcome";
import Main from "./Components/Main/Main";
import Transactions from "./Pages/Transactions/Transactions";
import Messages from "./Pages/Messages/Messages";
import Services from "./Pages/Services/Services";

function App() {
  const [login, setLogin] = useState(true);

  return (
    <div className="app">
      <BrowserRouter>
        <PageNav />
        <SideNav />
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="login" element={<Login setLogin={setLogin} />} />
          <Route path="transactions" element={<Transactions />} />
          <Route path="msg" element={<Messages />} />
          <Route path="services" element={<Services />} />
          <Route path="app" element={<Main />}></Route>
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
