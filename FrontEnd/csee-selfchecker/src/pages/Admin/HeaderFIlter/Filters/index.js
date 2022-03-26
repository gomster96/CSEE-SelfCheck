import React from 'react';
import styled from 'styled-components';
import Checkbox from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import { fontSize } from '@mui/system';

const lectureData = ['공학설계입문', '데이터구조', '컴퓨터구조', '운영체제'];
const semester = ['6학기', '7학기', '8학기', '9학기'];
const possibleStudent = ['충족', '미충족'];

const CheckBoxAlignDiv = styled.div`
  display: flex;
  align-items: center;
  padding-left: 4rem;
`;
const CheckBoxesTitle = styled.div`
  font-size: 16px;
  font-weight: bolder;
  margin-right: 2vw;
`;

export default function Filters() {
  return (
    <FormGroup>
      <CheckBoxAlignDiv>
        <CheckBoxesTitle>과목별 </CheckBoxesTitle>
        {lectureData.map((lecture) => {
          return <FormControlLabel control={<Checkbox name={lecture} />} label={lecture} sx={{ width: '7vw' }}></FormControlLabel>;
        })}
      </CheckBoxAlignDiv>
      <CheckBoxAlignDiv>
        <CheckBoxesTitle>학기수 </CheckBoxesTitle>
        {semester.map((semes) => {
          return <FormControlLabel control={<Checkbox name={semes} />} label={semes} sx={{ width: '7vw' }}></FormControlLabel>;
        })}
      </CheckBoxAlignDiv>
      <CheckBoxAlignDiv>
        <CheckBoxesTitle>판정별 </CheckBoxesTitle>
        {possibleStudent.map((student) => {
          return <FormControlLabel control={<Checkbox name={student} />} label={student} sx={{ width: '7vw' }}></FormControlLabel>;
        })}
      </CheckBoxAlignDiv>
    </FormGroup>
  );
}
