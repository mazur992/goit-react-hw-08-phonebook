import React from 'react';
import { UserMenuStyle } from 'components/App.styled';
import { useSelector } from 'react-redux';
import { getName } from 'redux/auth/authSelectors';
import { useDispatch } from 'react-redux';
import operations from 'redux/auth/operations';

export default function UserMenu() {
  const dispatch = useDispatch();
  const userName = useSelector(getName);
  return (
    <UserMenuStyle>
      <p>
        Hello <b>{userName}</b>!
      </p>
      <button onClick={() => dispatch(operations.logOut())}>Logout</button>
    </UserMenuStyle>
  );
}
