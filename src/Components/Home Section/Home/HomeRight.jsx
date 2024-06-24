import styles from "./HomeRight.module.css";
import PropTypes from 'prop-types';


const HomeRight = ({ homeLeftRightImage }) => {
  return (
    <div className={styles.homeRightClass}>
      <img src={homeLeftRightImage} alt="" />
    </div>
  );
};

HomeRight.propTypes = {
  homeLeftRightImage: PropTypes.string.isRequired,
};

export default HomeRight;