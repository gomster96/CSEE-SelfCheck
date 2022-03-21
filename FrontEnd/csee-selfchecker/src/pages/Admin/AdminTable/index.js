import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const StyledTableCell = withStyles((theme) => ({
  head: {
    // backgroundColor: theme.palette.common.black,
    backgroundColor: '#2E75B6',
    color: theme.palette.common.white,
  },
  body: {
    fontSize: '1.1vw',
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

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
  createData('김주은', '전자공학 심화', 7, '합격', ''),
  createData('김광', '국제어문학부', 8, '불합격', '운영체제, 데이터구조, 공학설계입문'),
];

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

export default function AdminTable() {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
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
          {rows.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row" align="center" style={{ height: '5vh' }}>
                {row.name}
              </StyledTableCell>
              <StyledTableCell align="center">{row.major}</StyledTableCell>
              <StyledTableCell align="center">{row.semester}</StyledTableCell>
              <StyledTableCell align="center">{row.result}</StyledTableCell>
              <StyledTableCell align="center">{row.reason}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
