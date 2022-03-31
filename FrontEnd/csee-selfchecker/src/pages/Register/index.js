import React from 'react';
import styled from 'styled-components';
import background from '../../asset/img/backgroundImg.png';
import logo from '../../asset/img/loginImage.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Form } from 'react-bootstrap';
import { useNavigate, useLocation } from 'react-router';

export default function Resister() {
  const navigate = useNavigate();
  const { state } = useLocation();
  const initialFormData = Object.freeze({
    studentId: '',
    studentName: '',
    studentPhone: '',
    studentEmail: state.email,
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
    navigate('/selfcheck', {
      state: {
        id: state.studentId,
        name: state.studentName,
        phone: state.studentPhone,
        email: state.studentEmail,
      },
    });
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
              <p style={{ marginTop: '2vh', fontSize: '1.2vw', textAlign: 'center' }}>Hisnet에 저장된 연락처 뒤 4자리를 입력하세요.</p>
            </Form.Group>
            <Button as="input" type="submit" value="회원가입" style={{ width: '100%', borderRadius: '20px', background: '#2e75b6', marginTop: '10%' }} />{' '}
            <p style={{ marginTop: '2vh', fontSize: '1.2vw', textAlign: 'center' }}>
              회원가입이 안될 시 관리자에게 문의하세요.<br></br>[054-260-1234 / admin@handong.ac.kr]{' '}
            </p>
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
  padding: 18vh 0px 10px 0px;
`;
