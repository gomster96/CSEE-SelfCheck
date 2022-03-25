import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import 'bootstrap/dist/css/bootstrap.min.css';
const StyledTableCell = withStyles((theme) => ({
  head: {
    // backgroundColor: theme.palette.common.black,
    backgroundColor: '#2E75B6',
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

function createData(name, studentId, email) {
  return { name, studentId, email };
}
function createData2(semester, major, phone) {
  return { semester, major, phone };
}

const rows = [createData('김주은', '21700162', 'moomin@handong.ac.kr')];
const rows2 = [createData2('8학기', '컴퓨터공학', '01031912648')];

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

export default function MyPageTable() {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table" size="small">
        <TableHead>
          <TableRow>
            <StyledTableCell align="center">이름</StyledTableCell>
            <StyledTableCell align="center">학번</StyledTableCell>
            <StyledTableCell align="center">이메일</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell align="center">{row.name}</StyledTableCell>
              <StyledTableCell align="center">{row.studentId}</StyledTableCell>
              <StyledTableCell align="center">{row.email}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
        <TableHead>
          <TableRow>
            <StyledTableCell align="center">학기수</StyledTableCell>
            <StyledTableCell align="center">전공</StyledTableCell>
            <StyledTableCell align="center">연락처</StyledTableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {rows2.map((row) => (
            <StyledTableRow>
              <StyledTableCell align="center">{row.semester}</StyledTableCell>
              <StyledTableCell align="center">{row.major}</StyledTableCell>
              <StyledTableCell align="center">{row.phone}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
