import { Badge } from "@mui/material";
import { BsFillCartCheckFill } from "react-icons/bs";
import styles from "./Navbar.module.css";

import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className={styles.containerNavbar}>
        <Link to="/">Vinoteca Sierras Chicas</Link>
        <ul className={styles.categories}>
          <Link to="/">Limpiar filtros</Link>
          <Link to="/category/Malbec">Malbec</Link>
          <Link to="/category/Syrah">Syrah</Link>
        </ul>

        <Link to="/carrito">
          <Badge badgeContent={4} color="primary">
            <BsFillCartCheckFill size="30px" />
          </Badge>
        </Link>
      </div>
    </>
  );
};

export default Navbar;
