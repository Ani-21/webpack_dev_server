import { Suspense } from 'react';
import { Route, Routes } from 'react-router';
import { routeConfig } from 'shared/config/routeConfig/routeConfig';
import 'app/styles/index.scss';
import { PageLoader } from 'widgets/PageLoader';

export const AppRouter = () => (
  <Routes>
    {Object.values(routeConfig).map(({ path, element }) => (
      <Route
        key={path}
        path={path}
        element={
          <Suspense fallback={<PageLoader />}>
            <div className="page-wrapper">{element}</div>
          </Suspense>
        }
      />
    ))}
  </Routes>
);
