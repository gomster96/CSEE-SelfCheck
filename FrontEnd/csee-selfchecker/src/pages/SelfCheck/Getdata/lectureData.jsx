import React, { useEffect, useState } from 'react';
import LectureDataList from './lecture_data_list/lecture_data_list';

function LectureData() {
  const [lectureDatas, setLectureDatas] = useState([]);
  useEffect(() => {
    console.log('useEffect');
  }, []);

  const requestOptions = {
    method: 'GET',
    redirect: 'follow',
  };

  fetch('http://localhost:8080/admin/lectures', requestOptions)
    .then((response) => response.json())
    .then((result) => {
      console.log(JSON.stringify(result));
      setLectureDatas(result);
    })
    .catch((error) => console.log('error', error));
  return <LectureDataList lectureDatas={lectureDatas} />;
}

export default LectureData;
