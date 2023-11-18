import Account from "../../Components/Account/Account";
import Services from "../../Components/Services/Services";
import History from "../../Components/History/History";
import styles from "./Body.module.css";

function Body() {
  return (
    <div className={`${styles.body} glassMorphism`}>
      <Account />
      <Services />
      <History />
    </div>
  );
}

export default Body;
