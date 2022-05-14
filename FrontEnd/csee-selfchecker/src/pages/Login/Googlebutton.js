import React from 'react';
import { GoogleLogin } from 'react-google-login';
import { useNavigate } from 'react-router';
import styled from 'styled-components';
import service from '../../util/service';

export default function LoginGoogle(props) {
  const clientId = '783610138228-anpgvtcc326gk47gpiuospu35mvgcckl.apps.googleusercontent.com';
  const isUserType = props.isUserSelect;
  const navigate = useNavigate();
  var userEmail;
  var userId;
  var adminId;
  var isActive;
  const checkIsUser = async () => {
    const response = await service.checkUserByEmail(userEmail);
    userId = response;
    window.sessionStorage.setItem('user_id', clientId);
    if (!userId) {
      navigate('/register', {
        state: { email: userEmail },
      });
    } else {
      navigate('/main', {
        state: { userId: userId },
      });
    }
  };

  const checkIsAdmin = async () => {
    const response = await service.checkAdminByEmail(userEmail);
    adminId = response;
    window.sessionStorage.setItem('user_id', clientId);
    if (!adminId) {
      navigate('/adminregister', {
        state: { email: userEmail },
      });
    } else {
      const check = await service.checkAdminIsActive(adminId);
      isActive = check;
      if (check) {
        navigate('/admin', {
          state: { userId: adminId },
        });
      } else {
        alert('관리자 승인 대기 중입니다. (학부사무실: 054-260-1414)');
        navigate('/');
      }
    }
  };

  async function onSuccess(res) {
    var regExp = '@handong.ac.kr';
    var regExp2 = '@handong.edu';
    userEmail = res.profileObj.email;

    if (isUserType.match('0')) {
      if (userEmail.match(regExp) != null) {
        checkIsUser();
      } else {
        alert('handong.ac.kr 계정으로 로그인하세요.');
        window.location.reload();
      }
    } else {
      if (userEmail.match(regExp) || userEmail.match(regExp2) != null) {
        checkIsAdmin();
      } else {
        alert('handong.ac.kr / handong.edu 계정으로 로그인하세요.');
        window.location.reload();
      }
    }
    // }
  }
  const onFailure = (res) => {
    alert('구글 로그인에 실패하였습니다');
    console.log('err', res);
  };

  return (
    <Container>
      <GoogleLogin clientId={clientId} buttonText="구글로 로그인하기" onSuccess={onSuccess} onFailure={onFailure} cookiePolicy={'single_host_origin'} />
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
