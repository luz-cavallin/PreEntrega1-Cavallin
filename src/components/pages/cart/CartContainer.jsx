import { useContext } from "react";
import { CartContext } from "../../../context/CartContext";
import Swal from "sweetalert2";
import Cart from "./Cart";

const CartContainer = () => {
  const { cart, clearCart, removeById, getTotalPrice } =
    useContext(CartContext);

  let total = getTotalPrice();

  const limpiar = () => {
    Swal.fire({
      title: "Vaciar carrito?",
      showDenyButton: true,
      showCancelButton: false,
      confirmButtonText: "Si :(",
      denyButtonText: `No :)`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        clearCart();
        Swal.fire("Carrito limpio", "", "success");
      } else if (result.isDenied) {
        Swal.fire("El carrito queda como estaba", "", "info");
      }
    });
  };

  return (
    <div>
      <Cart
        total={total}
        limpiar={limpiar}
        cart={cart}
        removeById={removeById}
      />
    </div>
  );
};

export default CartContainer;
