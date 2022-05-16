import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import service from '../../../util/service';
const semester = ['5', '6', '7', '8', '9'];

export default function SearchBar(props) {
  const [inputData, setInputData] = useState('');
  useEffect(() => {
    const fetchBody = { lectures: getLectureFetchBody(), semesters: getSemesterFetchBody(), takePossible: getTakePossible(), searchWord: inputData };
    if (props.isExportClick === true) {
      service.downloadExcel(fetchBody);
      props.setIsExportClick(false);
    }
  }, [props.isExportClick]);
  const onChange = (e) => {
    setInputData(e.target.value);
  };

  const onClick = () => {
    props.setIsLoading(true);
    props.setFetchBody((prevState) => {
      return { ...prevState, lectures: getLectureFetchBody(), semesters: getSemesterFetchBody(), takePossible: getTakePossible(), searchWord: inputData };
    });
  };

  const getLectureFetchBody = () => {
    const tmpLecture = props.filterStatus.lectures
      .map((lectureStatus, idx) => {
        if (lectureStatus === true) {
          return props.lectureList[idx].lecturePosition;
        }
      })
      .filter((el) => el !== undefined);
    return tmpLecture;
  };

  const getSemesterFetchBody = () => {
    const tmpSemester = props.filterStatus.semesters
      .map((sem, idx) => {
        if (sem === true) {
          return semester[idx];
        }
      })
      .filter((el) => el !== undefined);
    return tmpSemester;
  };
  const getTakePossible = () => {
    let tmp = 0;
    if (props.filterStatus.possibleStatus[0] === true && props.filterStatus.possibleStatus[1] === true) tmp = 2;
    else if (props.filterStatus.possibleStatus[0] === true) tmp = 1;
    else if (props.filterStatus.possibleStatus[1] === true) tmp = 0;
    else tmp = 2;
    return tmp;
  };

  return (
    <>
      <SearchBarLayout>
        <TextField sx={{ width: '20vw', fontSize: '14', zIndex: '0' }} label="학번, 이름 검색" variant="outlined" size="small" onChange={onChange} />
        <Button sx={{}} variant="contained" onClick={onClick}>
          조회
        </Button>
      </SearchBarLayout>
    </>
  );
}

const SearchBarLayout = styled.div`
  margin-top: 2vh;
  display: flex;
  justify-content: center;
  margin-bottom: 5vh;
  font-size: 16px;
  z-index: -1;
`;
