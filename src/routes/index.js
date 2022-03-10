import { Navigate } from "react-router-dom";
import { ROUTE } from "../constants/Routes";
import { Home, Search } from "../views";
const routes = [
  {
    path: ROUTE.BASE,
    element: <Navigate to={ROUTE.HOME} />,
  },
  {
    path: ROUTE.HOME,
    element: <Home />,
  },
  {
    path: ROUTE.SEARCH,
    element: <Search />,
  },
];

export default routes;
