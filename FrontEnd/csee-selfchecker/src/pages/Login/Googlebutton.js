import React from 'react';
import { GoogleLogin } from 'react-google-login';
import { Route } from 'react-router-dom';
import Register from '../Register';
import styled from 'styled-components';

function LoginGoogle() {
  const clientId = '783610138228-anpgvtcc326gk47gpiuospu35mvgcckl.apps.googleusercontent.com';
  async function onSuccess(res) {
    var regExp = '@handong.ac.kr';
    var regEmail = res.profileObj.email;
    if (regEmail.match(regExp) != null) {
      //<Route path="/register" element={<Register />} component={() => <Register email={regEmail} />} />;
      document.location.href = '/register';
    } else {
      alert('handong.ac.kr 계정으로 로그인하세요.');
      console.error('비인증 계정');
    }
  }

  const onFailure = (res) => {
    alert('구글 로그인에 실패하였습니다');
    console.log('err', res);
  };
  return (
    <Container>
      <GoogleLogin clientId={clientId} buttonText="구글로 로그인하기" onSuccess={onSuccess} onFailure={onFailure} />
    </Container>
  );
}

const Container = styled.div`
  width: 200px;
  height: 20px;
  padding-left: 5%;
  align-item: center;
  flex-flow: column wrap;
`;

export default LoginGoogle;
