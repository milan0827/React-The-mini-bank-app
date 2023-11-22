import { useAccount } from "../../Contexts/accountContexts";
import styles from "./Messages.module.css";

function Messages() {
  const { deposit, message } = useAccount();
  console.log(deposit);

  return (
    <div className="glassMorphism page ">
      <h2 className={styles.heading}>Message from bank</h2>

      <p className={`${styles.msg} body-part`}>
        {"->"} {message === "" ? "No transaction performed yet" : message}
      </p>
    </div>
  );
}

export default Messages;
