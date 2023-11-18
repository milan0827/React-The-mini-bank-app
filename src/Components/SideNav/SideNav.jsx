import { FaHome } from "react-icons/fa";
import { CgLogOut } from "react-icons/cg";

import styles from "./SideNav.module.css";
import { FaCreditCard, FaMessage, FaServicestack } from "react-icons/fa6";

function SideNav() {
  return (
    <nav className={`${styles.sidebar} glassMorphism`}>
      <ul className={styles.navList}>
        <li>
          <a>
            <FaHome />
            <span>Dashboard</span>
          </a>
        </li>
        <li>
          <a>
            <FaCreditCard />
            <span>Payments</span>
          </a>
        </li>
        <li>
          <a>
            <FaMessage />
            <span>Messages</span>
          </a>
        </li>
        <li>
          <a>
            <FaServicestack />
            <span>Services</span>
          </a>
        </li>

        <li>
          <a>
            <CgLogOut />
            <span>Logout</span>
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default SideNav;
