import logoImg from "../../src/assets/logo.png";
import logoText from "../../src/assets/sugarCo.png";
import styles from "./NavbarItems.module.css";
import NavbarBtn from "./NavbarBtn";
import NavbarLinks from "./NavbarLinks";
import NavbarLogo from "./NavbarLogo";
import HamburgerMenu from "./HamburgerMenu";

const navbarItems = () => {
  const navData = [
    {
      id: "1",
      logo: logoImg,
      imgAlt: "Image",
      logoText: logoText,
      navLinks: ["Home", "Shop", "Blog", "Contact", "About Us"],
      navHref: ["/", "/shop", "/blog", "/contact", "/about"],
      btnText: "Sign In",
    },
  ];

  return (
    <div className={styles.navItemsClass}>
      {navData.map((items) => (
        <div key={items.id} className={styles.insideNav}>
          <NavbarLogo
            navLogo={items.logo}
            navAlt={items.imgAlt}
            navlogoText={items.logoText}
          />
          <NavbarLinks navLinks={items.navLinks} navHref={items.navHref} />
          <NavbarBtn navBtnText={items.btnText} />
        </div>
      ))}
      <div className={styles.hamburgerClass}>
        <HamburgerMenu />
      </div>
    </div>
  );
};

export default navbarItems;
