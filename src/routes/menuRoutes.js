import CartContainer from "../components/pages/cart/CartContainer";
import CheckoutContainer from "../components/pages/checkout/CheckoutContainer";
import FormFormik from "../components/pages/formFormik/FormFormik";
import Form from "../components/pages/Form/Form";
import ItemProductsListContainer from "../components/pages/ItemProdutcsList/ItemProductsListContainer";
import ProductDetailContainer from "../components/pages/productDetail/ProductDetailContainer";

export const menuRoutes = [
  {
    id: "home",
    path: "/",
    Element: ItemProductsListContainer,
  },
  {
    id: "categories",
    path: "/category/:categoryName",
    Element: ItemProductsListContainer,
  },
  {
    id: "itemDetail",
    path: "/itemDetail/:id",
    Element: ProductDetailContainer,
  },
  {
    id: "carrito",
    path: "/carrito",
    Element: CartContainer,
  },
  {
    id: "form",
    path: "/form",
    Element: Form,
  },
  {
    id: "formik",
    path: "/formik",
    Element: FormFormik,
  },
  {
    id: "checkout",
    path: "/checkout",
    Element: CheckoutContainer,
  },
];
