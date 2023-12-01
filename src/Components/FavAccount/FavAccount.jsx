import styles from "./FavAccount.module.css";
import Image1 from "./../../assets/profile.jpg";

function FavAccount() {
  return (
    <div className={`${styles.favAccount} body-part`}>
      <h2>Favourite account</h2>
      <div className={styles.images}>
        <img src={Image1} alt="Photo" />
        <img src={Image1} alt="Photo" />
        <img src={Image1} alt="Photo" />
        <img src={Image1} alt="Photo" />
        <img src={Image1} alt="Photo" />
        <img src={Image1} alt="Photo" />
      </div>
    </div>
  );
}

export default FavAccount;
