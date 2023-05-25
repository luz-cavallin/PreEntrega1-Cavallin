import "./Navbar.css";
import CartWidjet from "../../CartWidget/CartWidjet";

const Navbar = () => {
  return (
    <div className="containerNavbar">
      <h4>Vinoteca Sierras Chicas</h4>
      <ul>
        <li>
          <a href="#" className="boton">
            Todos
          </a>
        </li>
        <li>
          <a href="#" className="boton">
            Malbec
          </a>
        </li>
        <li>
          <a href="#" className="boton">
            Cabernet
          </a>
        </li>
        <li>
          <a href="#" className="boton">
            Syrah
          </a>
        </li>
      </ul>
      <CartWidjet />
    </div>
  );
};

export default Navbar;
