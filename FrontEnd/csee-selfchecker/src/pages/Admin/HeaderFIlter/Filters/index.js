import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Checkbox from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import { fontSize, style } from '@mui/system';
import service from '../../../../util/service';

// const lectureData = ['공학설계입문', '데이터구조', '컴퓨터구조', '운영체제', '공학설계입문', '데이터구조', '컴퓨터구조', '운영체제'];
const semester = ['6학기', '7학기', '8학기', '9학기'];
const possibleStudent = ['충족', '미충족'];

export default function Filters() {
  const [lectures, setLectures] = useState([]);
  useEffect(() => {
    const fetchLectures = async () => {
      const data = await service.getLectures();
      setLectures(data);
    };
    fetchLectures();
  }, []);

  return (
    <FiltersLayout>
      <FormGroup>
        <CheckBoxAlignDiv>
          <CheckBoxesTitle>과목별 </CheckBoxesTitle>
          <GaroScroll>
            {lectures.map((lecture) => {
              return (
                <FormControlLabel
                  control={<Checkbox name={lecture.lectureName} style={{ transform: 'scale(0.8)' }} />}
                  label={<span style={{ fontSize: '0.8vw', width: '7vw' }}>{lecture.lectureName}</span>}
                  sx={{ marginRight: '0.8vw' }}
                ></FormControlLabel>
              );
            })}
          </GaroScroll>
        </CheckBoxAlignDiv>
        <CheckBoxAlignDiv>
          <CheckBoxesTitle>학기수 </CheckBoxesTitle>
          {semester.map((semes) => {
            return (
              <FormControlLabel
                control={<Checkbox name={semes} style={{ transform: 'scale(0.8)' }} />}
                label={<span style={{ fontSize: '0.8vw', width: '7vw' }}>{semes}</span>}
              ></FormControlLabel>
            );
          })}
        </CheckBoxAlignDiv>
        <CheckBoxAlignDiv>
          <CheckBoxesTitle>판정별 </CheckBoxesTitle>
          {possibleStudent.map((student) => {
            return (
              <FormControlLabel
                control={<Checkbox name={student} style={{ transform: 'scale(0.8)' }} />}
                label={<span style={{ fontSize: '0.8vw', width: '7vw' }}>{student}</span>}
              ></FormControlLabel>
            );
          })}
        </CheckBoxAlignDiv>
      </FormGroup>
    </FiltersLayout>
  );
}

const CheckBoxAlignDiv = styled.div`
  display: flex;
  align-items: center;
  padding-left: 4rem;
`;
const CheckBoxesTitle = styled.div`
  font-size: 1vw;
  font-weight: bolder;
  margin-right: 2vw;
`;

const GaroScroll = styled.div`
  width: 40vw;
  white-space: nowrap;
  overflow-x: scroll;
`;

const FiltersLayout = styled.div`
  width: 50vw;
`;
