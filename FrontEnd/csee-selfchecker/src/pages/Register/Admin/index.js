import React, { useState } from 'react';
import styled from 'styled-components';
import logo from '../../../asset/img/loginImage.png';
import background from '../../../asset/img/backgroundImg.png';
import Header from '../../Common/Header/header';
import Footer from '../../Common/Footer/footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Button } from 'react-bootstrap';
import { useNavigate, useLocation } from 'react-router';
import service from '../../../util/service';

export default function AdminRegister() {
  const navigate = useNavigate();
  const { state } = useLocation();
  const [userDatas, setUserDatas] = useState([]);

  const initialFormData = {
    adminEmail: '',
    department: '',
    name: '',
  };

  const [formData, updateFormData] = useState(initialFormData);

  const handleChange = (e) => {
    updateFormData({
      ...formData,
      [e.target.name]: e.target.value.trim(),
      adminEmail: state.email,
    });
  };

  const handleSubmit = () => {
    const response = service.signupAdmin(formData);
    setUserDatas(response);

    alert('관리자 회원가입 정보 제출 완료! 관리자 승인 후 로그인이 가능합니다.');
    navigate('/');
  };
  return (
    <>
      <Header />
      <ContainerDiv>
        <LoginFormDiv>
          <LoginFormLeft1></LoginFormLeft1>
          <LoginFormLeft2>
            <LoginFormLeftTitle>
              Computer Science <br></br>And Electrical Engineering
            </LoginFormLeftTitle>
            <LoginFormLeftsubTitle>Welcome to our website</LoginFormLeftsubTitle>
            <LogoImg src={logo} />
          </LoginFormLeft2>

          <LoginFormRight>
            <Form>
              <LoginFormRightTitle>
                <h3>Admin Information</h3>
              </LoginFormRightTitle>
              <Form.Group className="mb-3" style={{ marginTop: '50px' }}>
                <Form.Control placeholder="  소속 (Department)" name="department" onChange={handleChange} style={{ borderRadius: '20px' }} />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Control placeholder="  이름 (Name)" name="name" onChange={handleChange} style={{ borderRadius: '20px' }} />
              </Form.Group>
              <p>제출 시 관리자 승인 후 로그인 가능합니다.</p>
            </Form>
            <Button as="input" type="button" value="회원가입" onClick={handleSubmit} style={{ width: '100%', borderRadius: '20px', background: '#2e75b6', marginTop: '10%' }} />{' '}
          </LoginFormRight>
        </LoginFormDiv>
      </ContainerDiv>
      <>
        <Footer />
      </>
    </>
  );
}

const calcWidthPercent = (span) => {
  if (!span) return;

  const width = (span / 12) * 100;
  return width;
};

const BREAK_POINT_MOBILE = 768;
const BREAK_POINT_TABLET = 992;
const BREAK_POINT_LAPTOP = 1024;
const BREAK_POINT_PC = 1200;

const ContainerDiv = styled.div`
  width: 100vw;
  height: 90vh;
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
  @media only screen and (min-width: ${BREAK_POINT_LAPTOP}px) {
    width: ${({ mdlg }) => mdlg && `${calcWidthPercent(mdlg)}%`};
  }
  @media only screen and (min-width: ${BREAK_POINT_PC}px) {
    width: ${({ lg }) => lg && `${calcWidthPercent(lg)}%`};
  }
`;
const LoginFormDiv = styled.div`
  background: #f5f5f5;
  width: 100vw;
  height: 85vh;
  display: flex;
  flex-direction: row;
  box-shadow: 10px black;
  border-radius: 40px;

  /* 그림자 */
  -webkit-box-shadow: 27px 43px 43px -26px rgba(89, 89, 89, 0.39);
  -moz-box-shadow: 27px 43px 43px -26px rgba(89, 89, 89, 0.39);
  box-shadow: 27px 43px 43px -26px rgba(89, 89, 89, 0.39);

  width: ${({ xs }) => (xs ? `${calcWidthPercent(xs)}%` : `70vw`)};
  @media only screen and (max-width: ${BREAK_POINT_MOBILE}px) {
    width: ${({ sm }) => sm && `${calcWidthPercent(sm)}%`};
  }
  @media only screen and (max-width: ${BREAK_POINT_TABLET}px) {
    width: ${({ md }) => md && `${calcWidthPercent(md)}%`};
  }
  @media only screen and (min-width: ${BREAK_POINT_LAPTOP}px) {
    width: ${({ mdlg }) => mdlg && `${calcWidthPercent(mdlg)}%`};
  }
  @media only screen and (max-width: ${BREAK_POINT_PC}px) {
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

  width: ${({ xs }) => (xs ? `${calcWidthPercent(xs)}%` : `5%`)};
  padding: 1%;
  @media only screen and (max-width: ${BREAK_POINT_MOBILE}px) {
    width: ${({ sm }) => sm && `${calcWidthPercent(sm)}%`};
    display: none;
  }
  @media only screen and (max-width: ${BREAK_POINT_TABLET}px) {
    width: ${({ md }) => md && `${calcWidthPercent(md)}%`};
  }
  @media only screen and (min-width: ${BREAK_POINT_LAPTOP}px) {
    width: ${({ mdlg }) => mdlg && `${calcWidthPercent(mdlg)}%`};
  }
  @media only screen and (max-width: ${BREAK_POINT_PC}px) {
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
  @media only screen and (max-width: ${BREAK_POINT_MOBILE}px) {
    width: ${({ sm }) => sm && `${calcWidthPercent(sm)}%`};
    display: none;
  }
  @media only screen and (max-width: ${BREAK_POINT_TABLET}px) {
    width: ${({ md }) => md && `${calcWidthPercent(md)}%`};
  }
  @media only screen and (min-width: ${BREAK_POINT_LAPTOP}px) {
    width: ${({ mdlg }) => mdlg && `${calcWidthPercent(mdlg)}%`};
  }
  @media only screen and (max-width: ${BREAK_POINT_PC}px) {
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
  padding: 35% 0px 10px 0px;
`;
