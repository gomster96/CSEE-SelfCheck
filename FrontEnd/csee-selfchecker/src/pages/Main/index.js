import React, { Component } from 'react';
import { ContainerDiv, RoundBackgroundDiv, InnerLayout, TableLayout, TextLayout, ButtonStyle, FooterDiv, Footer, FooterTextLayout } from './main.styled';
import Table from './components/Table';
import MypageResultTable from './MypageResultTable';
import headerImg from '../../asset/img/csee-logo-symbol.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, NavDropdown, Form, Button, Container, FormControl } from 'react-bootstrap';

class index extends Component {
  render() {
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
                <h1>Mypage</h1>
              </TableLayout>

              <Table />

              <TableLayout>
                <MypageResultTable />
              </TableLayout>
              <TextLayout>
                <h4>
                  공학프로젝트 입문 수강이 <span className="text-danger">가능 </span>합니다
                </h4>
              </TextLayout>

              <ButtonStyle>
                <Button className="rounded-pill m-2">수정하기</Button>
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
}

export default index;
