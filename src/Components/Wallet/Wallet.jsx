import styles from "./Wallet.module.css";

function Wallet() {
  return (
    <div className={`${styles.wallet} body-part`}>
      <h2>Wallet</h2>
      <div className={styles.walletList}>
        <p>eSewa</p>
        <p>Khalti</p>
        <p>Paypal</p>
      </div>
    </div>
  );
}

export default Wallet;
