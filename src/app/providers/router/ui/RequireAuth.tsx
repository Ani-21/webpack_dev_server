import { getUserAuthData } from 'entities/user';
import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';

const RequireAuth = ({ children }: { children: JSX.Element }) => {
  const auth = useSelector(getUserAuthData);
  const location = useLocation();

  console.log(auth);

  if (!auth) {
    return <Navigate to={RoutePath.main} replace state={{ from: location }} />;
  }

  return children;
};

export default RequireAuth;
