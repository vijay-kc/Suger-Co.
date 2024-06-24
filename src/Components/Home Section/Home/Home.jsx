import styles from "./Home.module.css";
import homeImage from "../../../assets/homeImage.png";
import HomeLeft from "./HomeLeft";
import HomeRight from "./HomeRight";

const Home = () => {
  const homeData = [
    {
      id: 1,
      buttonText: "Exclusive Style",
      homeHeading: "Unlock Your Style",
      homePara: "WITH ALL THE BIGGEST BRANDS OF THE FASHION",
      homeViewsText: "View Collection",
      homeRightImage: homeImage,
    },
  ];

  return (
    <div className={styles.homeMainClass}>
      {homeData.map((items, index) => (
        <div key={index} className={styles.homeClass}>
          <div>
            <HomeLeft
              homeLeftBtnTopText={items.buttonText}
              homeLeftHeading={items.homeHeading}
              homeLeftPara={items.homePara}
              homeLeftViewsText={items.homeViewsText}
            />
          </div>
          <div>
            <HomeRight homeLeftRightImage={items.homeRightImage} />
          </div>
        </div>
      ))}
    </div>
  );
};
export default Home;
