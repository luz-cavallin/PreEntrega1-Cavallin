import Layout from "./components/layout/Layout";

import CartContainer from "./components/pages/cart/CartContainer";
import ItemsProductsListContainer from "./components/pages/ItemProdutcsList/ItemProductsListContainer";
import ProductDetailContainer from "./components/pages/productDetail/ProductDetailContainer";

import { BrowserRouter, Routes, Route } from "react-router-dom";
const App = () => {
  return (
    
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<ItemsProductsListContainer />} />

          <Route path="/category/:categoryName" element={<ItemsProductsListContainer />} />

          <Route path="/itemDetail/:id" element={<ProductDetailContainer />} />
          
          <Route path="/carrito" element={<CartContainer />} />
        </Route>

        <Route path="*" element={<h1>404 not found</h1>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App; // la estoy exportando y en el archivo main la estoy ejecutando
{/* <div>
      <Navbar />
      <ItemsProductsListContainer greeting={"Bienvenidos"} />
      <ProductDetailContainer />
    </div> */}
