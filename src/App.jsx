import PageNav from "./Components/PageNav.jsx/PageNav";
import SideNav from "./Components/SideNav/SideNav";
import Body from "./Pages/Body.jsx/Body";
import SideFeatures from "./Components/SideFeatures/SideFeatures";
import "./App.css";

function App() {
  return (
    <div className="app">
      <PageNav />
      <SideNav />
      <Body />
      <SideFeatures />
    </div>
  );
}

export default App;
