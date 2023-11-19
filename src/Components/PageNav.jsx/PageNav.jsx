import Logo from "../Logo/Logo";
import SearchBox from "../SearchBox/SearchBox";

import Image1 from "./../../assets/binode1.jpg";
import styles from "./PageNav.module.css";

function PageNav({ login }) {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <Logo />
        <SearchBox />

        <div className={styles.profile}>
          {login ? <img src={Image1} alt="Profile photo" /> : <p>Profile</p>}
          {/* <span>Binod Pokharel</span> */}
        </div>
      </nav>
    </header>
  );
}

export default PageNav;
