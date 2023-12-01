import { useSelector } from "react-redux";
import Logo from "../Logo/Logo";
import SearchBox from "../SearchBox/SearchBox";

import Image1 from "./../../assets/profile.jpg";
import styles from "./PageNav.module.css";

function PageNav() {
  const fullName = useSelector((state) => state.customer.fullName);

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <Logo />
        <SearchBox />

        {fullName && (
          <div className={styles.profile}>
            <img src={Image1} alt="Profile photo" />
            <p>Welcome </p>
            <span>{fullName}</span>
          </div>
        )}
      </nav>
    </header>
  );
}

export default PageNav;
