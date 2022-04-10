import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Checkbox from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import service from '../../../../util/service';

const semester = ['5학기', '6학기', '7학기', '8학기', '9학기', '10학기'];
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
      // const initialStatus = {
      //   lectures: [],
      //   semesters: [],
      //   possibleStatus: [],
      // };
      // initialStatus.lectures.length = data.length;
      // initialStatus.semesters.length = semester.length;
      // initialStatus.possibleStatus.length = possibleStudent.length;
      // props.setFilterStatus(initialStatus);
    };
    fetchLectures();
  }, []);

  return (
    <FiltersLayout>
      <FormGroup>
        <CheckBoxAlignDiv>
          <CheckBoxesTitle>이수한 과목</CheckBoxesTitle>
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
          <ExplainDiv>
            필터하고 싶은 조건을 체크하시거나, 검색어를 입력하시고 조회버튼을 누르시면
            <br /> 관련 조건으로 필터링되어 학생데이터가 조회됩니다.
          </ExplainDiv>
        </CheckBoxAlignDiv>
      </FormGroup>
    </FiltersLayout>
  );
}
const ExplainDiv = styled.div`
  color: #797979;
  font-size: 0.3vw;
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
