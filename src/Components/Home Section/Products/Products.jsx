import styles from "./Products.module.css";
import productImgOne from "../../../assets/productImgOne.png";
import productImgTwo from "../../../assets/productImgTwo.png";
import productImgThree from "../../../assets/productImgThree.png";
import productImgFour from "../../../assets/productImgFour.png";

const Products = () => {
  const productsData = [
    {
      imageUrl: productImgOne,
      text: "Organised T-Shirt And Holders",
      price: "$30.00",
      actPrice: "99.00",
    },
    {
      imageUrl: productImgTwo,
      text: "Denim for Menand Women",
      price: "$30.00",
      actPrice: "99.00",
    },
    {
      imageUrl: productImgThree,
      text: "Jeans for Men and Women",
      price: "$30.00",
      actPrice: "99.00",
    },
    {
      imageUrl: productImgFour,
      text: "Long Coats for Women",
      price: "$30.00",
      actPrice: "99.00",
    },
  ];

  return (
    <div className={styles.products} style={{ marginTop: "200px" }}>
      {" "}
      <h1 style={{ textAlign: "Center" }}>Popular Product</h1>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        {productsData.map((product, index) => (
          <div key={index} style={{ width: "200px", margin: "60px 50px" }}>
            <img
              src={product.imageUrl}
              alt={product.text}
              style={{ width: "100%", height: "auto" }}
            />
            <div
              style={{
                textAlign: "center",
                marginTop: "20px",
                marginLeft: "20px",
                marginRight: "20px",
              }}
            >
              <h3>{product.text}</h3>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  marginTop: "10px",
                }}
              >
                <p style={{ marginRight: "10px" }}>{product.price}</p>
                <p style={{ textDecoration: "line-through" }}>
                  {product.actPrice}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
