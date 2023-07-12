import { addDoc, collection } from "@firebase/firestore";
import { products } from "./productsMock";
import { db } from "./config";

const AgregarDocs = () => {
  const rellenar = () => {
    let itemsCollections = collection(db, "item");

    products.forEach((elemento) => {
      addDoc(itemsCollections, elemento);
    });
  };

  return (
    <div>
      <button onClick={rellenar}>Rellenar mi coleccion </button>
    </div>
  );
};

export default AgregarDocs;
