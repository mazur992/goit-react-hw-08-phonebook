import { createSelector } from '@reduxjs/toolkit';

export const getAuthIsLoggedIn = state => state.auth.isLoggedIn;
export const getAuthToken = state => state.auth.token;
