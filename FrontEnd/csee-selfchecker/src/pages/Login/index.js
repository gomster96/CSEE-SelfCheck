import React from 'react';
//import ReactDOM from 'react-dom';
import styled from 'styled-components';
import logo from './asset/img/loginImage.png';
import background from './asset/img/backgroundImg.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Form } from 'react-bootstrap';
//import GlobalFonts from './asset/fonts/font';
import GoogleLogin from 'react-google-login';
const clientId = '783610138228-anpgvtcc326gk47gpiuospu35mvgcckl.apps.googleusercontent.com';

/*
ReactDOM.render(
  <React.StrictMode>
    <GlobalFonts />
  </React.StrictMode>,
  document.getElementById('root')
);
*/
//메인 컨테이너
const ContainerDiv = styled.div`
  width: 100vw;
  height: 100vh;
  background: #eff0f2;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url(${background});
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
`;
const LoginFormLeft1 = styled.div`
  margin: 0.3rem 0.4rem 0.3rem;
  width: 5%;
  border-radius: 35px 0px 0px 35px;
  display: flex;
  background: #2e75b6;
  align-items: center;
  color: #2e75b6;
`;
const LoginFormLeft2 = styled.div`
  width: 50%;
  padding: 20px 40px 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: left;
  color: #797979;
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
  width: 50%;
  border-radius: 0px 40px 40px 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px;
`;
const LoginFormRightTitle = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 100px;
`;
const LoginFormRightsubTitle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const GoogleLoginContainer = styled.div`
  padding-top: 120px;
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

//체크박스

//구글 로그인
export default function GoogleLoginBtn({ onGoogleLogin }) {
  const onSuccess = async (response) => {
    const {
      googleId,
      profileObj: { email, name },
    } = response;

    await onGoogleLogin();
    // 구글 로그인 성공시 서버에 전달할 데이터
  };

  const onFailure = (error) => {
    console.log(error);
  };

  return (
    <ContainerDiv>
      <LoginFormDiv>
        <LoginFormLeft1>HGU</LoginFormLeft1>
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
          <Form>
            <Form.Group controlId="Checkbox">
              <Form.Check type="checkbox" label="학생" />
              <Form.Check type="checkbox" label="관리자" />
            </Form.Group>
          </Form>

          <GoogleLoginContainer>
            <LoginFormRightsubTitle>
              <p>학교 구글 계정으로 로그인하세요.</p>
            </LoginFormRightsubTitle>
            <GoogleLoginClass>
              <GoogleLogin clientId={clientId} responseType={'id_token'} onSuccess={onSuccess} onFailure={onFailure} />
            </GoogleLoginClass>
          </GoogleLoginContainer>
        </LoginFormRight>
      </LoginFormDiv>
    </ContainerDiv>
  );
}
