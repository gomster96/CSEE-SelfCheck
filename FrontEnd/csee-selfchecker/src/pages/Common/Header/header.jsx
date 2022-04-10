import React from 'react';
import headerImg from '../../../asset/img/csee-logo-symbol.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Container, Button } from 'react-bootstrap';
import { GoogleLogout } from 'react-google-login';
import { Link } from 'react-router-dom';

function Header(props) {
  const onLogout = () => {
    window.sessionStorage.removeItem('user_id');
    console.log('로그아웃 성공!');
    console.log('session userId is ' + sessionStorage.getItem('user_id'));
  };
  return (
    <>
      <Navbar bg="light">
        <Container>
          <Navbar.Brand href="/">
            <img alt="" src={headerImg} width="40" height="40" className="d-inline-block align-top" /> 공학프로젝트기획 Self-Checker
          </Navbar.Brand>
          <Link to="../">
            {sessionStorage.getItem('user_id') === null ? (
              <a>잘못된 경로로 접근하셨습니다. [클릭]</a>
            ) : (
              <button type="button" onClick={onLogout}>
                로그아웃
              </button>
            )}
          </Link>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
