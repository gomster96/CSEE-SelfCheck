import React from 'react';
import headerImg from '../../../asset/img/csee-logo-symbol.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function header(props) {
  return (
    <>
      <Navbar bg="light">
        <Container>
          <Navbar.Brand href="/">
            <img alt="" src={headerImg} width="40" height="40" className="d-inline-block align-top" /> CSEE Self-Checker
          </Navbar.Brand>
          <Link to="../">
            <button>로그아웃</button>
          </Link>
        </Container>
      </Navbar>
    </>
  );
}

export default header;
