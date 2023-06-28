import UserMenu from 'components/UserMenu/UserMenu';
import React from 'react';
import { useSelector } from 'react-redux';
import { getAuthIsLoggedIn } from '../redux/auth/authSelectors';

import { HomeStyle } from 'components/App.styled';
import AuthNav from 'components/authNav';

export default function AppBar() {
  const isLoggedIn = useSelector(getAuthIsLoggedIn);
  return (
    <HomeStyle>
      <header>
        <h1>PhoneBook</h1>
        {isLoggedIn ? <UserMenu /> : <AuthNav />}
      </header>
      <div className="background-home"></div>
    </HomeStyle>
  );
}
