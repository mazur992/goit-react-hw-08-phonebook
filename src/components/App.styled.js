import styled from 'styled-components';

export const UserMenuStyle = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const HomeStyle = styled.div`
  padding: 20px;
  & header {
    display: flex;
    justify-content: space-between;

    background-color: teal;
  }
  // & .background-home{
// height: 100vh;
    // background-image: url('https://cdn.pixabay.com/photo/2018/01/31/07/36/secret-3120483_1280.jpg');
  //       background-repeat: no-repeat;
  //           background-size: cover;
  // }
}`;
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
