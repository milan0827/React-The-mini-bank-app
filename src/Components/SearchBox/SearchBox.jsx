import { FaMagnifyingGlass } from "react-icons/fa6";

import styles from "./SearchBox.module.css";

function SearchBox() {
  return (
    <div className={styles.searchBox}>
      <input type="text" placeholder="Search anything..." />
      <FaMagnifyingGlass className={styles.glass} />
    </div>
  );
}

export default SearchBox;
