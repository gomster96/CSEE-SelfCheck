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
import { Form } from 'react-bootstrap';
import { TableLayout } from '../main.styled';
import { useLocation } from 'react-router';
import { useNavigate } from 'react-router';
const StyledTableCell = withStyles((theme) => ({
  head: {
    // backgroundColor: theme.palette.common.black,
    backgroundColor: '#2E75B6',
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 16,
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

export default function MyPageResultTable(lecture) {
  const classes = useStyles();
  const [userData, setUserData] = useState({});
  const { state } = useLocation({});

  console.log({ state });

  useEffect(() => {
    fetch(`http://localhost:8080/api/user/info?userId=1`, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        console.log(result.res);
        console.log('state is');
        console.log({ state });
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
          <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="customized table" size="small">
              <TableHead>
                <TableRow>
                  <StyledTableCell align="center">과목명</StyledTableCell>
                  <StyledTableCell align="center">이수여부</StyledTableCell>
                  <StyledTableCell align="center">이수학기</StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody key={userData.lectures.lectureName}>
                {Object.keys(userData.lectures).map((lecture, idx) => (
                  <>
                    <StyledTableRow>
                      <StyledTableCell component="th" scope="row" align="center">
                        {Object.values(userData.lectures[idx].lectureName)}
                      </StyledTableCell>
                      <StyledTableCell align="center">
                        {
                          <Form>
                            {['radio'].map((type) => (
                              <div key={`inline-${type}`} className="mb-3">
                                <Form.Check inline label="이수" name="takenSemester" value="1" type={type} id={`inline-${type}-1`} onChange="checkRadio" />
                                <Form.Check inline label="미이수" name="takenSemester" value="0" type={type} id={`inline-${type}-2`} />
                                <Form.Check inline label="이수중" name="takenSemester" value="2" type={type} id={`inline-${type}-3`} />
                                <Form.Check inline label="병수예정" name="takenSemester" value="3" type={type} id={`inline-${type}-4`} />
                              </div>
                            ))}
                          </Form>
                        }
                      </StyledTableCell>
                      <StyledTableCell align="center" key={userData.lectures.openYear}>
                        <Form.Select aria-label="Default select example" size="sm">
                          <option>이수 학기</option>
                          {userData.lectures[idx].openYear.map((lecture, idx2) => (
                            <option> {Object.values(userData.lectures[idx].openYear[idx2])}</option>
                          ))}
                        </Form.Select>
                      </StyledTableCell>
                    </StyledTableRow>
                  </>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </>
      ) : null}
    </TableLayout>
  );
}
