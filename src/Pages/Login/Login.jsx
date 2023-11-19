import { useState } from "react";
import styles from "./Login.module.css";
import { useNavigate } from "react-router-dom";

function Login({ setLogin }) {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function handleLogin() {
    setLogin((e) => !e);
  }

  function handleSumbit(e) {
    e.preventDefault();

    if (!username || !password) return;
  }

  return (
    <form
      className={`${styles.login} glassMorphism page`}
      onSubmit={handleSumbit}
    >
      <h2>RB - The Bank App</h2>
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
          value={password}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      {/* <p>Please login to get access</p>; */}
      <button className={`${styles.btnLogin} btn`} onClick={handleLogin}>
        Login
      </button>
    </form>
  );
}

export default Login;
