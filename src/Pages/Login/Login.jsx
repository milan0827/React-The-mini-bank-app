import { useState } from "react";
import styles from "./Login.module.css";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { createCustomer } from "../../store/customerSlice";

function Login() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [nationalId, setNationalId] = useState("");

  const dispatch = useDispatch();

  function handleSumbit(e) {
    e.preventDefault();
    if (!username || !nationalId) return;
    dispatch(createCustomer(username, nationalId));
    navigate("/app");
  }

  return (
    <form
      className={`${styles.login} glassMorphism page`}
      onSubmit={handleSumbit}
    >
      <h2>RB - The Bank App</h2>
      {/* {!isAuth && <p>Incorrect username or password</p>} */}

      <div className={styles.formGroup}>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          placeholder="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div className={styles.formGroup}>
        <label htmlFor="password">Password</label>
        <input
          type="text"
          placeholder="password"
          value={nationalId}
          onChange={(e) => setNationalId(e.target.value)}
        />
      </div>

      <button className={`${styles.btnLogin} btn`}>Login</button>
    </form>
  );
}

export default Login;
