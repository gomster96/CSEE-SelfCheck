import React, { useEffect, useState } from 'react';
import UserDataList from './user_data_list/user_data_list';

function Table_user_state() {
  const [userDatas, setUserDatas] = useState([]);
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
      setUserDatas(result);
    })
    .catch((error) => console.log('error', error));
  return <UserDataList userDatas={userDatas} />;
}

export default Table_user_state;
