import { useEffect, useState } from "react";
import styles from "./Login.module.css";
import { useNavigate } from "react-router-dom";

const user = {
  username: "milan0827",
  password: "qwerty",
};

function Login() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isAuth, setIsAuth] = useState(false);

  function userLogin(username, password) {
    if (username === user.username && password === user.password)
      setIsAuth(true);
  }

  function handleSumbit(e) {
    e.preventDefault();
    if (!username || !password) return;

    userLogin(username, password);
  }

  useEffect(
    function () {
      if (isAuth) navigate("/app");
    },
    [isAuth, navigate]
  );

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
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      <button className={`${styles.btnLogin} btn`}>Login</button>
    </form>
  );
}

export default Login;
