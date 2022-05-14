import React from 'react';
import headerImg from '../../../asset/img/csee-logo-symbol.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Container, Button } from 'react-bootstrap';
import { GoogleLogout } from 'react-google-login';
import { Link } from 'react-router-dom';

function Header(props) {
  const onLogout = () => {
    window.sessionStorage.removeItem('user_id');
  };
  return (
    <>
      <Navbar bg="light">
        <Container>
          <Navbar.Brand href="/">
            <img alt="" src={headerImg} width="30" height="30" className="d-inline-block align-center"/> 공학프로젝트기획 Self-Checker
          </Navbar.Brand>
          <Link to="/">
            {sessionStorage.getItem('user_id') === null ? (
              window.location.href="/"
            ) : (
              <Button type="button" onClick={onLogout} style={{backgroundColor: '#2e75b6', border: '0px'}}>
                로그아웃
              </Button>
            )}
          </Link>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
