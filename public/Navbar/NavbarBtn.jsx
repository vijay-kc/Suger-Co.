import PropTypes from "prop-types";
import { FaSearch } from "react-icons/fa";
import styles from "./NavbarBtn.module.css";

function NavbarBtn({ navBtnText }) {
  return (
    <div className={styles.navBtnClass}>
      <div className={styles.navBtnIcon}>
        <FaSearch />
      </div>
      <div className={styles.navBtn}>
        <button type="button" className={styles.logInBtn}>Log In</button>
        <button type="button">{navBtnText}</button>
      </div>{" "}
    </div>
  );
}

NavbarBtn.propTypes = {
  navBtnText: PropTypes.string.isRequired,
};

export default NavbarBtn;
