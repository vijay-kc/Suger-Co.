import styles from "./Shopping.module.css";
import shoppingOne from "../../assets/shoppingOne.png";
import shoppingTwo from "../../assets/shoppingTwo.png";
import shoppingThree from "../../assets/shoppingThree.png";
import shoppingFour from "../../assets/shoppingFour.png";
import shoppingFive from "../../assets/shoppingFive.png";
import shoppingSix from "../../assets/shoppingSix.png";
import shoppingSeven from "../../assets/shoppingSeven.png";
import shoppingEight from "../../assets/shoppingEight.png";
import shoppingNine from "../../assets/shoppingNine.png";
import shoppingTen from "../../assets/shoppingTen.png";
import shoppingEleven from "../../assets/shoppingEleven.png";
import shoppingTwelve from "../../assets/shoppingTwelve.png";
import { Link } from "react-router-dom";

const Shopping = () => {
  return (
    <div>
      <div className={styles.header}>
        <h1 className={styles.shopText}>Shop</h1>
      </div>
      <div className={styles.navigation}>
        <div className={styles.links}>
          <Link to="/mensWear">Men</Link>
          <Link to="/womensWear">Women</Link>
          <Link to="/kidsWear">Kids</Link>
          <Link to="/brands">Brands</Link>
        </div>
      </div>
      {location.pathname === "/mensWear" && (
        <div className={styles.section}>
          <h2>Men</h2>
          <div className={styles.cardContainer}>
            {[shoppingOne, shoppingTwo, shoppingThree, shoppingFour].map(
              (img, index) => (
                <div key={index} className={styles.card}>
                  <img src={img} alt={`Card ${index}`} />
                </div>
              )
            )}
          </div>
        </div>
      )}
      <div className={styles.section}>
        <h2>Women</h2>
        <div className={styles.cardContainer}>
          {[shoppingFive, shoppingSix, shoppingSeven, shoppingEight].map(
            (img, index) => (
              <div key={index} className={styles.card}>
                <img src={img} alt={`Card ${index}`} />
              </div>
            )
          )}
        </div>
      </div>
      <div className={styles.section}>
        <h2>Popular Products</h2>
        <div className={styles.cardContainer}>
          {[shoppingNine, shoppingTen, shoppingEleven, shoppingTwelve].map(
            (img, index) => (
              <div key={index} className={styles.card}>
                <img src={img} alt={`Card ${index}`} />
                <p>Organised T-Shirt And Holders</p>
                <p>$30.00</p>
                <p style={{ textDecoration: "line-through" }}>$99.00</p>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default Shopping;
