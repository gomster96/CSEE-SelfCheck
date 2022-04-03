// Table.js
import { StyledTable } from './Table_styled';
import TableCell from './TableCell';
import TableRow from './TableRow';
import UserData from '../../SelfCheck/Getdata/Table_user_state';
import React, { useEffect, useState } from 'react';
function Table() {
  const Table = ({ children }) => {
    const [userDatas, setUserDatas] = useState([]);
    useEffect(() => {
      console.log('useEffect');
    }, []);

    const requestOptions = {
      method: 'GET',
      redirect: 'follow',
    };

    fetch('http://localhost:8080/api/user/info?userId=1', requestOptions)
      .then((response) => response.json())
      .then((result) => {
        console.log(JSON.stringify(result));
        setUserDatas(result);
      })
      .catch((error) => console.log('error', error));
    return (
      <>
        <UserData />
        <StyledTable>
          {children}

          <TableRow>
            <TableCell title="이름" value="{user.name}"></TableCell>
            <TableCell title="학번" value="21700162"></TableCell>
            <TableCell title="이메일" value="moomin@handong.ac.kr"></TableCell>
            <TableCell title="학기수" value="8학기"></TableCell>
            <TableCell title="전공" value="컴퓨터공학"></TableCell>
            <TableCell title="연락처" value="2648"></TableCell>
          </TableRow>
        </StyledTable>
      </>
    );
  };
}

export default Table;
