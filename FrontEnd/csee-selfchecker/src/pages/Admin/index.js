import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import background from '../../asset/img/backgroundImg.png';
import AdminTable from './AdminTable';
import HeaderFilter from './HeaderFIlter/Filters';
import SearchBar from './SearchBar';
import { useNavigate, useLocation } from 'react-router';
import headerImg from '../../asset/img/csee-logo-symbol.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import ImportButton from './ImportButton';
import ExportButton from './ExportButton';
import Loading from '../Common/Loading';
import Header from '../Common/Header/header';
import Footer from '../Common/Footer/footer';

export default function Admin() {
  const navigate = useNavigate();
  const [filterStatus, setFilterStatus] = useState({ lectures: [], semesters: [], possibleStatus: [] });
  const [fetchBody, setFetchBody] = useState({ lectures: [], semesters: [], takePossible: 2, searchWord: '' });
  const [lectureList, setLectureList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const { state } = useLocation();
  const [isExportClick, setIsExportClick] = useState(false);
  useEffect(() => {
    if (state === null) {
      alert('잘못된 접근입니다.');
      navigate('/csc/');
    }
  }, []);
  return (
    <>
      <Header />
      <ContainerDiv>
        <LoginFormDiv>
          <InnerLayout>
            <TextLayout>
              <h1>학생 정보 조회</h1>
            </TextLayout>
            <InnerLayout>
              {isLoading ? <Loading /> : null}
              <HeaderFilter filterStatus={filterStatus} setFilterStatus={setFilterStatus} setFetchBody={setFetchBody} lectureList={lectureList} setLectureList={setLectureList} />

              <SearchBar
                setFetchBody={setFetchBody}
                lectureList={lectureList}
                filterStatus={filterStatus}
                setIsLoading={setIsLoading}
                isExportClick={isExportClick}
                setIsExportClick={setIsExportClick}
              />
              <TableLayout>
                <AdminTable fetchBody={fetchBody} lectureList={lectureList} setIsLoading={setIsLoading} />
              </TableLayout>
            </InnerLayout>
            <TextLayout>
              <ButtonStyle className="mb-3">
                <ImportButton />
                <ExportButton setIsExportClick={setIsExportClick} />
              </ButtonStyle>
            </TextLayout>
          </InnerLayout>
        </LoginFormDiv>
      </ContainerDiv>

      <Footer />
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
const BREAK_POINT_PC = 1200;

const ContainerDiv = styled.div`
  width: 100vw;
  height: auto;
  padding: 4rem;
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
  height: auto;
  display: inline-block;
  flex-direction: row;
  box-shadow: 10px black;
  border-radius: 40px;
  text-align: center;

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

const TableLayout = styled.div`
  font-size: 18px;
  margin-bottom: 2vh;
`;
const InnerLayout = styled.div`
  display: inline-block;
  height: 80%;
  margin-top: 3%;
`;
const TextLayout = styled.div`
  padding-top: 0.5rem;

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
  padding: 2rem;
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
