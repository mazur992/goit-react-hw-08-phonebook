import { Route, Routes } from 'react-router-dom';

import Register from '../pages/Register/Register';
import Login from '../pages/Login/Login';
import Contacts from '../pages/Contacts/Contacts';
import AppBar from './AppBar';

export function App() {
  return (
    <>
      <AppBar></AppBar>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/contacts" element={<Contacts />} />
        {/* <Route path="*" element={<Login />} /> */}
      </Routes>
    </>
  );
}
