import { useState } from "react";
import { useAccount } from "../../Contexts/accountContexts";
import styles from "./Transactions.module.css";

function Transactions() {
  const [amount, setAmount] = useState(0);
  const [description, setDescription] = useState("");
  const { accountDeposit } = useAccount();

  function handleDeposit() {
    accountDeposit(amount, description);
    setAmount(0);
    setDescription("");
  }

  return (
    <div className="glassMorphism page">
      <div className={`${styles.operation} body-part`}>
        <h4>Deposit money</h4>
        <input
          placeholder="Enter the amount"
          value={amount}
          onChange={(e) => setAmount(+e.target.value)}
        />
        <input
          placeholder="Remarks"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button className={`btn`} onClick={handleDeposit}>
          Deposit
        </button>
      </div>

      <div className={`${styles.operation} body-part`}>
        <h4>Withdraw money</h4>
        <input placeholder="Enter the amount" />
        <input placeholder="Remarks" />
        <button className={`btn`}>Withdraw</button>
      </div>
      <div className={`${styles.operation} body-part`}>
        <h4>Trasfer money</h4>
        <input placeholder="Enter the amount" />
        <input placeholder="Receiver account number" />
        <input placeholder="Receiver name" />
        <input placeholder="Remarks" />
        <button className={`btn`}>Tranfer</button>
      </div>
      <div className={`${styles.operation} body-part`}>
        <h4>Request for loan</h4>
        <input placeholder="Enter the amount" />
        <input placeholder="Purpose for loan" />
        <input placeholder="Remarks" />
        <button className={`btn`}>Request loan</button>
      </div>
      <div className={`${styles.operation} body-part`}>
        <h4>pay the loan</h4>
        <input placeholder="Enter the amount" />
        <input placeholder="Remarks" />
        <button className={`btn`}>Pay loan</button>
      </div>
    </div>
  );
}

export default Transactions;
