import UserMenu from 'components/UserMenu/UserMenu';
import React from 'react';
import { HomeStyle } from 'components/App.styled';

export default function Home() {
  return (
    <HomeStyle>
      <header>
        <h1>PhoneBook</h1>
        <UserMenu></UserMenu>
      </header>
    </HomeStyle>
  );
}
