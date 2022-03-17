import React from 'react';
import styled from 'styled-components';
import Checkbox from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';

const lectureData = ['공학설계입문', '데이터구조', '컴퓨터구조', '운영체제'];
const semester = ['6학기', '7학기', '8학기', '9학기'];
const possibleStudent = ['만족', '불만족'];

const CheckBoxAlignDiv = styled.div`
  display: flex;
`;
const CheckBoxesTitle = styled.div`
  margin-top: 10px;
  font-size: 20px;
  font-weight: bolder;
  margin-right: 5vw;
  margin-left: 10vw;
`;

export default function Filters() {
  return (
    <FormGroup>
      <CheckBoxAlignDiv>
        <CheckBoxesTitle>과목별: </CheckBoxesTitle>
        {lectureData.map((lecture) => {
          return <FormControlLabel control={<Checkbox name={lecture} />} label={lecture} sx={{ width: '8vw' }}></FormControlLabel>;
        })}
      </CheckBoxAlignDiv>
      <CheckBoxAlignDiv>
        <CheckBoxesTitle>학기수: </CheckBoxesTitle>
        {semester.map((semes) => {
          return <FormControlLabel control={<Checkbox name={semes} />} label={semes} sx={{ width: '8vw' }}></FormControlLabel>;
        })}
      </CheckBoxAlignDiv>
      <CheckBoxAlignDiv>
        <CheckBoxesTitle>과목별: </CheckBoxesTitle>
        {possibleStudent.map((student) => {
          return <FormControlLabel control={<Checkbox name={student} />} label={student} sx={{ width: '8vw' }}></FormControlLabel>;
        })}
      </CheckBoxAlignDiv>
    </FormGroup>
  );
}
