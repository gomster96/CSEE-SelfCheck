import React from 'react';
import headerImg from '../../../asset/img/csee-logo-symbol.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function header(props) {
  return (
    <>
      <Navbar bg="light">
        <Container>
          <Navbar.Brand href="/">
            <img alt="" src={headerImg} width="40" height="40" className="d-inline-block align-center" /> 공학프로젝트기획 Self-Checker
          </Navbar.Brand>
          <Link to="../">
            <Button>로그아웃</Button>
          </Link>
        </Container>
      </Navbar>
    </>
  );
}

export default header;
