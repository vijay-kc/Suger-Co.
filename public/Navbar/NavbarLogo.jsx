import styles from './NavbarLogo.module.css';
import PropTypes from 'prop-types';

function NavbarLogo({ navLogo, navAlt, navlogoText }) {
  return (
    <div className={styles.navLogoClass}>
      <img src={navLogo} alt={navAlt} />
      <img src={navlogoText} alt="sdkfkjs" />
    </div>
  );
}

NavbarLogo.propTypes = {
  navLogo: PropTypes.string.isRequired,
  navAlt: PropTypes.string.isRequired,
  navlogoText: PropTypes.string.isRequired,
};
export default NavbarLogo;  