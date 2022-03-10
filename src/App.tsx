import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import routes from "./routes";
import { RouteType } from "./types/router";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        {routes.map((route: RouteType, index: number) => (
          <Route key={index} path={route.path} element={route.element} />
        ))}
      </Routes>
    </BrowserRouter>
  );
};

export default App;
