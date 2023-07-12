import { useContext, useEffect, useState } from "react";
import ProductDetail from "./ProductDetail";
import { useParams } from "react-router-dom";
import { CartContext } from "../../../context/CartContext";
import { db } from "../../../config";
import { collection, getDoc, doc } from "firebase/firestore";
import Swal from "sweetalert2";

const ProductDetailContainer = () => {
  const [productSelected, setProductSelect] = useState({});

  const { addToCart, getTotalQuantityById } = useContext(CartContext);

  const { id } = useParams();

  const cantidad = getTotalQuantityById(id);

  const onAdd = (cantidad) => {
    let data = {
      ...productSelected,
      quantity: cantidad,
    };

    addToCart(data);
    Swal.fire({
      position: "center",
      icon: "success",
      title: "Producto agregado al carrito",
      showConfirmButton: true,
      timer: 1500,
    });
  };

  useEffect(() => {
    let itemCollection = collection(db, "item");
    let refDoc = doc(itemCollection, id);
    getDoc(refDoc).then((res) => {
      setProductSelect({ ...res.data(), id: res.id });
    });
  }, [id]);

  return (
    <div>
      {productSelected.id ? (
        <ProductDetail
          cantidad={cantidad}
          productSelected={productSelected}
          addToCart={addToCart}
          onAdd={onAdd}
        />
      ) : (
        <h1>Cargando...</h1>
      )}
    </div>
  );
};

export default ProductDetailContainer;
