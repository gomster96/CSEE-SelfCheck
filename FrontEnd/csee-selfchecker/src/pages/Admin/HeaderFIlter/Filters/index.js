import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Checkbox from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import { fontSize, style } from '@mui/system';
import service from '../../../../util/service';
import useEnhancedEffect from '@mui/material/utils/useEnhancedEffect';

// const lectureData = ['공학설계입문', '데이터구조', '컴퓨터구조', '운영체제', '공학설계입문', '데이터구조', '컴퓨터구조', '운영체제'];
const semester = ['6학기', '7학기', '8학기', '9학기', '10학기'];
const possibleStudent = ['충족', '미충족'];

export default function Filters(props) {
  const lectureBoxClicked = (idx) => {
    props.filterStatus.lectures[idx] = !props.filterStatus.lectures[idx];
    props.setFilterStatus((prevState) => {
      return { ...prevState, lectures: props.filterStatus.lectures };
    });
  };

  const semesterBoxClicked = (idx) => {
    props.filterStatus.semesters[idx] = !props.filterStatus.semesters[idx];
    props.setFilterStatus((prevState) => {
      return { ...prevState, semesters: props.filterStatus.semesters };
    });
  };

  const resultBoxClicked = (idx) => {
    props.filterStatus.possibleStatus[idx] = !props.filterStatus.possibleStatus[idx];
    props.setFilterStatus((prevState) => {
      return { ...prevState, possibleStatus: props.filterStatus.possibleStatus };
    });
  };

  const createFetchBody = () => {
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
    props.setFetchBody((prevState) => {
      return { ...prevState, lectures: tmpLecture, semesters: tmpSemester };
    });
  };

  useEffect(() => {
    createFetchBody();
  }, [props.filterStatus]);

  useEffect(() => {
    const fetchLectures = async () => {
      const data = await service.getLectures();
      // setLectures(data);
      props.setLectureList(data);
      const initialStatus = {
        lectures: [],
        semesters: [],
        possibleStatus: [],
      };
      initialStatus.lectures.length = data.length;
      initialStatus.semesters.length = semester.length;
      initialStatus.possibleStatus.length = possibleStudent.length;
      props.setFilterStatus(initialStatus);
    };
    fetchLectures();
  }, []);

  return (
    <FiltersLayout>
      <FormGroup>
        <CheckBoxAlignDiv>
          <CheckBoxesTitle>과목별 </CheckBoxesTitle>
          <GaroScroll>
            {props.lectureList.map((lecture, idx) => {
              return (
                <FormControlLabel
                  control={<Checkbox name={lecture.lectureName} style={{ transform: 'scale(0.8)' }} />}
                  label={<span style={{ fontSize: '0.8vw', width: '7vw' }}>{lecture.lectureName}</span>}
                  sx={{ marginRight: '0.8vw' }}
                  onClick={lectureBoxClicked.bind(this, idx)}
                ></FormControlLabel>
              );
            })}
          </GaroScroll>
        </CheckBoxAlignDiv>
        <CheckBoxAlignDiv>
          <CheckBoxesTitle>학기수 </CheckBoxesTitle>
          {semester.map((semes, idx) => {
            return (
              <FormControlLabel
                control={<Checkbox name={semes} style={{ transform: 'scale(0.8)' }} />}
                label={<span style={{ fontSize: '0.8vw', width: '7vw' }}>{semes}</span>}
                onClick={semesterBoxClicked.bind(this, idx)}
              ></FormControlLabel>
            );
          })}
        </CheckBoxAlignDiv>
        <CheckBoxAlignDiv>
          <CheckBoxesTitle>판정별 </CheckBoxesTitle>
          {possibleStudent.map((student, idx) => {
            return (
              <FormControlLabel
                control={<Checkbox name={student} style={{ transform: 'scale(0.8)' }} />}
                label={<span style={{ fontSize: '0.8vw', width: '7vw' }}>{student}</span>}
                onClick={resultBoxClicked.bind(this, idx)}
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
  /* scrollbar-width: none; */
  ::-webkit-scrollbar {
    height: 0.8vh;
  }
  ::-webkit-scrollbar-thumb {
    background-color: #2e75b6;
  }

  ::-webkit-scrollbar-track {
    /* background-color: grey; */
  }
`;

const FiltersLayout = styled.div`
  width: 50vw;
`;
