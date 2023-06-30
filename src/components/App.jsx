import { Route, Routes } from 'react-router-dom';

import { lazy, Suspense, useEffect } from 'react';
import operations from 'redux/auth/operations';
import { useDispatch } from 'react-redux';
import AppBar from './AppBar';
import PrivateRoute from './PrivateRoute';
import RestrictedRoute from './RestrictedRoute';
import { AppContainer } from './App.styled';

const Home = lazy(() => import('../pages/Home/Home'));
const Register = lazy(() => import('../pages/Register/Register'));
const Login = lazy(() => import('../pages/Login/Login'));
const Contacts = lazy(() => import('../pages/Contacts/Contacts'));

export function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(operations.fetchCurrentUser());
  });
  return (
    <AppContainer>
      <header>
        <AppBar></AppBar>
      </header>
      <main>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route
              path="/register"
              element={
                <RestrictedRoute component={Register} redirectTo="/login" />
              }
            />
            <Route
              path="/login"
              element={
                <RestrictedRoute component={Login} redirectTo="/contacts" />
              }
            />
            <Route
              path="/contacts"
              element={
                <PrivateRoute component={Contacts} redirectTo="/login" />
              }
            />
            <Route path="*" element={<Home />} />
          </Routes>
        </Suspense>
      </main>
    </AppContainer>
  );
}
