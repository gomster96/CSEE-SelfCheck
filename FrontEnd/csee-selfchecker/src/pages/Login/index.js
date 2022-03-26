import React from 'react';
import styled from 'styled-components';
import logo from '../../asset/img/loginImage.png';
import background from '../../asset/img/backgroundImg.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import Googlebutton from './Googlebutton';

export default function Login() {
  return (
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
          <LoginFormRightTitle>
            <h1>Log in</h1>
          </LoginFormRightTitle>
          <GoogleLoginContainer>
            <GoogleLoginClass>
              <Googlebutton />
            </GoogleLoginClass>
          </GoogleLoginContainer>
          <LoginFormRightsubTitle>
            <p>학교 구글 계정으로 로그인하세요.</p>
          </LoginFormRightsubTitle>
        </LoginFormRight>
      </LoginFormDiv>
    </ContainerDiv>
  );
}
const calcWidthPercent = (span) => {
  if (!span) return;

  const width = (span / 12) * 100;
  return width;
};

const BREAK_POINT_MOBILE = 768;
const BREAK_POINT_TABLET = 992;
const BREAK_POINT_PC = 1200;

const ContainerDiv = styled.div`
  width: 100vw;
  height: 100vh;
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
  @media only screen and (min-width: ${BREAK_POINT_PC}px) {
    width: ${({ lg }) => lg && `${calcWidthPercent(lg)}%`};
  }
`;
const LoginFormDiv = styled.div`
  background: #f5f5f5;
  width: 1050px;
  height: 700px;
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
  @media only screen and (min-width: ${BREAK_POINT_PC}px) {
    width: ${({ lg }) => lg && `${calcWidthPercent(lg)}%`};
  }
`;
const LoginFormRightTitle = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 100px;
  padding-bottom: 10px;
`;
const LoginFormRightsubTitle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Item = styled.div`
  display: flex;
  align-items: center;
  height: 48px;
  position: relative;
  margin-bottom: 10px;
`;

const RadioButtonLabel = styled.label`
  position: absolute;
  top: 25%;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background: white;
  border: 1px solid #ccc;
`;
const RadioButton = styled.input`
  opacity: 0;
  z-index: 1;
  cursor: pointer;
  width: 25px;
  height: 25px;
  margin-right: 5px;
  &:hover ~ ${RadioButtonLabel} {
    background: #ccc;
    &::after {
      font-family: '';
      display: absolute;
      color: white;
      width: 8px;
      height: 8px;
      margin: 2px;
    }
  }
  &:checked + ${Item} {
    background: #2e75b6;
    border: 2px solid #2e75b6;
  }
  &:checked + ${RadioButtonLabel} {
    background: #2e75b6;
    border: 1px solid #2e75b6;
    &::after {
      font-family: '';
      display: block;
      color: white;
      width: 8px;
      height: 8px;
      margin: 2px;
    }
  }
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
  margin-top: 20px;
  border-radius: 2px;
`;
const LogoImg = styled.img`
  padding-top: 5%;
  max-width: 100%;
  height: auto;
`;
