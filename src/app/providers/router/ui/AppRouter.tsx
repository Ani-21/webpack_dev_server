import { Suspense, useMemo } from 'react';
import { Route, Routes } from 'react-router';
import { routeConfig } from 'shared/config/routeConfig/routeConfig';
import 'app/styles/index.scss';
import { PageLoader } from 'widgets/PageLoader';
import { getUserAuthData } from 'entities/user';
import { useSelector } from 'react-redux';

export const AppRouter = () => {
  const isAuth = useSelector(getUserAuthData);

  const routes = useMemo(() => {
    return Object.values(routeConfig).filter((route) => {
      if (!isAuth && route.authOnly) {
        return false;
      }
      return true;
    });
  }, [isAuth]);

  return (
    <Routes>
      {routes.map(({ path, element }) => (
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
};
