import Home from "./pages/home/Home";
import UserList from "./pages/users/UserList";
import NewUser from "./pages/newUser/NewUser";
import Products from "./pages/Products/Products";
import Product from "./pages/Product/Product";
import Analytics from "./pages/Analytics/Analytics";
let routes = [
  { path: "/", element: <Home /> },
  { path: "/users", element: <UserList /> },
  { path: "/newUsers", element: <NewUser /> },
  { path: "/products", element: <Products /> },
  { path: "/product/:productID", element: <Product /> },
  { path: "/analytics", element: <Analytics /> },
];

export default routes;
