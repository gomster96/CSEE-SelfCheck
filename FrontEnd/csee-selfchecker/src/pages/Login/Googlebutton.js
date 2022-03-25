import React, { Component } from 'react';
import { GoogleLogin } from 'react-google-login';
import styled from 'styled-components';
import './index.js';

const clientId = '783610138228-anpgvtcc326gk47gpiuospu35mvgcckl.apps.googleusercontent.com';

class Googlebutton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: '',
      name: '',
      email: '',
      provider: '',
    };
  }
  // Google Login
  responseGoogle = (res) => {
    var regExp = '@handong.ac.kr';
    var regEmail = res.profileObj.email;
    if (regEmail.match(regExp) != null) {
      /* console.log('======================', '로그인 성공');
      console.log('UserId: ' + res.googleId);
      console.log('Name: ' + res.profileObj.name);
      console.log('Email: ' + res.profileObj.email); */
      this.setState({
        email: res.profileObj.email,
        provider: 'google',
      });
      sessionStorage.setItem('email', regEmail);
      //console.log(regEmail);
      document.location.href = '../register';
    } else {
      alert('handong.ac.kr 계정으로 로그인하세요.');
      console.error('비인증 계정');
    }
  };

  // Login Fail
  responseFail = (err) => {
    console.error(err);
  };

  render() {
    return (
      <Container>
        <GoogleLogin clientId={clientId} buttonText="구글로 로그인하기" onSuccess={this.responseGoogle} onFailure={this.responseFail} />
      </Container>
    );
  }
}

const Container = styled.div`
  width: 200px;
  height: 20px;
  padding-left: 5%;
  align-item: center;
  flex-flow: column wrap;
`;

export default Googlebutton;
