import React from 'react';
import styled from 'styled-components';
import background from '../../asset/img/backgroundImg.png';
import logo from '../../asset/img/loginImage.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Form } from 'react-bootstrap';

const { useState } = React;

export default function Resister() {
  const [email, setEmail] = useState('');
  const [select, setSelect] = useState('0');
  const handleUserChange = (e) => {
    const value = e.target.value;
    if (value.match !== 0) {
      document.location.href = '../Register/Admin';
    }
    setSelect(value);
  };

  const initialFormData = Object.freeze({
    studentId: '',
    studentName: '',
    studentPhone: '',
    studentEmail: email,
  });

  const [formData, updateFormData] = React.useState(initialFormData);

  const handleChange = (e) => {
    updateFormData({
      ...formData,

      // Trimming any whitespace
      [e.target.name]: e.target.value.trim(),
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // ... submit to API or something
  };

  return (
    <ContainerDiv>
      <LoginFormDiv>
        <LoginFormLeft1 />
        <LoginFormLeft2>
          <LoginFormLeftTitle>
            Computer Science <br></br>And Electrical Engineering
          </LoginFormLeftTitle>
          <LoginFormLeftsubTitle>Welcome to our website</LoginFormLeftsubTitle>
          <LogoImg src={logo} />
        </LoginFormLeft2>

        <LoginFormRight>
          <Form onSubmit={handleSubmit}>
            <ItemContainer>
              <Form.Check inline label="학생" type="radio" value="0" checked={select === '0'} onChange={handleUserChange} />
              <Form.Check inline label="관리자" type="radio" value="1" checked={select === '1'} onChange={handleUserChange} />
            </ItemContainer>
            <LoginFormRightTitle>
              <h3>Student Information</h3>
            </LoginFormRightTitle>
            <Form.Group className="mb-3" style={{ marginTop: '50px' }}>
              <Form.Control placeholder="  학번 (Student ID)" name="studentId" onChange={handleChange} style={{ borderRadius: '20px' }} />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Control placeholder="  이름 (Name)" name="studentName" onChange={handleChange} style={{ borderRadius: '20px' }} />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Control placeholder="  핸드폰 뒤 4자리 (XXXX)" name="studentPhone" onChange={handleChange} style={{ borderRadius: '20px' }} />
            </Form.Group>
            <Button as="input" type="submit" value="Save!" style={{ width: '100%', borderRadius: '20px', background: '#2e75b6', marginTop: '10%' }} />{' '}
          </Form>
        </LoginFormRight>
      </LoginFormDiv>
    </ContainerDiv>
  );
}

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

  width: ${({ xs }) => (xs ? `${calcWidthPercent(xs)}%` : `100%`)};
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

  width: ${({ xs }) => (xs ? `${calcWidthPercent(xs)}%` : `70vw`)};
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
const LoginFormLeft1 = styled.div`
  margin: 0.3rem 0.4rem 0.3rem;
  width: 5%;
  border-radius: 35px 0px 0px 35px;
  display: flex;
  background: #2e75b6;
  align-items: center;
  color: #2e75b6;

  width: ${({ xs }) => (xs ? `${calcWidthPercent(xs)}%` : `5%`)};
  padding: 1%;
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
const LoginFormLeft2 = styled.div`
  width: 50%;
  padding: 8% 5% 5% 5%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: left;
  color: #797979;

  width: ${({ xs }) => (xs ? `${calcWidthPercent(xs)}%` : `70vw`)};
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
  padding: 40px;

  width: ${({ xs }) => (xs ? `${calcWidthPercent(xs)}%` : `70vw`)};
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
const LoginFormRightTitle = styled.div`
  display: flex;
  justify-content: center;
  padding: 10px 0px 10px 0px;
`;
const ItemContainer = styled.div`
  display: flex;
  margin: 10vh 20px 10px 0px;
  padding-left: 20%;
`;
