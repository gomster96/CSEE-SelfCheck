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
  const checkIsUser = async () => {
    const response = await service.checkUserByEmail(userEmail);
    console.log('response is ', response);
    userId = response;
    console.log('userid is ', userId);

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
    console.log('response is ', response);
    adminId = response;
    console.log('adminId is ', adminId);
    //const response = service.checkAdminInfo(formData);
    if (!adminId) {
      navigate('/adminregister', {
        state: { email: userEmail },
      });
    } else {
      navigate('/admin', {
        state: { userId: adminId },
      });
    }
  };

  async function onSuccess(res) {
    var regExp = '@handong.ac.kr';
    var regExp2 = '@handong.edu';
    userEmail = res.profileObj.email;
    console.log('userType is ' + isUserType + ' userEmail is ', userEmail);

    if (isUserType.match('0')) {
      if (userEmail.match(regExp) != null) {
        checkIsUser();
      } else {
        alert('handong.ac.kr 계정으로 로그인하세요.');
        console.error('비인증 계정입니다.');
        window.location.reload();
      }
    } else {
      if (userEmail.match(regExp) || userEmail.match(regExp2) != null) {
        checkIsAdmin();
      } else {
        alert('handong.ac.kr / handong.edu 계정으로 로그인하세요.');
        console.error('비인증 계정입니다.');
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
