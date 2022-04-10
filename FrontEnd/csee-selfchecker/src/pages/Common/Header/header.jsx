import React from 'react';
import headerImg from '../../../asset/img/csee-logo-symbol.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import { GoogleLogout } from 'react-google-login';
import { Navbar, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function header(props) {
  const onLogout = () => {
    window.sessionStorage.removeItem("user_id");
    console.log("로그아웃 성공!");
    console.log("session userId is " + sessionStorage.getItem("user_id"));
  };
  return (
      <>
        <Navbar bg="light">
          <Container>
            <Navbar.Brand href="/">
              <img alt="" src={headerImg} width="40" height="40" className="d-inline-block align-top" /> CSEE 공학프로젝트기획 Self-Checker
            </Navbar.Brand>
            <Link to="../">
              {sessionStorage.getItem("user_id") === null ? (
                  <button type='button' onClick={onLogout}>로그인</button>
              ) : (
                  <button type='button' onClick={onLogout}>로그아웃</button>
              )}
            </Link>
          </Container>
        </Navbar>
      </>
  );
}

export default header;
