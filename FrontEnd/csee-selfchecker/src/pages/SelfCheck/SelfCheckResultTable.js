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
import { Button, Form } from 'react-bootstrap';

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

function createData(major, completion_semester, complete, result) {
  return { major, completion_semester, complete, result };
}

const rows = [createData('공학설계입문', '17-2', '이수', ''), createData('운영체제', '22-1', '병수', ''), createData('컴퓨터구조', '21-2', '이수', '')];

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

export default function MyPageResultTable() {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table" size="small">
        <TableHead>
          <TableRow>
            <StyledTableCell align="center">과목명</StyledTableCell>
            <StyledTableCell align="center">이수학기</StyledTableCell>
            <StyledTableCell align="center">이수여부</StyledTableCell>
            <StyledTableCell align="center">판정</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.major}>
              <StyledTableCell component="th" scope="row" align="center">
                {row.major}
              </StyledTableCell>
              <StyledTableCell align="center">
                {
                  <Form.Select aria-label="Default select example" size="sm">
                    <option>이수 학기</option>
                    <option value="1">2016-1</option>
                    <option value="2">2016-2</option>
                    <option value="3">2017-1</option>
                    <option value="4">2017-2</option>
                    <option value="5">2018-1</option>
                    <option value="6">2018-2</option>
                    <option value="7">2019-1</option>
                    <option value="8">2019-2</option>
                    <option value="9">2020-1</option>
                    <option value="10">2020-2</option>
                    <option value="11">2021-1</option>
                    <option value="12">2021-2</option>
                    <option value="13">2022-1</option>
                  </Form.Select>
                }
              </StyledTableCell>
              <StyledTableCell align="center">
                {
                  <Form.Select aria-label="Default select example" size="sm">
                    <option>이수 여부</option>
                    <option value="1">이수</option>
                    <option value="2">미이수</option>
                    <option value="3">병수</option>
                  </Form.Select>
                }
              </StyledTableCell>
              <StyledTableCell align="center" style={{ color: 'red' }}>
                {row.result}
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
