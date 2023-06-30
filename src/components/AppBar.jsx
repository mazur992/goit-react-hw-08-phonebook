import UserMenu from 'components/UserMenu/UserMenu';
import React from 'react';
import { useSelector } from 'react-redux';
import { getAuthIsLoggedIn } from '../redux/auth/authSelectors';
import { Link } from 'react-router-dom';

import { HomeStyle } from 'components/App.styled';
import AuthNav from 'components/authNav';

export default function AppBar() {
  const isLoggedIn = useSelector(getAuthIsLoggedIn);
  return (
    <HomeStyle>
      <header>
        <Link to="/home">
          <h1>PhoneBook</h1>
        </Link>

        {isLoggedIn ? <UserMenu /> : <AuthNav />}
      </header>
      <div className="background-home"></div>
    </HomeStyle>
  );
}
