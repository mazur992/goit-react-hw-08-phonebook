import React from 'react';
import { HomePage } from 'components/App.styled';

export default function Home() {
  return (
    <HomePage>
      <div className="containerTitle">
        <h1>Phone</h1>
        <span className="animate__animated animate__bounceInRight">Book</span>
      </div>
    </HomePage>
  );
}
