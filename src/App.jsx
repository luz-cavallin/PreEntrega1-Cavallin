import Navbar from "./components/layout/navbar/Navbar";
import { ItemProductsList } from "../src/components/pages/ItemProdutcsList/ItemProductsList";

const App = () => {
  return (
    <div>
      <Navbar />
      <ItemProductsList greeting={"Bienvenidos"} />
    </div>
  );
};

export default App; // la estoy exportando y en el archivo main la estoy ejecutando
