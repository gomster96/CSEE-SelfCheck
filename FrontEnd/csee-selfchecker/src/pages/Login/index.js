import React, { useState } from 'react';
import styled from 'styled-components';
import logo from '../../asset/img/loginImage.png';
import background from '../../asset/img/backgroundImg.png';
import headerImg from '../../asset/img/csee-logo-symbol.png';
import Googlebutton from './Googlebutton';
import Footer from '../Common/Footer/footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Navbar, Container } from 'react-bootstrap';

export default function Login() {
  const [isUserSelect, setIsUserSelect] = useState('0');
  const handleUserChange = (e) => {
    const value = e.target.value;
    setIsUserSelect(value);
  };
  return (
    <>
      <Navbar bg="light">
        <Container>
          <Navbar.Brand href="/">
            <img alt="" src={headerImg} width="30" height="30" className="d-inline-block align-top" /> 공학프로젝트기획 Self-Checker
          </Navbar.Brand>
        </Container>
      </Navbar>
      <ContainerDiv>
        <LoginFormDiv>
          <LoginFormLeft1></LoginFormLeft1>
          <LoginFormLeft2>
            <LoginFormLeftTitle>
              Computer Science <br></br>And Electrical Engineering
            </LoginFormLeftTitle>
            <LoginFormLeftsubTitle>Welcome to our website</LoginFormLeftsubTitle>
            <LogoImg src={logo} />
          </LoginFormLeft2>
          <LoginFormRight>
            <LoginFormRightTitle style={{ marginTop: '15vh' }}>
              <h1>Log in</h1>
            </LoginFormRightTitle>
            <ItemContainer>
              <Form.Check inline label="학생" type="radio" value="0" checked={isUserSelect === '0'} onChange={handleUserChange} />
              <Form.Check inline label="관리자" type="radio" value="1" checked={isUserSelect === '1'} onChange={handleUserChange} />
            </ItemContainer>
            <GoogleLoginContainer>
              <GoogleLoginClass>
                <Googlebutton isUserSelect={isUserSelect} setIsUserSelect={setIsUserSelect} />
              </GoogleLoginClass>
            </GoogleLoginContainer>
            <LoginFormRightsubTitle>
              <p>학교 구글 계정으로 로그인하세요.</p>
              <br></br>
              <p style={{ fontSize: '10px' }}>시크릿 모드에서 동작하지 않습니다.</p>
            </LoginFormRightsubTitle>
          </LoginFormRight>
        </LoginFormDiv>
      </ContainerDiv>
      <>
        <Footer />
      </>
    </>
  );
}
const calcWidthPercent = (span) => {
  if (!span) return;

  const width = (span / 12) * 100;
  return width;
};
const BREAK_POINT_MOBILE = 768;
const BREAK_POINT_TABLET = 992;
const BREAK_POINT_LAPTOP = 1024;
const BREAK_POINT_PC = 1200;

const ContainerDiv = styled.div`
  width: 100vw;
  height: 90vh;
  background: #eff0f2;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url(${background});

  width: ${({ xs }) => (xs ? `${calcWidthPercent(xs)}%` : `100vw`)};
  @media only screen and (min-width: ${BREAK_POINT_MOBILE}px) {
    width: ${({ sm }) => sm && `${calcWidthPercent(sm)}%`};
  }
  @media only screen and (min-width: ${BREAK_POINT_TABLET}px) {
    width: ${({ md }) => md && `${calcWidthPercent(md)}%`};
  }
  @media only screen and (min-width: ${BREAK_POINT_LAPTOP}px) {
    width: ${({ mdlg }) => mdlg && `${calcWidthPercent(mdlg)}%`};
  }
  @media only screen and (min-width: ${BREAK_POINT_PC}px) {
    width: ${({ lg }) => lg && `${calcWidthPercent(lg)}%`};
  }
`;
const LoginFormDiv = styled.div`
  background: #f5f5f5;
  width: 100vw;
  height: 85vh;
  display: flex;
  flex-direction: row;
  box-shadow: 10px black;
  border-radius: 40px;

  /* 그림자 */
  -webkit-box-shadow: 27px 43px 43px -26px rgba(89, 89, 89, 0.39);
  -moz-box-shadow: 27px 43px 43px -26px rgba(89, 89, 89, 0.39);
  box-shadow: 27px 43px 43px -26px rgba(89, 89, 89, 0.39);

  width: ${({ xs }) => (xs ? `${calcWidthPercent(xs)}%` : `70vw`)};
  @media only screen and (max-width: ${BREAK_POINT_MOBILE}px) {
    width: ${({ sm }) => sm && `${calcWidthPercent(sm)}%`};
  }
  @media only screen and (max-width: ${BREAK_POINT_TABLET}px) {
    width: ${({ md }) => md && `${calcWidthPercent(md)}%`};
  }
  @media only screen and (min-width: ${BREAK_POINT_LAPTOP}px) {
    width: ${({ mdlg }) => mdlg && `${calcWidthPercent(mdlg)}%`};
  }
  @media only screen and (max-width: ${BREAK_POINT_PC}px) {
    width: ${({ lg }) => lg && `${calcWidthPercent(lg)}%`};
  }
`;
const LoginFormLeft1 = styled.div`
  margin: 0.3rem 0.4rem 0.3rem;
  width: 5%;
  border-radius: 35px 0px 0px 35px;
  display: flex;
  background: #2e75b6;
  align-items: center;

  width: ${({ xs }) => (xs ? `${calcWidthPercent(xs)}%` : `5%`)};
  padding: 1%;
  @media only screen and (max-width: ${BREAK_POINT_MOBILE}px) {
    width: ${({ sm }) => sm && `${calcWidthPercent(sm)}%`};
    display: none;
  }
  @media only screen and (max-width: ${BREAK_POINT_TABLET}px) {
    width: ${({ md }) => md && `${calcWidthPercent(md)}%`};
  }
  @media only screen and (min-width: ${BREAK_POINT_LAPTOP}px) {
    width: ${({ mdlg }) => mdlg && `${calcWidthPercent(mdlg)}%`};
  }
  @media only screen and (max-width: ${BREAK_POINT_PC}px) {
    width: ${({ lg }) => lg && `${calcWidthPercent(lg)}%`};
  }
`;
const LoginFormLeft2 = styled.div`
  width: 50%;
  padding: 8% 5% 5% 5%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: left;
  color: #797979;

  width: ${({ xs }) => (xs ? `${calcWidthPercent(xs)}%` : `70vw`)};
  @media only screen and (max-width: ${BREAK_POINT_MOBILE}px) {
    width: ${({ sm }) => sm && `${calcWidthPercent(sm)}%`};
    display: none;
  }
  @media only screen and (max-width: ${BREAK_POINT_TABLET}px) {
    width: ${({ md }) => md && `${calcWidthPercent(md)}%`};
  }
  @media only screen and (min-width: ${BREAK_POINT_LAPTOP}px) {
    width: ${({ mdlg }) => mdlg && `${calcWidthPercent(mdlg)}%`};
  }
  @media only screen and (max-width: ${BREAK_POINT_PC}px) {
    width: ${({ lg }) => lg && `${calcWidthPercent(lg)}%`};
  }
`;
const LoginFormLeftTitle = styled.div`
  font-family: 'RedHatDisplayRegular';
  font-size: 36px;
  src: url(./asset/fonts/RedHatDisplay-Regular.ttf);
`;
const LoginFormLeftsubTitle = styled.div`
  font-family: 'RedHatDisplay';
  src: url(/asset/fonts/RedHatDisplay-LightItalic.ttf);
`;
const LoginFormRight = styled.div`
  width: 80vw;
  border-radius: 0px 40px 40px 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px;

  width: ${({ xs }) => (xs ? `${calcWidthPercent(xs)}%` : `100%`)};
  @media only screen and (min-width: ${BREAK_POINT_MOBILE}px) {
    width: ${({ sm }) => sm && `${calcWidthPercent(sm)}%`};
  }
  @media only screen and (min-width: ${BREAK_POINT_TABLET}px) {
    width: ${({ md }) => md && `${calcWidthPercent(md)}%`};
  }
  @media only screen and (min-width: ${BREAK_POINT_LAPTOP}px) {
    width: ${({ mdlg }) => mdlg && `${calcWidthPercent(mdlg)}%`};
  }
  @media only screen and (min-width: ${BREAK_POINT_PC}px) {
    width: ${({ lg }) => lg && `${calcWidthPercent(lg)}%`};
  }
`;
const LoginFormRightTitle = styled.div`
  display: flex;
  justify-content: center;
`;
const LoginFormRightsubTitle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const GoogleLoginContainer = styled.div`
  padding-top: 90px;
  padding-bottom: 50px;
  width: 300px;
`;
const GoogleLoginClass = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 300px;
  height: 45px;
  margin-top: 5vh;
  border-radius: 2px;
`;
const LogoImg = styled.img`
  padding-top: 5%;
  max-width: 100%;
  height: auto;
`;

const ItemContainer = styled.div`
  display: flex;
  margin: 5vh 20px 10px 0px;
  padding-left: 10%;
`;
