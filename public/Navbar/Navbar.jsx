import NavbarItems from "./NavbarItems";
import styles from "./Navbar.module.css";

function Navbar() {
  return (
    <div className={styles.navbar}>
      <div>
        <NavbarItems />
      </div>
    </div>
  );
}
export default Navbar;
