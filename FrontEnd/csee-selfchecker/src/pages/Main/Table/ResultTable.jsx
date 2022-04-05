import React, { useEffect, useState } from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { TableLayout } from '../main.styled';
import { useLocation } from 'react-router';
import { useNavigate } from 'react-router';
import { useRef } from 'react';
const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: '#2E75B6',
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 20,
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

export default function ResultTable(props) {
  const { state } = useLocation();
  const history = useNavigate();
  const classes = useStyles();
  const user = [];
  const [userData, setUserData] = useState({});
  useEffect(() => {
    fetch(`http://localhost:8080/api/user/info?userId=${state.userId}`, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        console.log(result.res);
        console.log('result is');
        console.log(result);
        setUserData(result);
      })
      .catch((error) => console.log('error', error));
  }, []);

  const requestOptions = {
    method: 'GET',
    redirect: 'follow',
  };

  return (
    <TableLayout>
      {userData.lectures ? (
        <>
          {/* {Object ? <h>{Object.values(userData.lectures[0].lectureName)}</h> : null} */}
          <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="customized table" size="small">
              <TableHead>
                <TableRow>
                  <StyledTableCell align="center">과목명</StyledTableCell>
                  <StyledTableCell align="center">이수학기</StyledTableCell>
                  <StyledTableCell align="center">이수여부</StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody key={userData.lectures.lectureName}>
                {Object.keys(userData.lectures).map((user, idx) => (
                  <>
                    <StyledTableRow>
                      <StyledTableCell component="th" scope="row" align="center">
                        {Object.values(userData.lectures[idx].lectureName)}
                      </StyledTableCell>
                      <StyledTableCell align="center">{userData.takenSemesters[idx]}</StyledTableCell>
                      <StyledTableCell align="center">{userData.takenStatus[idx] === '1' ? '이수' : '미이수'}</StyledTableCell>
                    </StyledTableRow>
                  </>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </>
      ) : null}
      <h5 className="m-5">
        공학 프로젝트 기획 수강 요건을
        <span className="text-danger">{userData.result === 1 ? ' 충족' : ' 미충족'}</span>
        하셨습니다
      </h5>
    </TableLayout>
  );
}