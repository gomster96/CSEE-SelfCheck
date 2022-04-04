import React, { useEffect, useState } from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import 'bootstrap/dist/css/bootstrap.min.css';
import styled from 'styled-components';
import service from '../../../util/service';

function createData(name, major, semester, result, reason) {
  return { name, major, semester, result, reason };
}

const rows = [
  createData('안병웅', '컴퓨터공학 심화', 7, '불합격', '운영체제'),
  createData('이선경', '콘텐츠융합디자인', 7, '불합격', '운영체제'),
  createData('김주은', '전자공학 심화', 7, '합격', ''),
  createData('김광', '국제어문학부', 8, '불합격', '운영체제, 데이터구조, 공학설계입문'),
  createData('안병웅', '컴퓨터공학 심화', 7, '합격', '운영체제'),
  createData('이선경', '콘텐츠융합디자인', 7, '불합격', '운영체제'),
];

export default function AdminTable(props) {
  const classes = useStyles();

  const [studentDatas, setStudentDatas] = useState([]);

  const parseTakenStatus = (takenStatus) => {
    let parsedStatus = '';
    for (let i = 0; i < takenStatus.length; i++) {
      if (props.lectureList.length === 0) break;
      if (takenStatus[i] === '-') {
        parsedStatus += props.lectureList[i].lectureName + ', ';
      } else if (takenStatus[i] === '+') {
        parsedStatus += props.lectureList[i].lectureName + ' 병수예정, ';
      }
    }
    if (parsedStatus.length > 2) parsedStatus = parsedStatus.substring(0, parsedStatus.length - 2);
    return parsedStatus;
  };

  useEffect(() => {
    // craeteFetchBody(props.filterStatus);
    const fetchLectures = async () => {
      const data = await service.getStudents(props.fetchBody);
      setStudentDatas(data);
    };
    fetchLectures();
  }, [props.fetchBody]);

  return (
    <TableLayout>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="customized table" size="small">
          <TableHead>
            <TableRow>
              <StyledTableCell align="center">학생명</StyledTableCell>
              <StyledTableCell align="center">전공</StyledTableCell>
              <StyledTableCell align="center">학기수</StyledTableCell>
              <StyledTableCell align="center">판정</StyledTableCell>
              <StyledTableCell align="center">미이수 과목</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {studentDatas.map((student) => (
              <StyledTableRow key={student.studentNumber}>
                <StyledTableCell component="th" scope="row" align="center" size="small">
                  {student.name}
                </StyledTableCell>
                <StyledTableCell align="center">{student.majorName}</StyledTableCell>
                <StyledTableCell align="center">{student.semester}</StyledTableCell>
                <StyledTableCell align="center">{student.result === 1 ? '만족' : '불만족'}</StyledTableCell>
                <StyledTableCell align="center">{student.takenStatus ? parseTakenStatus(student.takenStatus) : ''}</StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </TableLayout>
  );
}

const StyledTableCell = withStyles((theme) => ({
  head: {
    // backgroundColor: theme.palette.common.black,
    backgroundColor: '#2E75B6',
    color: theme.palette.common.white,
  },
  body: {
    fontSize: '20',
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

const TableLayout = styled.div`
  height: 35vh;
  overflow: scroll;
  /* ::-webkit-scrollbar {
    width: 1vw;
  
  }
  ::-webkit-scrollbar-thumb {
    background-color: #2e75b6;
  }

  ::-webkit-scrollbar-track {
    background-color: grey;
  } */
`;
