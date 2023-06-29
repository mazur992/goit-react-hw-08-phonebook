import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { getAuthIsLoggedIn } from 'redux/auth/authSelectors';

export default function RestrictedRoute({
  component: Component,
  redirectTo = '/login',
}) {
  const isLoggedIn = useSelector(getAuthIsLoggedIn);
  return isLoggedIn ? <Navigate to={redirectTo} /> : <Component />;
}
