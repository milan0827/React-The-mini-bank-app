import Body from "../Body/Body";
import SideFeatures from "../SideFeatures/SideFeatures";
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
