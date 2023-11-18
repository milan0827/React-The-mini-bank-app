import styles from "./Services.module.css";
import { TbMessageReport } from "react-icons/tb";
import {
  FaBus,
  FaCreditCard,
  FaFilm,
  FaMobile,
  FaNewspaper,
  FaPlaneDeparture,
  FaRegCreditCard,
  FaUserClock,
  FaWifi,
} from "react-icons/fa";

function Services() {
  return (
    <div className={`${styles.services} body-part`}>
      <h2>Services</h2>
      <ul className={styles.serviceList}>
        <li>
          <FaMobile />
          <span>Topup</span>
        </li>
        <li>
          <FaRegCreditCard />
          <span>eVoucher</span>
        </li>
        <li>
          <FaUserClock />
          <span>Appointment</span>
        </li>
        <li>
          <FaCreditCard />
          <span>Card Info</span>
        </li>
        <li>
          <FaNewspaper />
          <span>Request Chequebook</span>
        </li>
        <li>
          <FaWifi />
          <span>Internet</span>
        </li>
        <li>
          <FaPlaneDeparture />
          <span>Airlines</span>
        </li>
        <li>
          <FaBus />
          <span>Bus Ticket</span>
        </li>
        <li>
          <FaFilm />
          <span>Movies</span>
        </li>
        <li>
          <TbMessageReport />
          <span>Report</span>
        </li>
      </ul>
    </div>
  );
}

export default Services;
