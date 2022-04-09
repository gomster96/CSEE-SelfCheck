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

export default function ResultTable() {
  const classes = useStyles();
  const [userData, setUserData] = useState({});
  const { state } = useLocation({});
  const radioBtns = ['미이수', '이수', '이수중', '병수예정'];
  const [radioValue, setRadioValue] = useState({ lectures: [] });

  const [selectSemester, setSelectSemester] = useState({ lectures2: [] });
  const handleClickedRadioBtn = (e) => {
    const idx = e.target.value.slice(0, 1);
    const val = e.target.value.slice(1, 2);
    if (val === '0') {
    }
    radioValue[idx] = val;
    setRadioValue((prevState) => {
      return { ...prevState, radioValue: radioValue };
    });
  };

  const handleClickedSelectBox = (e) => {
    const idx = e.target.value.slice(0, 1);
    console.log(e.target.value.slice(1, 7));
    selectSemester[idx] = e.target.value;
    setSelectSemester((prevState) => {
      return { ...prevState, selectSemester: selectSemester };
    });
    console.log(selectSemester);
  };
  useEffect(() => {
    console.log(radioValue);
  }, [radioValue]);

  useEffect(() => {
    console.log(selectSemester);
  }, [selectSemester]);

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
                            {radioBtns.map((radio, idx2) => (
                              <Form.Label key={idx + '' + idx2} inline className="m-0">
                                <Form.Check
                                  key={idx + '' + idx2}
                                  className="m-2"
                                  inline
                                  name={userData.lectures[idx].lectureName}
                                  value={idx + '' + idx2}
                                  type="radio"
                                  id={`${idx}`}
                                  onChange={handleClickedRadioBtn}
                                />
                                {radio}
                              </Form.Label>
                            ))}
                          </Form>
                        }
                      </StyledTableCell>
                      <StyledTableCell align="center" key={userData.lectures}>
                        <Form.Select
                          aria-label="Default select example"
                          size="sm"
                          disabled={
                            radioValue[idx] === '0' ||
                            (radioValue[idx] === '2' && userData.lectures[idx].lecturePosition === 0) ||
                            (radioValue[idx] === '2' && userData.lectures[idx].lecturePosition === 2)
                          }
                          onChange={handleClickedSelectBox}
                        >
                          <option key={idx}>이수 학기</option>
                          {userData.lectures[idx].openYear.map((lecture, idx2) =>
                            (() => {
                              if (radioValue[idx] === '1')
                                return (
                                  <option key={idx2} value={idx + userData.lectures[idx].openYear[idx2]}>
                                    {userData.lectures[idx].openYear[idx2]}
                                  </option>
                                );
                            })()
                          )}

                          {(() => {
                            // if (radioValue[idx] === '0' || userData.lectures[idx].lecturePosition === '2' || userData.lectures[idx].lecturePosition === '0')
                            //   return <option key={idx + 'null'} value="" disabled />;
                            if (radioValue[idx] === '2')
                              return (
                                <option key={idx + '' + '2022-1'} value={idx + '' + '2022-1'}>
                                  2022-1
                                </option>
                              );
                            if (radioValue[idx] === '3')
                              return (
                                <option key={idx + '' + '2022-2'} value={idx + '' + '2022-2'}>
                                  2022-2
                                </option>
                              );
                          })()}
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
