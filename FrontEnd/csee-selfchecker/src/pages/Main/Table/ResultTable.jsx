import React, { useEffect, useState } from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { TableLayout, TextLayout } from '../main.styled';
import { useLocation } from 'react-router';
import { useNavigate } from 'react-router';
import { ButtonStyle } from '../main.styled';
import { Button } from 'react-bootstrap';
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
  const classes = useStyles();
  const [userData, setUserData] = useState({});
  const navigate = useNavigate();

  const onRetry = () => {
    navigate('../Selfcheck', {
      state: {
        userId: userData.userId,
      },
    });
  };

  useEffect(() => {
    fetch(`http://localhost:8080/api/user/info?userId=${state.userId}`, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        // console.log(result.res);
        // console.log('state is');
        // console.log(state);
        // console.log('result is');
        // console.log(result);
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
              <TableBody>
                {Object.keys(userData.lectures).map((user, idx) => (
                  <>
                    <StyledTableRow key={user.lectureName}>
                      <StyledTableCell component="th" scope="row" align="center">
                        {Object.values(userData.lectures[idx].lectureName)}
                      </StyledTableCell>
                      <StyledTableCell align="center">{userData.takenSemesters[userData.lectures[idx].lecturePosition]}</StyledTableCell>
                      <StyledTableCell align="center">
                        {(() => {
                          if (userData.takenStatus[idx] === '1') return '이수';
                          else if (userData.takenStatus[idx] === '0') return '미이수';
                          else if (userData.takenStatus[idx] === '2') return '이수중';
                          else if (userData.takenStatus[idx] === '3') return '병수예정';
                        })()}
                      </StyledTableCell>
                    </StyledTableRow>
                  </>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </>
      ) : null}
      <TextLayout>
        공학프로젝트기획 수강 기준을
        <span className="text-danger">{userData.result === 0 ? ' 미충족' : ' 충족'}</span>
        하셨습니다
      </TextLayout>
      <ButtonStyle>
        <Button className="rounded-pill m-0" onClick={onRetry}>
          다시하기
        </Button>
      </ButtonStyle>
    </TableLayout>
  );
}
