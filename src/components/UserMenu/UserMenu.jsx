import React from 'react';
import { UserMenuStyle } from 'components/App.styled';
import { useSelector } from 'react-redux';
import { getName } from 'redux/auth/authSelectors';
import { useDispatch } from 'react-redux';
import operations from 'redux/auth/operations';
import BackgroundImageLogOut from './logout.svg';
import BackgroundImageAvatar from './icon.svg';

const styles = {
  button: {
    backgroundImage: `url(${BackgroundImageLogOut})`,
    backgroundPosition: 'center center',
    backgroundSize: 'cover',
    display: 'inline-block',
    width: '24px',
    height: '24px',
    border: '0',
    cursor: 'pointer',
    backgroundColor: '#fff',
    outline: 'none',
    transition: 'transform 250ms ease',
  },
  avatarMenu: {
    backgroundImage: `url(${BackgroundImageAvatar})`,
    backgroundPosition: 'center center',
    backgroundSize: 'cover',
    width: '32px',
    height: '32px',
    backgroundColor: '#fff',
  },
};

export default function UserMenu() {
  const dispatch = useDispatch();
  const userName = useSelector(getName);
  return (
    <UserMenuStyle>
      <div style={styles.avatarMenu}></div>
      <p>
        Hello <b>{userName}</b>!
      </p>
      <button
        style={styles.button}
        type="button"
        className="buttonMenu"
        onClick={() => dispatch(operations.logOut())}
      ></button>
    </UserMenuStyle>
  );
}
