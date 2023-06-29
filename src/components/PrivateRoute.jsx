import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { getAuthIsLoggedIn } from 'redux/auth/authSelectors';

export default function PrivateRoute({
  component: Component,
  redirectTo = '/login',
}) {
  const isLoggedIn = useSelector(getAuthIsLoggedIn);
  return isLoggedIn ? <Component /> : <Navigate to={redirectTo} />;
}
