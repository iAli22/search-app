import { ReactNode } from "react";

export type RouteType = {
  path: PathRouteProps | LayoutRouteProps | IndexRouteProps;
  element: ReactNode;
};
