import FavAccount from "../FavAccount/FavAccount";
import Wallet from "../Wallet/Wallet";
import styles from "./SideFeatures.module.css";

function SideFeatures() {
  return (
    <div className={`${styles.sideFeatures} glassMorphism`}>
      <FavAccount />
      <Wallet />
    </div>
  );
}

export default SideFeatures;
