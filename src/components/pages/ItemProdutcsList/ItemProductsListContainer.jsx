import { useEffect, useState } from "react";
import { useParams } from "react-router";
import ItemProductsListPresentacional from "./ItemProductsListPresentacional";
import { db } from "../../../config";
import { collection, getDocs, query, where } from "firebase/firestore";
import { ScaleLoader } from "react-spinners";

const ItemProductsListContainer = () => {
  const [items, setItems] = useState([]);

  const { categoryName } = useParams();

  useEffect(() => {
    let itemCollection = collection(db, "item");
    let consulta;

    if (categoryName) {
      // los filtrados
      consulta = query(itemCollection, where("category", "==", categoryName));
    } else {
      // todos
      consulta = itemCollection;
    }

    getDocs(consulta)
      .then((res) => {
        let products = res.docs.map((elemento) => {
          return {
            ...elemento.data(),
            id: elemento.id,
          };
        });
        setItems(products);
      })
      .catch((err) => console.log(err));
  }, [categoryName]);

  if (items.length === 0) {
    return (
      <div
        style={{
          width: "100%",
          height: "90vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <ScaleLoader color="steelblue" width={40} height={111} />
      </div>
    );
  }

  return <ItemProductsListPresentacional items={items} />;
};

export default ItemProductsListContainer;
