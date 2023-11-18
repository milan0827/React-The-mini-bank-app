import styles from "./History.module.css";

function History() {
  return (
    <div className={`${styles.history} body-part`}>
      <h2>History</h2>
      <div className={styles.transaction}>
        <h4>Transaction</h4>
        <div className={styles.buttonGroup}>
          <button className="btn">Deposit</button>
          <button className="btn">Withdraw</button>
          <button className="btn">Tranfer</button>
        </div>
        <p className={styles.text}>You have deposited X amount</p>
      </div>
      <a>Other...</a>
    </div>
  );
}

export default History;
