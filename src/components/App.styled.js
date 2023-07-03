import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const AppContainer = styled.div`
  height: 100vh;
  padding: 5px;

  display: flex;
  flex-direction: column;
`;
export const UserMenuStyle = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  & button:hover {
    transform: scale(1.1);
  }
`;
export const HomePage = styled.div`
  height: calc(90vh);

  margin-top: auto;
  background-image: url('https://cdn.pixabay.com/photo/2018/01/31/07/36/secret-3120483_1280.jpg');
  background-repeat: no-repeat;
  background-size: cover;

  & .containerTitle {
    transform: translateY(30vh);
    justify-content: center;
    display: flex;
    gap: 20px;
  }
  & h1 {
    font-size: 32px;

    color: white;
    color: rgba(255, 255, 255, 0.5);
    @media screen and (min-width: 768px) {
      font-size: 90px;
    }
    @media screen and (min-width: 1200px) {
      font-size: 170px;
    }
  }
  & span {
    font-size: 32px;
    color: white;

    color: rgba(255, 255, 255, 0.5);
    @media screen and (min-width: 768px) {
      font-size: 90px;
    }
    @media screen and (min-width: 1200px) {
      font-size: 170px;
    }
  }
`;
export const HomeStyle = styled.div`
  & header {
    display: flex;
    justify-content: space-between;
  }
`;
export const ContainerRegisterForm = styled.div`
  display: flex;
  justify-content: center;
  & label {
    margin-bottom: 10px;
  }
  & Form {
    width: 300px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  & Input {
    width: 300px;
    height: 35px;
    border: 1px solid #ccc;
    background-color: #fff;
    border-radius: 5px;
  }
  & button {
    width: 300px;
    height: 35px;
    margin-bottom: 10px;

    background-color: #5995ef;
    color: #fff;
    border-radius: 10px;
  }
`;
export const ContainerLoginForm = styled.div`
  display: flex;
  justify-content: center;
  & label {
    margin-bottom: 10px;
  }
  & Form {
    width: 300px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  & Input {
    width: 300px;
    height: 35px;
    border: 1px solid #ccc;
    background-color: #fff;
    border-radius: 5px;
  }
  & button {
    width: 300px;
    height: 35px;
    margin-bottom: 10px;

    background-color: #5995ef;
    color: #fff;
    border-radius: 10px;
  }
`;
export const ContactFormStyle = styled.div`
  & .formLabel {
    display: block;
    margin-bottom: 10px;
    font-weight: 600;
  }
  & .formInput {
    display: block;
    margin-top: 5px;
    width: 200px;
    height: 25px;
    border-color: cadetblue;
    border-radius: 5px;
  }
  & .formBtn {
    height: 25px;
    width: 100px;
    margin-bottom: 20px;
    border: none;
    border-radius: 5px;
    background-color: dodgerblue;
    transition: background-color 250ms linear, color 250ms linear;
    cursor: pointer;
  }
  & .formBtn:hover {
    background-color: blue;
    color: #fff;
  }
`;
export const ContactListStyle = styled.div`
  & .contactItem {
    font-size: 15px;
    text-align: end;
  }
  & .contactBtn {
    height: 25px;
    width: 60px;
    margin-bottom: 20px;
    margin-left: 20px;
    border: none;
    border-radius: 5px;
    background-color: dodgerblue;
    transition: background-color 250ms linear, color 250ms linear;
    cursor: pointer;
  }
  & .contactBtn:hover {
    background-color: blue;
    color: #fff;
  }
`;
export const FilterStyle = styled.div`
  & .filtrTitle {
    display: block;
    margin-bottom: 10px;
    font-weight: 600;
  }
  & .filterInput {
    display: block;
    margin-top: 5px;
    width: 200px;
    height: 25px;
    border-color: cadetblue;
    border-radius: 5px;
  }
`;
export const ContactsStyle = styled.div`
  & .contactsContainer {
    background-color: #fff;
    border-radius: 20px;
    height: 50vh;
    overflow: scroll;
    @media screen and (min-width: 768px) {
      display: flex;
      gap: 150px;
      padding: 30px;
    }
  }
  & .contactsContainer::-webkit-scrollbar {
    width: 0;
  }
  & .title {
    margin-bottom: 20px;
  }
  & .subtitle {
    margin-bottom: 15px;
  }
`;
export const StyledLink = styled(NavLink)`
  display: inline-block;
  margin-right: 15px;
  margin-bottom: 5px;
  color: black;
  font-weight: 700;
  font-size: 18px;

  &.active {
    color: tomato;
  }
`;
