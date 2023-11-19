import Account from "../Account/Account";
import Service from "../Service/Service";
import History from "../History/History";
import styles from "./Body.module.css";

function Body() {
  return (
    <div className={`${styles.body} glassMorphism`}>
      <Account />
      <Service />
      <History />
    </div>
  );
}

export default Body;
