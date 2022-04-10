import React, { useState } from 'react';
import styled from 'styled-components';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
const semester = ['5학기', '6학기', '7학기', '8학기', '9학기', '10학기'];

export default function SearchBar(props) {
  const [inputData, setInputData] = useState('');

  const onChange = (e) => {
    setInputData(e.target.value);
  };

  const onClick = () => {
    const tmpLecture = props.filterStatus.lectures
      .map((lectureStatus, idx) => {
        if (lectureStatus === true) {
          return props.lectureList[idx].lecturePosition;
        }
      })
      .filter((el) => el !== undefined);
    const tmpSemester = props.filterStatus.semesters
      .map((sem, idx) => {
        if (sem === true) {
          return semester[idx];
        }
      })
      .filter((el) => el !== undefined);
    let tmp = 0;
    if (props.filterStatus.possibleStatus[0] === true && props.filterStatus.possibleStatus[1] === true) tmp = 2;
    else if (props.filterStatus.possibleStatus[0] === true) tmp = 1;
    else if (props.filterStatus.possibleStatus[1] === true) tmp = 0;
    else tmp = 2;
    console.log(tmp);
    props.setIsLoading(true);
    props.setFetchBody((prevState) => {
      return { ...prevState, lectures: tmpLecture, semesters: tmpSemester, takePossible: tmp, searchWord: inputData };
    });
  };
  return (
    <SearchBarLayout>
      <TextField sx={{ width: '25vw', fontSize: '14', zIndex: '0', marginRight: '2vw' }} label="학번, 이름 검색" variant="outlined" size="small" onChange={onChange} />
      <Button sx={{ width: '3vw', marginLeft: '5vw' }} variant="contained" onClick={onClick}>
        조회
      </Button>
    </SearchBarLayout>
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
