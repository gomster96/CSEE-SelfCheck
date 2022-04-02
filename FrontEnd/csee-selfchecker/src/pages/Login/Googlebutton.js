import React, { useState } from 'react';
import { GoogleLogin } from 'react-google-login';
import { useNavigate } from 'react-router';
import styled from 'styled-components';
import ApiService from '../../ApiService';

export default function LoginGoogle(props) {
  const clientId = '783610138228-anpgvtcc326gk47gpiuospu35mvgcckl.apps.googleusercontent.com';
  const isUser = props.isUserSelect;
  const navigate = useNavigate();
  async function onSuccess(res) {
    console.log(isUser);
    var regExp = '@handong.ac.kr';
    var regExp2 = '@handong.edu';
    var userEmail = res.profileObj.email;
    if (isUser.match('0')) {
      if (userEmail.match(regExp) != null) {
        if (!ApiService.fetchUserByID(userEmail)) {
          console.log('회원가입 페이지 데이터 넘기기 성공!');
          navigate('/register', {
            state: {
              userEmail,
            },
          });
        } else {
          console.log('메인 페이지 데이터 넘기기 성공!');
          navigate('/main', {
            state: {
              userEmail,
            },
          });
        }
      } else {
        alert('handong.ac.kr 계정으로 로그인하세요.');
        console.log(userEmail);
        console.error('비인증 계정입니다.');
        window.location.reload();
      }
    } else {
      if (userEmail.match(regExp) || userEmail.match(regExp2) != null) {
        if (!ApiService.fetchUserByID(userEmail)) {
          console.log('회원가입 페이지 데이터 넘기기 성공!');
          navigate('/adminregister', {
            state: {
              userEmail,
            },
          });
        } else {
          console.log('관리자 페이지 데이터 넘기기 성공!');
          navigate('/admin', {
            state: {
              userEmail,
            },
          });
        }
      } else {
        alert('handong.ac.kr / handong.edu 계정으로 로그인하세요.');
        console.log(userEmail);
        console.error('비인증 계정입니다.');
        window.location.reload();
      }
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
