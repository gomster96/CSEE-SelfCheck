import React from 'react';
import styled from 'styled-components';
import SelfCheckTable from './SelfCheckTable';
import SelfCheckResultTable from './SelfCheckResultTable';
import background from '../../asset/img/backgroundImg.png';
import headerImg from '../../asset/img/csee-logo-symbol.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate, useLocation } from 'react-router';
import { Navbar, Nav, NavDropdown, Form, Button, Container, FormControl } from 'react-bootstrap';

const calcWidthPercent = (span) => {
  if (!span) return;

  const width = (span / 12) * 100;
  return width;
};

const BREAK_POINT_MOBILE = 768;
const BREAK_POINT_TABLET = 992;
const BREAK_POINT_PC = 1200;

const ContainerDiv = styled.div`
  width: 100vw;
  height: 100vh;
  background: #eff0f2;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url(${background});

  width: ${({ xs }) => (xs ? `${calcWidthPercent(xs)}%` : `100vw`)};
  @media only screen and (min-width: ${BREAK_POINT_MOBILE}px) {
    width: ${({ sm }) => sm && `${calcWidthPercent(sm)}%`};
  }
  @media only screen and (min-width: ${BREAK_POINT_TABLET}px) {
    width: ${({ md }) => md && `${calcWidthPercent(md)}%`};
  }
  @media only screen and (min-width: ${BREAK_POINT_PC}px) {
    width: ${({ lg }) => lg && `${calcWidthPercent(lg)}%`};
  }
`;
const RoundBackgroundDiv = styled.div`
  background: #f5f5f5;
  width: 1050px;
  height: auto;
  display: inline-block;
  flex-direction: row;
  box-shadow: 10px black;
  border-radius: 40px;
  text-align: center;
  margin-top: 30px;
  margin-bottom: 30px;

  /* 그림자 */
  -webkit-box-shadow: 27px 43px 43px -26px rgba(89, 89, 89, 0.39);
  -moz-box-shadow: 27px 43px 43px -26px rgba(89, 89, 89, 0.39);
  box-shadow: 27px 43px 43px -26px rgba(89, 89, 89, 0.39);

  width: ${({ xs }) => (xs ? `${calcWidthPercent(xs)}%` : `70vw`)};
  padding: 1%;
  @media only screen and (max-width: ${BREAK_POINT_MOBILE}px) {
    width: ${({ sm }) => sm && `${calcWidthPercent(sm)}%`};
    height: 90%;
  }
  @media only screen and (max-width: ${BREAK_POINT_TABLET}px) {
    width: ${({ md }) => md && `${calcWidthPercent(md)}%`};
  }
  @media only screen and (max-width: ${BREAK_POINT_PC}px) {
    width: ${({ lg }) => lg && `${calcWidthPercent(lg)}%`};
  }
`;

const InnerLayout = styled.div`
  display: inline-block;
  height: 80%;
  margin-top: 3%;
  width: ${({ xs }) => (xs ? `${calcWidthPercent(xs)}%` : `90%`)};
  padding: 1rem;
  @media only screen and (min-width: ${BREAK_POINT_MOBILE}px) {
    width: ${({ sm }) => sm && `${calcWidthPercent(sm)}%`};
  }
  @media only screen and (min-width: ${BREAK_POINT_TABLET}px) {
    width: ${({ md }) => md && `${calcWidthPercent(md)}%`};
  }
  @media only screen and (min-width: ${BREAK_POINT_PC}px) {
    width: ${({ lg }) => lg && `${calcWidthPercent(lg)}%`};
  }
`;

const TableLayout = styled.div`
  margin-top: 6vh;
`;

const TextLayout = styled.div`
  padding: 0.5rem;
  @media only screen and (min-width: ${BREAK_POINT_MOBILE}px) {
    font-size: ${({ sm }) => sm && `${calcWidthPercent(sm)}rem`};
  }
  @media only screen and (min-width: ${BREAK_POINT_TABLET}px) {
    font-size: ${({ md }) => md && `${calcWidthPercent(md)}rem`};
  }
  @media only screen and (min-width: ${BREAK_POINT_PC}px) {
    font-size: ${({ lg }) => lg && `${calcWidthPercent(lg)}rem`};
  }
`;

const ButtonStyle = styled.div`
  border-radius: 35px;
  display: inline-block;
  width: ${({ xs }) => (xs ? `${calcWidthPercent(xs)}%` : `80%`)};
  padding: 1rem;
  margin: 1rem;
  @media only screen and (min-width: ${BREAK_POINT_MOBILE}px) {
    width: ${({ sm }) => sm && `${calcWidthPercent(sm)}%`};
  }
  @media only screen and (min-width: ${BREAK_POINT_TABLET}px) {
    width: ${({ md }) => md && `${calcWidthPercent(md)}%`};
  }
  @media only screen and (min-width: ${BREAK_POINT_PC}px) {
    width: ${({ lg }) => lg && `${calcWidthPercent(lg)}%`};
  }
`;

const FooterDiv = styled.div`
  display: flex;
  align-itmes: center;
  justify-content: center;
`;

const Footer = styled.div`
  display: flex;
  align-itmes: center;
`;

const FooterTextLayout = styled.div`
  color: gray;
  font-size: 14px;
  padding: 0.5rem;
`;

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
            <TableLayout>
              <SelfCheckTable />
            </TableLayout>
            <TableLayout>
              <SelfCheckResultTable />
            </TableLayout>
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
