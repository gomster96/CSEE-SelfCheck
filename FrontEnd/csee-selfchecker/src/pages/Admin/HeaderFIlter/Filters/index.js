import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Checkbox from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import service from '../../../../util/service';

const semester = ['5학기', '6학기', '7학기', '8학기', '9학기 이상'];
const possibleStudent = ['가능', '불가능'];

export default function Filters(props) {
  const lectureBoxClicked = (idx, e) => {
    props.filterStatus.lectures[idx] = e.target.checked;

    props.setFilterStatus((prevState) => {
      return { ...prevState, lectures: props.filterStatus.lectures };
    });
  };

  const semesterBoxClicked = (idx, e) => {
    props.filterStatus.semesters[idx] = e.target.checked;

    props.setFilterStatus((prevState) => {
      return { ...prevState, semesters: props.filterStatus.semesters };
    });
  };

  const resultBoxClicked = (idx, e) => {
    props.filterStatus.possibleStatus[idx] = e.target.checked;
    props.setFilterStatus((prevState) => {
      return { ...prevState, possibleStatus: props.filterStatus.possibleStatus };
    });
  };

  useEffect(() => {
    const fetchLectures = async () => {
      const data = await service.getLectures();
      props.setLectureList(data);
    };
    fetchLectures();
  }, []);

  return (
    <FiltersLayout>
      <FormGroup>
        <CheckBoxAlignDiv>
          <CheckBoxesTitle>미이수 과목</CheckBoxesTitle>
          {props.lectureList.map((lecture, idx) => {
            return (
              <FormControlLabel
                key={idx}
                control={<Checkbox name={lecture.lectureName} style={{ transform: 'scale(0.8)' }} />}
                label={<span style={{ fontSize: '0.8vw', width: '7vw' }}>{lecture.lectureName}</span>}
                sx={{ marginRight: '0.8vw' }}
                onClick={lectureBoxClicked.bind(this, idx)}
              ></FormControlLabel>
            );
          })}
        </CheckBoxAlignDiv>
        <CheckBoxAlignDiv>
          <CheckBoxesTitle>학기수 조회</CheckBoxesTitle>
          {semester.map((semes, idx) => {
            return (
              <FormControlLabel
                key={idx}
                control={<Checkbox name={semes} style={{ transform: 'scale(0.8)' }} />}
                label={<span style={{ fontSize: '0.8vw', width: '7vw' }}>{semes}</span>}
                onClick={semesterBoxClicked.bind(this, idx)}
              ></FormControlLabel>
            );
          })}
        </CheckBoxAlignDiv>
        <CheckBoxAlignDiv>
          <CheckBoxesTitle>가능/불가능</CheckBoxesTitle>
          {possibleStudent.map((student, idx) => {
            return (
              <FormControlLabel
                key={idx}
                control={<Checkbox name={student} style={{ transform: 'scale(0.8)' }} />}
                label={<span style={{ fontSize: '0.8vw', width: '7vw' }}>{student}</span>}
                onClick={resultBoxClicked.bind(this, idx)}
              ></FormControlLabel>
            );
          })}

          <ExplainDiv>원하는 조건 체크 후 조회를 클릭하세요.</ExplainDiv>
        </CheckBoxAlignDiv>
      </FormGroup>
    </FiltersLayout>
  );
}
const ExplainDiv = styled.div`
  color: #797979;
  font-size: 0.8vw;
  width: 16vw;
  text-align: right;
`;
const CheckBoxAlignDiv = styled.div`
  display: flex;
  align-items: center;
`;
const CheckBoxesTitle = styled.div`
  font-size: 1vw;
  font-weight: bolder;
  margin-right: 2vw;
`;

const FiltersLayout = styled.div`
  width: 65vw;
  display: flex;
  justify-content: center;
`;
