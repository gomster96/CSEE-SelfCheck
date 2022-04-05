import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router';
import UserTable from '../../Main/Table/UserTable';

function SelfCheckUserTable(props) {
  const [userData, setUserData] = useState({});
  const { state } = useLocation();

  //   useEffect((props) => {
  //     fetch(`http://localhost:8080/api/user/info?userId=2`, requestOptions)
  //       .then((response) => response.json())
  //       .then((result) => {
  //         console.log(result.res);
  //         console.log('userData is');
  //         console.log({ userData });
  //         console.log('result is');
  //         console.log(result);
  //         setUserData(result);
  //       })
  //       .catch((error) => console.log('error', error));
  //   }, []);

  const requestOptions = {
    method: 'GET',
    redirect: 'follow',
  };
  return (
    <>
      <p>You clicked {userData.userData} times</p>
    </>
  );
}

export default SelfCheckUserTable;
