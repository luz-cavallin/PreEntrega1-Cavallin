import Navbar from "./components/layout/navbar/Navbar";
import ItemsProductsListContainer from "./components/pages/ItemProdutcsList/ItemProductsListContainer";

const App = () => {
  return (
    <div>
      <Navbar />
      <ItemsProductsListContainer greeting={"Bienvenidos"} />
    </div>
  );
};

export default App; // la estoy exportando y en el archivo main la estoy ejecutando
