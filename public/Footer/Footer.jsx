import styles from "./Footer.module.css"; // Assuming you have CSS modules
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import footerLogo from "../../src/assets/logo.png";
import logoText from "../../src/assets/sugarCo.png";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.section}>
        <h2>Phone</h2>
        <ul>
          <li>About Us</li>
          <li>Christopher Services</li>
          <li>German Conditions</li>
          <li>Privacy Policy</li>
          <li>Bloc Insertion</li>
        </ul>
      </div>
      <div className={styles.section}>
        <h2>My Account</h2>
        <ul>
          <li>Dev</li>
          <li>Live on My Account</li>
          <li>View Card Order History</li>
        </ul>
      </div>
      <div className={styles.section}>
        <h2>Shopping Guide</h2>
        <ul>
          <li>Queues Payments Tracker</li>
          <li>Order Return Policy</li>
          <li>Volunteer</li>
          <li>Return Policy</li>
          <li>Warranty</li>
        </ul>
      </div>
      <div className={styles.section}>
        <h2>Follow Us On</h2>
        <div className={styles.socialIcons}>
          <div>
            <FaFacebook />
          </div>
          <div>
            <FaInstagramSquare />
          </div>
          <div>
            <FaLinkedin />
          </div>
          <div>
            <FaTwitter />
          </div>
        </div>
        <div className={styles.logo}>
          <img src={footerLogo} />
          <img src={logoText} alt="" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
