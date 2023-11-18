import Logo from "../Logo/Logo";
import SearchBox from "../SearchBox/SearchBox";

import Image1 from "./../../assets/binode1.jpg";
import styles from "./PageNav.module.css";

function PageNav() {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <Logo />
        <SearchBox />

        <div className={styles.profile}>
          <img src={Image1} alt="Profile photo" />
          {/* <span>Binod Pokharel</span> */}
        </div>
      </nav>
    </header>
  );
}

export default PageNav;
