// Table.js
import React, { useEffect, useState } from 'react';
import { StyledTable } from './Table_styled';
import TableCell from './TableCell';
import TableRow from './TableRow';
import { Tab } from 'bootstrap';
import Table_user_state from '../Getdata/Table_user_state';
import ResultTable from './Result_table';
import {useLocation} from 'react-router';

const Table = ({ children }) => {
  function isEmptyObject(obj) {
    return JSON.stringify(obj) === '{}';
  }
  const [userData, setUserData] = useState({});
  const { state } = useLocation();
  
  
  useEffect(() => {
    fetch( `http://localhost:8080/api/user/info?userId=${state.userId}`, requestOptions)
    .then(response => response.json())
    .then(result => {
      console.log(result.res);
      console.log("result is");
        
        console.log(result);
      
        setUserData(result);
    })
    .catch(error => console.log('error', error));
  }, []);

  const requestOptions = {
    method: 'GET',
    redirect: 'follow'
  };

  
  
  return (
    <>
     
      

       <StyledTable>
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
