import { Navigate } from "react-router-dom";
import { ROUTE } from "../constants/Routes";
import { Home, Search, Skill, Job } from "../views";
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
  {
    path: ROUTE.JOB,
    element: <Job />,
  },
  {
    path: ROUTE.SKILL,
    element: <Skill />,
  },
];

export default routes;
