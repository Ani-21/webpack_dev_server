import { Suspense } from "react";
import { Route, Routes } from "react-router";
import { routeConfig } from "shared/config/routeConfig/routeConfig";
import "app/styles/index.scss";

export const AppRouter = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        {Object.values(routeConfig).map(({ path, element }) => (
          <Route
            key={path}
            path={path}
            element={<div className="page-wrapper">element</div>}
          />
        ))}
      </Routes>
    </Suspense>
  );
};
