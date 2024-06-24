import styles from "./Brands.module.css";
import categoryOne from "../../assets/categoryOne.png";
import categoryTwo from "../../assets/categoryTwo.png";
import categoryThree from "../../assets/categoryThree.png";
import categoryFour from "../../assets/categoryFour.png";
import categoryFive from "../../assets/categoryFive.png";
import productimageOne from "../../assets/productImgOne.png";
import productimageTwo from "../../assets/productImgTwo.png";
import productimageThree from "../../assets/productImgThree.png";
import productimageFour from "../../assets/productImgFour.png";
import brandImgOne from "../../assets/brandOne.png";
import brandImgTwo from "../../assets/brandTwo.png";
import brandImgThree from "../../assets/brandThree.png";
import brandImgFour from "../../assets/brandFour.png";
import { Link } from "react-router-dom";


const Brands = () => {
  const bagImages = [
    categoryOne,
    categoryTwo,
    categoryThree,
    categoryFour,
    categoryFive,
  ];
  const brandImages = [brandImgOne, brandImgTwo, brandImgThree, brandImgFour];

  const products = [
    {
      image: productimageOne,
      title: "Product 1",
      price: "$10",
      description: "Description 1",
    },
    {
      image: productimageTwo,
      title: "Product 2",
      price: "$20",
      description: "Description 2",
    },
    {
      image: productimageThree,
      title: "Product 3",
      price: "$30",
      description: "Description 3",
    },
    {
      image: productimageFour,
      title: "Product 4",
      price: "$40",
      description: "Description 4",
    },
  ];

  return (
    <div className={styles.ContentContainer}>
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
      <h2 className={styles.Title}>Categories to Bag</h2>
      <div className={styles.ImageContainer}>
        {bagImages.map((image, index) => (
          <div key={index} className={styles.ImageCard}>
            <img
              src={image}
              alt={`Image ${index + 1}`}
              className={styles.RoundedImage}
            />
          </div>
        ))}
      </div>

      <h2 className={styles.Title}>Explore Top Brands</h2>
      <div className={styles.ImageContainer}>
        {brandImages.map((image, index) => (
          <div key={index} className={styles.ImageCard}>
            <img
              src={image}
              alt={`Image ${index + 5}`}
              className={styles.RoundedImage}
            />
          </div>
        ))}
      </div>

      <h2 className={styles.Title}>Popular Products</h2>
      <div className={styles.ImageContainer}>
        {products.map((product, index) => (
          <div key={index} className={styles.ImageCard}>
            <img
              src={product.image}
              alt={`Product ${index + 1}`}
              className={styles.RoundedImage}
            />
            <p className={styles.SmallPara}>{product.title}</p>
            <p className={styles.SmallPara}>{product.price}</p>
            <p className={styles.SmallPara}>{product.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Brands;
