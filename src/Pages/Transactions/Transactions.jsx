import styles from "./Transactions.module.css";

function Transactions() {
  return (
    <div className="glassMorphism page">
      <div className={styles.operation}>
        <input placeholder="Enter the amount" />
        <button>Deposit</button>
      </div>
      <div className={styles.operation}>
        <input placeholder="Enter the amount" />
        <button>Withdraw</button>
      </div>
      <div className={styles.operation}>
        <input placeholder="Enter the amount" />
        <button>Request loan</button>
      </div>
      <div className={styles.operation}>
        <input placeholder="Enter the amount" />
        <button>Pay loan</button>
      </div>
    </div>
  );
}

export default Transactions;
