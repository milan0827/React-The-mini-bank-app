import { useSelector } from "react-redux";
import styles from "./Account.module.css";

function Account() {
  const balance = useSelector((state) => state.account.balance);
  const fullName = useSelector((state) => state.customer.customer);  
  console.log(balance);

  return (
    <div className={`${styles.account} body-part`}>
      <h1>
        {fullName} - <span>Normal Saving</span>
      </h1>
      <p>XXXXXX</p>
      <h2>NPR {balance}</h2>
    </div>
  );
}

export default Account;
