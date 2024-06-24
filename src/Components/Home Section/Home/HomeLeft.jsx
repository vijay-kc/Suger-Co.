  import styles from "./HomeLeft.module.css";
  import PropTypes from "prop-types";


const HomeLeft = ({ homeLeftBtnTopText, homeLeftHeading, homeLeftPara, homeLeftViewsText }) => {
  return (
    <div className={styles.homeLeftClass}>
      <div className={styles.homeLeftBtnClass}>
        <button type="button">{homeLeftBtnTopText}</button>
      </div>
      <div className={styles.homeLeftHeadingClass}>
        <h1>{homeLeftHeading}</h1>
      </div>
      <div className={styles.homeLeftParaClass}>
        <p>{homeLeftPara}</p>
      </div>
      <div className={styles.homeLeftViewsClass}>
        <p>{homeLeftViewsText}</p>
      </div>
    </div>
  );
};

HomeLeft.propTypes = {
  homeLeftBtnTopText: PropTypes.string.isRequired,
  homeLeftHeading: PropTypes.string.isRequired,
  homeLeftPara: PropTypes.string.isRequired,
  homeLeftViewsText: PropTypes.string.isRequired,
};

export default HomeLeft;