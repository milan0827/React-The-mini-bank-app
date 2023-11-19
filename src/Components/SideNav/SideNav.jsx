import { FaHome } from "react-icons/fa";
import { CgLogOut } from "react-icons/cg";

import styles from "./SideNav.module.css";
import { FaCreditCard, FaMessage, FaServicestack } from "react-icons/fa6";
import { NavLink } from "react-router-dom";

function SideNav() {
  return (
    <nav className={`${styles.sidebar} glassMorphism`}>
      <ul className={styles.navList}>
        <li>
          <NavLink to="app">
            <FaHome />
            <span>Dashboard</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="transactions">
            <FaCreditCard />
            <span>Transaction</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="msg">
            <FaMessage />
            <span>Messages</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="services">
            <FaServicestack />
            <span>Services</span>
          </NavLink>
        </li>

        <li>
          <NavLink>
            <CgLogOut />
            <span>Logout</span>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default SideNav;
