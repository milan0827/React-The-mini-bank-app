import { NavLink } from "react-router-dom";
import Logo from "../../Components/Logo/Logo";
import styles from "./Welcome.module.css";

function Welcome() {
  return (
    <div className={`glassMorphism ${styles.welcome}`}>
      <Logo />
      <h1>Welcome</h1>
      <NavLink className={styles.active} to="/login">
        Login
      </NavLink>
    </div>
  );
}

export default Welcome;
