import Body from "../Body.jsx/Body";
import SideFeatures from "../../Components/SideFeatures/SideFeatures";
import styles from "./Main.module.css";

function Main() {
  return (
    <main className={styles.main}>
      <Body />
      <SideFeatures />
    </main>
  );
}

export default Main;
