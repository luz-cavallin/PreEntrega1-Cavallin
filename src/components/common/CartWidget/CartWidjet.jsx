import { Badge } from "@mui/material";
import { BsFillCartCheckFill } from "react-icons/bs";

const CartWidjet = () => {
  return (
    <div>
      <Badge badgeContent={4} color="primary">
        <BsFillCartCheckFill color="steelblue" size="30px" />
      </Badge>
    </div>
  );
};

export default CartWidjet;
