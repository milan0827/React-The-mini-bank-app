import styles from "./Transactions.module.css";

function Transactions() {
  return (
    <div className="glassMorphism">
      <div className={styles.deposit}>
        <input placeholder="Enter the amount" />
        <button>Deposit</button>
      </div>
      <div className={styles.deposit}>
        <input placeholder="Enter the amount" />
        <button>Deposit</button>
      </div>
      <div className={styles.deposit}>
        <input placeholder="Enter the amount" />
        <button>Deposit</button>
      </div>
    </div>
  );
}

export default Transactions;
