import styles from "./About.module.css";

const About = () => {
  const aboutData = [
    {
      firstPara:
        "Sugar co. is home to a multitude of leading international and national brands for apparels, fragrances, accessories, cosmetics, footwear, home décor and furnishings catering to the needs of the entire family. We aspire to provide our customers a memorable international shopping experience. We are one of the largest chain of department stores across India.",
      secondPara:
        "“To be an inspirational and trusted brand, transforming customers' lives through fashion and delightful shopping experience every time”",
      thirdPara:
        "We have a team of professional associates who strive endlessly to provide the best shopping experience to each of our customers. We have adopted a new philosophy of to give retail a new dimension and innovation is our key driver to attain excellence in customer service",
    },
  ];

  const whyShopData = [
    {
      whyListHeading: "SIMPLE SHOPPING",
      whyListPara:
        "Whether you shop online or in store or any of the leading third party marketplaces you get the same experience in terms of merchandise, price & service",
    },
    {
      whyListHeading: "SECURE SHOPPING",
      whyListPara:
        "Shopping on our website is 100% safe and secure as we do not store complete details or payment information of your credit/debit card in our system. This is information is directly transmitted securely to the bank for payment processing. However, caution must always be taken by the customer while making transactions on any online venue.",
    },
    {
      whyListHeading: "RANGE OF PRODUCTS AND BRANDS",
      whyListPara:
        "We assort the collection from the best brands, trends, colours, fabrics, patterns to bring you a deep fashion selection wide across Men, Women, Kids, Fashion Accessories, and Home categories.",
    },
    {
      whyListHeading: "FREE RETURNS",
      whyListPara:
        "Whether you shop online or in store or any of the leading third party marketplaces you get the same experience in terms of merchandise, price & service",
    },
    {
      whyListHeading: "100% ORIGINAL",
      whyListPara:
        "We are responsible for what we sell and guarantee the originality of the products. All our products are sourced directly from the brands and carry brand warranty and genuineness certificate.",
    },
    {
      whyListHeading: "FREE ALTERATIONS",
      whyListPara:
        "We offer free alteration at any Store for products purchased on online as well.",
    },
    {
      whyListHeading: "EXPRESS STORE PICK UP",
      whyListPara:
        "We provide the facility of express pick up service at the store. You can shop online and collect your order from the nearest or preferred Shoppers Stop store as per your convenience.",
    },
    {
      whyListHeading: "PERSONALIZED SHOPPING AT STORE",
      whyListPara:
        "We offer personal shopper service with prior appointment at our store. You can avail the assistance of personal shoppers who are experts to guide you to shop in an exclusive lounge at the store.",
    },
    {
      whyListHeading: "PERSONAL SHOPPER SERVICE AT HOME",
      whyListPara:
        "We also provide Personal Shopper At Home service and you can shop from the comforts of your home with prior appointment with assistance from our personal shoppers",
    },
    {
      whyListHeading: "PERSONALIZED SHOPPING GUIDE",
      whyListPara:
        "We provide personalized shopping assistance by following our Style Hub which is curated with latest fashion trends and suggestions.",
    },
  ];

  return (
    <div className={styles.mainAboutClass}>
      <div>
        <h1>About Us</h1>
      </div>
      <div>
        <p>{aboutData[0].firstPara}</p>
        <h3>Our Vision is :-</h3>
        <p>{aboutData[0].secondPara}</p>
        <p>{aboutData[0].thirdPara}</p>
      </div>
      <div className={styles.whyShopClass}>
        <h2>Why Shop With Us</h2>
        <dl>
          {whyShopData.map((item, index) => (
            <div key={index}>
              <dt><h4>• {item.whyListHeading}</h4></dt>
              <dd>{item.whyListPara}</dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
};
export default About;
