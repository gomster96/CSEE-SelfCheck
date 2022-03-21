import React from 'react';
//import ReactDOM from 'react-dom';
import styled from 'styled-components';
import background from '../../asset/img/backgroundImg.png';
import logo from '../../asset/img/loginImage.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Form, Row, Col } from 'react-bootstrap';
//import GlobalFonts from './asset/fonts/font';

const ContainerDiv = styled.div`
  width: 100vw;
  height: 100vh;
  background: #eff0f2;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url(${background});
`;
const LoginFormDiv = styled.div`
  background: #f5f5f5;
  width: 1050px;
  height: 700px;
  display: flex;
  flex-direction: row;
  box-shadow: 10px black;
  border-radius: 40px;

  /* 그림자 */
  -webkit-box-shadow: 27px 43px 43px -26px rgba(89, 89, 89, 0.39);
  -moz-box-shadow: 27px 43px 43px -26px rgba(89, 89, 89, 0.39);
  box-shadow: 27px 43px 43px -26px rgba(89, 89, 89, 0.39);
`;
const LoginFormLeft1 = styled.div`
  margin: 0.3rem 0.4rem 0.3rem;
  width: 5%;
  border-radius: 35px 0px 0px 35px;
  display: flex;
  background: #2e75b6;
  align-items: center;
  color: #2e75b6;
`;
const LoginFormLeft2 = styled.div`
  width: 50%;
  padding: 20px 40px 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: left;
  color: #797979;
`;
const LoginFormLeftTitle = styled.div`
  font-family: 'RedHatDisplay';
  font-size: 36px;
  src: url(./asset/fonts/RedHatDisplay-Regular.ttf);
`;
const LoginFormLeftsubTitle = styled.div`
  font-family: 'RedHatDisplay';
  src: url(/asset/fonts/RedHatDisplay-LightItalic.ttf);
`;
const LogoImg = styled.img`
  padding-top: 5%;
  max-width: 100%;
  height: auto;
`;
const LoginFormRight = styled.div`
  width: 50%;
  border-radius: 0px 40px 40px 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const LoginFormRightTitle = styled.div`
  display: flex;
  justify-content: center;
  padding: 100px 0px 10px 0px;
`;
const InputContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px;
`;

export default function Resister() {
  return (
    <ContainerDiv>
      <LoginFormDiv>
        <LoginFormLeft1>HGU</LoginFormLeft1>
        <LoginFormLeft2>
          <LoginFormLeftTitle>
            Computer Science <br></br>And Electrical Engineering
          </LoginFormLeftTitle>
          <LoginFormLeftsubTitle>Welcome to our website</LoginFormLeftsubTitle>
          <LogoImg src={logo} />
        </LoginFormLeft2>

        <LoginFormRight>
          <InputContainer>
            <Form>
              <LoginFormRightTitle>
                <h3>Student Information</h3>
              </LoginFormRightTitle>
              <Row>
                <Col>
                  <Form.Control as="select" style={{ width: '90%', height: '75%', margin: '4%', textAlign: 'center' }}>
                    <option selected>Major</option>
                    <option>컴공심화</option>
                    <option>컴공(1전공)</option>
                    <option>컴공(2전공)</option>
                    <option>전자심화</option>
                    <option>전자(1/2전공)</option>
                  </Form.Control>
                </Col>
                <Col>
                  <Form.Control as="select" style={{ width: '90%', height: '75%', margin: '4%', textAlign: 'center' }}>
                    <option selected>Semester</option>
                    <option>5학기</option>
                    <option>6학기</option>
                    <option>7학기</option>
                    <option>8학기</option>
                    <option>추가학기</option>
                  </Form.Control>
                </Col>
              </Row>

              <Form.Group className="mb-3" controlId="studentId" style={{ marginTop: '50px' }}>
                <Form.Control type="id" placeholder="  학번 (Student ID)" style={{ borderRadius: '20px' }} />
              </Form.Group>
              <Form.Group className="mb-3" controlId="studentName">
                <Form.Control type="name" placeholder="  이름 (Name)" style={{ borderRadius: '20px' }} />
              </Form.Group>
              <Form.Group className="mb-3" controlId="studentPhone">
                <Form.Control type="phone" placeholder="  연락처 (010XXXXXXXX)" style={{ borderRadius: '20px' }} />
              </Form.Group>
            </Form>
          </InputContainer>
          <Button as="input" variant="primary" type="submit" value="Save!" style={{ width: '50%', borderRadius: '20px', background: '#2e75b6' }} />{' '}
        </LoginFormRight>
      </LoginFormDiv>
    </ContainerDiv>
  );
}
