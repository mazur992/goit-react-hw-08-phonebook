import React from 'react';
import { StyledLink } from 'components/App.styled';

export default function AuthNav() {
  return (
    <div>
      <StyledLink to="/register">Register</StyledLink>
      <StyledLink to="/login">Login</StyledLink>
    </div>
  );
}
