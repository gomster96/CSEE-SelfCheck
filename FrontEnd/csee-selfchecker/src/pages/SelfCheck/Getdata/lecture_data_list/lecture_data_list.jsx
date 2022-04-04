import React from 'react';
import LectureDataItem from '../lecture_data_item/lecture_data_item';

const LectureDataList = (props) => (
  <ul>
    {props.lectureDatas.map((lecture) => (
      <LectureDataItem key={0} lecture={lecture} />
    ))}
  </ul>
);

export default LectureDataList;
