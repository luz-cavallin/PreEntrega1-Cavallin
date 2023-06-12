import ProductCard from "../../common/productCard/ProductCard";
import "./ItemProductsList.css";

const ItemProductsListPresentacional = ({ items, greeting }) => {
  // [{}, {}, {}]
  return (
    <>
      <div className="cards-container"> 
        {items.map((elemento) => {
          return <ProductCard key={elemento.id} elemento={elemento} />;
        })}
      </div>
      <div>
        <>
          <h1 className="saludo">{greeting}</h1>
        </>
      </div>
    </>
  );
};

export default ItemProductsListPresentacional;
