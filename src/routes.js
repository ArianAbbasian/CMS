import Home from "./pages/home/Home";
import UserList from "./pages/users/UserList";
import NewUser from "./pages/newUser/NewUser";
import Products from "./pages/Products/Products";
import Product from "./pages/Product/Product";
import Analytics from "./pages/Analytics/Analytics";
import NewProduct from "./pages/newProduct/NewProduct"
let routes = [
  { path: "/", element: <Home /> },
  { path: "/analytics", element: <Analytics /> },
  { path: "/users", element: <UserList /> },
  { path: "/newUsers", element: <NewUser /> },
  { path: "/products", element: <Products /> },
  { path: "/product/:productID", element: <Product /> },
  { path: "/newProduct", element: <NewProduct /> },
];

export default routes;
