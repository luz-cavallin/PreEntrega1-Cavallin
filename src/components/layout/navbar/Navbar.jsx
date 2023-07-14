import styles from "./Navbar.module.css";

import { Link } from "react-router-dom";
import { menuNavigate } from "../../../routes/menuNavigate";
import CartWidget from "../../common/cartWidget/CartWidget";

const Navbar = () => {
  return (
    <>
      <div className={styles.containerNavbar}>
        <Link to="/">Vinoteca Sierras Chicas</Link>
        <ul className={styles.categories}>
          {menuNavigate.map(({ id, path, title }) => (
            <Link key={id} to={path}>
              {title}
            </Link>
          ))}
        </ul>
        <CartWidget />
      </div>
    </>
  );
};

export default Navbar;
