import React from 'react';
import { useSelector } from 'react-redux';
import { getAuthIsLoggedIn } from '../redux/auth/authSelectors';
import { NavLink } from 'react-router-dom';

import UserMenu from 'components/UserMenu/UserMenu';
import AuthNav from 'components/authNav';

import { HomeStyle } from 'components/App.styled';

const styles = {
  link: {
    display: 'inline-block',
    textDecoration: 'none',
    padding: 12,
    fontWeight: 700,
    color: '#2A363B',
  },
};

export default function AppBar() {
  const isLoggedIn = useSelector(getAuthIsLoggedIn);
  return (
    <HomeStyle>
      <header>
        <div>
          <NavLink to="/home" style={styles.link}>
            Home
          </NavLink>
          <NavLink to="/contacts" style={styles.link}>
            Contacts
          </NavLink>
        </div>

        {isLoggedIn ? <UserMenu /> : <AuthNav />}
      </header>
    </HomeStyle>
  );
}
