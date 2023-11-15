import styled from "styled-components";
import Button from 'react-bootstrap/Button';

const Container = styled.div`
  display: flex;
  flex-direction: column; 
  margin: 0 auto;
  width: 100%;
  min-width: 950px;
`;

const Logo = styled.div`
  display: flex;
  width: 20%; 
  margin: 10vh auto;
  align-items: center;
  position: relative;
  right: 3vh;
  img {
    width: 300px;
  }
`;

const Message = styled.div`
  width: 50%;
  margin: 0 auto 100px;
  h2 {
    font-size: 20px;
    font-weight: 600;
  }
  span {
    letter-spacing: 1.1px;  
    font-weight: 500;
    color: #202020;
    letter-spacing: 1.2px;
  }
`;

const Terms = styled.div`
  display: flex;
  margin: 0 auto;
  width: 50%;
  align-items: center;
  font-weight: 600;

  img {
    width: 20px;
    height: 20px;
    margin-right: 10px;
  }
`;

const MainContents = styled.div``;

const Title = styled.div`
    width: 20%;

    h3 {
        font-weight: 600;
        display: flex;
        font-size: 18px;
        margin-left: 30px;
        margin-bottom: 0;
        letter-spacing: 1px;
      } 
`;

const VerticalBar = styled.div`
  border-left: 1px solid gray;
  margin-left: 10px;
  width: 20px; 
  height: 70px;
`;

const Box1 = styled.div`
  display: flex;
  border-top: 1px solid black;
  width: 55%;
  height: 70px;
  margin: 40px auto 0;
  align-items: center;

  span {
    font-weight: 600;
    color: #666666;
    letter-spacing: 1.2px;
  }
`;

const Box2 = styled.div`
  display: flex;
  border-top: 1px solid black;
  border-bottom: 1px solid black;
  width: 55%;
  height: 70px;
  margin: 0 auto;
  align-items: center;

  span {
    font-weight: 600;
    color: #666666;
    letter-spacing: 1.2px;
  }
`;

const LowerContainer = styled.div`
  display: flex;
  width: 50%;
  margin: 50px auto;
  align-items: center;

  .check {
    width: 15px;
    height: 15px;
    border-radius: 100px;
    margin-right: 10px;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 50px auto;
  width: 40%;
`;

const Buttons = styled(Button)`
  margin-right: 20px;
  margin-left: 20px;
`;

const WithdrawPageStyles = {
  Container,
  Logo,
  Message,
  Terms,
  MainContents,
  Title,
  VerticalBar,
  Box1,
  Box2,
  LowerContainer,
  ButtonContainer,
  Buttons
};

export default WithdrawPageStyles;
