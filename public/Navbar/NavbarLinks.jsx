import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import styles from "./NavbarLinks.module.css";

export function NavbarLinks({ navLinks, navHref }) {
  return (
    <div className={styles.navbarLinksClass}>
      <ul>
        {navLinks.map((items, linkKey) => (
          <li key={linkKey}>
            <Link to={navHref[linkKey]}>{items}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

NavbarLinks.propTypes = {
  navLinks: PropTypes.array.isRequired,
  navHref: PropTypes.array.isRequired,
};

export default NavbarLinks;