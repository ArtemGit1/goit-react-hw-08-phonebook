import React from 'react';
import { HOME_ROUTE } from 'constants/route';
import { useSelector } from 'react-redux';
import {authSelectors} from 'redux/auth';
import { Navigate } from 'react-router-dom';

const RestrictedRoute = ({ children, redirectTo =  HOME_ROUTE  }) => {
  const authenticated = useSelector(authSelectors.selectUserIsLoggedIn);
  return authenticated ? <Navigate to={redirectTo} replace /> : children;
};

export default RestrictedRoute;
