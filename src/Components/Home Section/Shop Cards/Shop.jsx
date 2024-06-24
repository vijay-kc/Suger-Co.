import styles from "./Shop.module.css";
import PropTypes from "prop-types";
import shopImageOne from "../../../assets/shopImgOne.png";
import shopImageTwo from "../../../assets/shopImgTwo.png";
import shopImageThree from "../../../assets/shopImgThree.png";
import shopImageFour from "../../../assets/shopImgFour.png";
import shopImageFive from "../../../assets/shopImgFive.png";
import shopImageSix from "../../../assets/shopImgSix.png";
import shopImageSeven from "../../../assets/shopImgSix.png";
import shopImageEight from "../../../assets/shopImgEight.png";

const ImageWithText = ({ imageUrl }) => {
  return (
    <div
      className={styles.shopCard}
      style={{
        position: "relative",
        display: "inline-block",
        maxWidth: "300px",
        margin: "30px",
      }}
    >
      <img
        src={imageUrl}
        alt="example"
        style={{ width: "100%", height: "auto" }}
      />
    </div>
  );
};

const Shop = () => {
  const images = [
    { imageUrl: shopImageOne, text: "Ethnic Wear", para: "50-80% OFF" },
    { imageUrl: shopImageTwo, text: "Casual Wear", para: "50-80% OFF" },
    { imageUrl: shopImageThree, text: "Formal Wear", para: "50-80% OFF" },
    { imageUrl: shopImageFour, text: "Sports Wear", para: "50-80% OFF" },
    { imageUrl: shopImageFive, text: "Casual Wear", para: "50-80% OFF" },
    { imageUrl: shopImageSix, text: "Formal Wear", para: "50-80% OFF" },
    { imageUrl: shopImageSeven, text: "Ethnic Wear", para: "50-80% OFF" },
    { imageUrl: shopImageEight, text: "Sports Wear", para: "50-80% OFF" },
  ];

  return (
    <div className={styles.shop}>
      <h1>Shop By Category</h1>
      <div
        style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
      >
        {images.map((image, index) => (
          <div key={index}>
            <ImageWithText
              key={index}
              imageUrl={image.imageUrl}
              text={image.text}
              para={image.para}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

ImageWithText.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  para: PropTypes.string.isRequired,
};

export default Shop;
