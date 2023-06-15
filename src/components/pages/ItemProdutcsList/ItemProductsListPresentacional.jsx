import ProductCard from "../../common/productCard/ProductCard";
import "./ItemProductsList.css";

const ItemProductsListPresentacional = ({ items }) => {
  // [{}, {}, {}]
  return (
    <div className="cards-container">
      {items.map((elemento) => {
        return <ProductCard key={elemento.id} elemento={elemento} />;
      })}
    </div>
  );
};

export default ItemProductsListPresentacional;
