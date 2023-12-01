import { useState } from "react";
import styles from "./Transactions.module.css";
import { useDispatch } from "react-redux";
import {
  accountDeposit,
  accountPayLoan,
  accountRequestLoan,
  accountTransfer,
  accountWithdraw,
} from "../../store/accountSlice";

function Transactions() {
  const [depositAmount, setdepositAmount] = useState("");
  const [depositDescription, setDepositDescription] = useState("");

  const [withdrawAmount, setWithdrawAmount] = useState("");
  const [withdrawDescription, setWithdrawDescription] = useState("");

  const [transferAmount, setTransferAmount] = useState("");
  const [transferDescription, setTransferDescription] = useState("");
  const [receiverName, setReceiverName] = useState("");
  const [receiverAccNumber, setReceiverAccNumber] = useState("");

  const [requestLoanAmount, setRequestLoanAmount] = useState("");
  const [requestLoanAmountDesc, setRequestLoanAmountDesc] = useState("");

  const [payLoanDesc, setPayLoanDesc] = useState("");

  const dispatch = useDispatch();
  function handleDeposit() {
    if (!depositAmount) return;

    dispatch(accountDeposit(depositAmount, depositDescription));
    setdepositAmount("");
    setDepositDescription("");
  }

  function handleWithraw() {
    if (!withdrawAmount) return;

    dispatch(accountWithdraw(withdrawAmount, setWithdrawAmount));
    setWithdrawAmount("");
    setWithdrawDescription("");
  }

  function handleTransfer() {
    if (!transferAmount || !receiverAccNumber || !receiverName) return;

    dispatch(
      accountTransfer(
        transferAmount,
        transferDescription,
        receiverName,
        receiverAccNumber
      )
    );

    setTransferAmount("");
    setTransferDescription("");
    setReceiverName("");
    setReceiverAccNumber("");
  }

  function handleRequestLoan() {
    if (!requestLoanAmount) return;

    dispatch(accountRequestLoan(requestLoanAmount, requestLoanAmountDesc));
    setRequestLoanAmount("");
    setRequestLoanAmountDesc("");
  }

  function handlePayLoan() {
    dispatch(accountPayLoan(payLoanDesc));
    setPayLoanDesc("");
  }

  return (
    <div className="glassMorphism page">
      <div className={`${styles.operation} body-part`}>
        <h4>Deposit money</h4>
        <input
          placeholder="Enter the amount"
          value={depositAmount}
          onChange={(e) => setdepositAmount(+e.target.value)}
        />
        <input
          placeholder="Remarks"
          value={depositDescription}
          onChange={(e) => setDepositDescription(e.target.value)}
        />
        <button className={`btn`} onClick={handleDeposit}>
          Deposit
        </button>
      </div>

      <div className={`${styles.operation} body-part`}>
        <h4>Withdraw money</h4>
        <input
          placeholder="Enter the amount"
          value={withdrawAmount}
          onChange={(e) => setWithdrawAmount(+e.target.value)}
        />
        <input
          placeholder="Remarks"
          value={withdrawDescription}
          onChange={(e) => setWithdrawDescription(e.target.value)}
        />
        <button className={`btn`} onClick={handleWithraw}>
          Withdraw
        </button>
      </div>

      <div className={`${styles.operation} body-part`}>
        <h4>Trasfer money</h4>
        <input
          placeholder="Enter the amount"
          value={transferAmount}
          onChange={(e) => setTransferAmount(+e.target.value)}
        />
        <input
          placeholder="Receiver account number"
          value={receiverAccNumber}
          onChange={(e) => setReceiverAccNumber(e.target.value)}
        />
        <input
          placeholder="Receiver name"
          value={receiverName}
          onChange={(e) => setReceiverName(e.target.value)}
        />
        <input
          placeholder="Remarks"
          value={transferDescription}
          onChange={(e) => setTransferDescription(e.target.value)}
        />
        <button className={`btn`} onClick={handleTransfer}>
          Tranfer
        </button>
      </div>

      <div className={`${styles.operation} body-part`}>
        <h4>Request for loan</h4>
        <input
          placeholder="Enter the amount"
          value={requestLoanAmount}
          onChange={(e) => setRequestLoanAmount(+e.target.value)}
        />
        <input
          placeholder="Purpose for loan"
          value={requestLoanAmountDesc}
          onChange={(e) => setRequestLoanAmountDesc(e.target.value)}
        />
        <button className={`btn`} onClick={handleRequestLoan}>
          Request loan
        </button>
      </div>

      <div className={`${styles.operation} body-part`}>
        <h4>pay the loan</h4>
        <input
          placeholder="Remarks"
          value={payLoanDesc}
          onChange={(e) => setPayLoanDesc(e.target.value)}
        />
        <button className={`btn`} onClick={handlePayLoan}>
          Pay loan
        </button>
      </div>
    </div>
  );
}

export default Transactions;
