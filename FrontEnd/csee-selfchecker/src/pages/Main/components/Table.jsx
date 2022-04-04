// Table.js
import React, { useEffect, useState } from 'react';
import { StyledTable } from './Table_styled';
import TableCell from './TableCell';
import TableRow from './TableRow';
import { Tab } from 'bootstrap';
import Table_user_state from '../Getdata/Table_user_state';
import ResultTable from './Result_table';

const Table = ({ children }) => {
  function isEmptyObject(obj) {
    return JSON.stringify(obj) === '{}';
  }
  const [userData, setUserData] = useState({});
  
  useEffect(() => {
    console.log('useEffect');
  }, []);

  const requestOptions = {
    method: 'GET',
    redirect: 'follow'
  };

  fetch("http://localhost:8080/api/user/info?userId=3", requestOptions)
    .then(response => response.json())
    .then(result => {
      // console.log(JSON.stringify(result));
      console.log(result.res);
      console.log("result is");
        
        console.log(result);
      
        setUserData(result);
    })
    .catch(error => console.log('error', error));
    // return <UserDataList userDatas={userDatas} />;
  
  return (
    <>
     
      <p>here</p>
      {/* <p>{userDatas.userId}</p> */}

    {/* {userDatas.map((student) => (
      <>
      <p>hello</p>
      <p >{student.userId}</p>
       <p >{student.majorName}</p>
       </>
    ))} */}

      {/* <StyledTable>
        {children}
        <TableRow>
          <TableCell title="이름" value={userDatas["userId"]}></TableCell>
          <TableCell title="학번" value="21700162"></TableCell>
          <TableCell title="이메일" value="moomin@handong.ac.kr"></TableCell>
          <TableCell title="학기수" value="8학기"></TableCell>
          <TableCell title="전공" value="컴퓨터공학"></TableCell>
          <TableCell title="연락처" value="2648"></TableCell>
        </TableRow>
      </StyledTable> */}

       <StyledTable>
        {/* {children} */}
        {userData?
          <TableRow  key={userData.userId}> 
    
            <TableCell title="이름" value={userData.name}></TableCell>
            <TableCell title="학번" value={userData.studentNumber}></TableCell>
            <TableCell title="이메일" value={userData.email}></TableCell>
            <TableCell title="학기수" value={userData.semester}></TableCell>
            <TableCell title="전공" value={userData.majorName}></TableCell>
            <TableCell title="연락처" value={userData.phone}></TableCell>
          </TableRow>
        
         : null}
        
      
      </StyledTable>

    </>
  );
};

export default Table;
