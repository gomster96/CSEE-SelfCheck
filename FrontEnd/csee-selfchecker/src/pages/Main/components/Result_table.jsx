// Table.js
import { StyledTable } from './Table_styled';
import TableCell from './TableCell';
import TableRow from './TableRow';
import UserDataItem from '../Getdata/user_data_item/user_data_item';
import UserDataList from '../Getdata/Table_user_state';
import React, { useEffect, useState } from 'react';
import { Navbar, Nav, NavDropdown, Form, Button, Container, FormControl } from 'react-bootstrap';

  const Table = ({ children }) => {
  
    return (
      <>
 
        <StyledTable>
          {children}

          <TableRow>
  
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


export default Table;
