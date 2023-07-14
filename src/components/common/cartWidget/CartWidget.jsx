import { Badge } from "@mui/material";
import { BsFillCartCheckFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../../context/CartContext";

const CartWidget = () => {
  const { getTotalItems } = useContext(CartContext);
  const totalItems = getTotalItems();

  return (
    <div>
      <Link to="/carrito">
        <Badge badgeContent={totalItems} showZero color="secondary"></Badge>
        <BsFillCartCheckFill size="30px" />
      </Link>
    </div>
  );
};

export default CartWidget;
