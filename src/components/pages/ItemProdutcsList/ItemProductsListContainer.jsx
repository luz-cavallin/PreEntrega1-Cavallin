import { useEffect, useState } from "react";
import ItemProductsListPresentacional from "./ItemProductsListPresentacional";
import { products } from "../../../productsMock";
const ProductsListContainer = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const tarea = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(products); //resolve ese arreglo de productos
      }, 1000);
      // reject( "la promesa salio mal ")
    });

    tarea
      .then((respuesta) => setItems(respuesta))
      .catch((rechazo) => {
        console.log(rechazo);
      });

    // ASYNC - AWAIT
    // const getData = async () => {
    //   try {
    //     let res = await tarea;
    //     setFrase(res);
    //   } catch (error) {
    //     console.log(error)
    //   }
    // };

    // getData();
  }, []);

  return <ItemProductsListPresentacional items={items} />; //le paso el estado items al presentacional, lo que tiene adentro es el estado items
};

export default ProductsListContainer;
