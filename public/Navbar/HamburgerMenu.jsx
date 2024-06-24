import { useState } from "react";
import PropTypes from "prop-types";
import { stack as Menu } from "react-burger-menu";
import menuStyles from "./HamburgerMenu.module.css";


function HamburgerMenu({ menuClass = "menu" }) {
  const [isOpen, setIsOpen] = useState(false);

  const styles = {
    bmBurgerButton: {
      position: "fixed",
      width: "36px",
      height: "30px",
      right: 16,
      top: 16,
    },
    bmBurgerBars: {
      background: "#373a47",
    },
    bmBurgerBarsHover: {
      background: "#a90000",
    },
    bmCrossButton: {
      height: "24px",
      width: "24px",
    },
    bmCross: {
      background: "#fff",
    },
    bmMenuWrap: {
      position: "fixed",
      height: "100%",
    },
    bmMenu: {
      background: "#373a47",
      padding: "2.5em 1.5em 0",
      fontSize: "1.15em",
      border: "none",
    },
    bmMorphShape: {
      fill: "#373a47",
    },
    bmItemList: {
      color: "#b8b7ad",
      padding: "0.8em",
    },
    bmOverlay: {
      background: "rgba(0, 0, 0, 0.3)",
    },
  };

  return (
    <div className={menuStyles.menuClass}>
      <Menu
        right
        styles={styles}
        className={menuClass}
        isOpen={isOpen}
        onStateChange={(state) => setIsOpen(state.isOpen)}
      >
        <a id="home" className="menu-item" href="/">
          Home
        </a>
        <a id="about" className="menu-item" href="/about">
          About
        </a>
        <a id="contact" className="menu-item" href="/contact">
          Contact
        </a>
        <a id="services" className="menu-item" href="/services">
          Services
        </a>
      </Menu>
    </div>
  );
}

HamburgerMenu.propTypes = {
  menuClass: PropTypes.string,
};

export default HamburgerMenu;
