import { useAccount } from "../../Contexts/accountContexts";
import styles from "./Account.module.css";

function Account() {
  const { balance } = useAccount();

  return (
    <div className={`${styles.account} body-part`}>
      <h1>
        Binod Pokharel - <span>Normal Saving</span>
      </h1>
      <p>XXXXXX</p>
      <h2>NPR {balance}</h2>
    </div>
  );
}

export default Account;
