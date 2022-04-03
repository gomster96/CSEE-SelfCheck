import React from 'react';
import { ContainerDiv, RoundBackgroundDiv, InnerLayout, TableLayout, TextLayout, ButtonStyle, FooterDiv, Footer, FooterTextLayout } from './main.styled';
import Table from './components/Table';
import headerImg from '../../asset/img/csee-logo-symbol.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate, useLocation } from 'react-router';
import { Navbar, Nav, NavDropdown, Form, Button, Container, FormControl } from 'react-bootstrap';

export default function Main() {
  return (
    <>
      <Navbar bg="light">
        <Container>
          <Navbar.Brand href="/">
            <img alt="" src={headerImg} width="30" height="30" className="d-inline-block align-top" /> CSEE Self-Checker
          </Navbar.Brand>
        </Container>
      </Navbar>
      <ContainerDiv>
        <RoundBackgroundDiv>
          <InnerLayout>
            <TableLayout>
              <h1>Self Check</h1>
            </TableLayout>

            <Table />

            <ButtonStyle>
              <Button className="rounded-pill m-2">초기화</Button>
              <Button className="rounded-pill m-2">저장하기</Button>
            </ButtonStyle>
          </InnerLayout>
        </RoundBackgroundDiv>
      </ContainerDiv>
      <>
        <FooterDiv className="bg-gray">
          <Navbar>
            <Container>
              <Footer>
                <FooterTextLayout>©WALAB 2022 </FooterTextLayout>
                <FooterTextLayout> 안병웅, 이선경, 김주은</FooterTextLayout>
              </Footer>
            </Container>
          </Navbar>
        </FooterDiv>
      </>
    </>
  );
}
