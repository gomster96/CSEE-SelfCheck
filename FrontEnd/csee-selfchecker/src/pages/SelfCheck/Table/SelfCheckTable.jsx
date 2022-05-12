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
import { TableLayout, ButtonStyle } from '../main.styled';
import { useLocation } from 'react-router';
import { useNavigate } from 'react-router';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';

const StyledTableCell = withStyles((theme) => ({
  head: {
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

  let [radioValue, setRadioValue] = useState({ radios: ['', '', '', '', ''] });
  const [selectSemester, setSelectSemester] = useState({ semesters: ['', '', '', '', ''] });
  const navigate = useNavigate();

  const handleClickedRadioBtn = (e) => {
    //console.log(e.target.value);

    const idx = e.target.value.slice(0, 1);
    const val = e.target.value.slice(1, 2);
    // radio click change 시 selectbox 값 reset

    selectSemester[idx] = ' ';
    setSelectSemester((prevState) => {
      return { ...prevState, selectSemester };
    });
    // radioBtn value array에 save
    if (((idx === '0' || idx === '2') && val === '2') || ((idx === '3' || idx === '4') && val === '3')) radioValue[idx] = '0';
    else radioValue[idx] = val;
    setRadioValue((prevState) => {
      return { ...prevState, radioValue };
    });
  };

  const handleClickedSelectBox = (e) => {
    //console.log(e.target.value);
    const idx = e.target.value.slice(0, 1);
    const val = e.target.value.slice(1, 7);
    if (val === '이수 학기') {
      selectSemester[idx] = ' ';
      setSelectSemester((prevState) => {
        return { ...prevState, selectSemester };
      });
    } else {
      //console.log(val);
      selectSemester[idx] = val;
      setSelectSemester((prevState) => {
        return { ...prevState, selectSemester };
      });
    }
    //console.log(selectSemester);
  };

  const onSaved = (e) => {
    for (var p = 0; p < 5; p++) {
      if ((selectSemester[p] === '' || selectSemester[p] === ' ') && (radioValue[p] === '1' || radioValue[p] === '2' || radioValue[p] === '3')) {
        alert('이수학기를 선택해주세요');
        return;
      }
    }
    const takenStatus = objToString(radioValue, 5);
    const takenSemester = objToString2(selectSemester, 5);
    // console.log(userData.userId);
    // console.log(takenStatus);
    // console.log(takenSemester);
    fetch('http://localhost:8080/api/user/save', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        userId: userData.userId,
        takenStatus: takenStatus,
        takenSemester: takenSemester,
      }),
    }).then((response) => response.json());

    navigate('../main', {
      state: {
        userId: userData.userId,
      },
    });
    if (takenStatus) alert('저장되었습니다.');
  };

  function objToString(obj, idx) {
    var str = '';
    // console.log(idx);
    for (var p = 0; p < idx; p++) {
      if (!obj.hasOwnProperty(p)) {
        str += '0';
      } else if (obj.hasOwnProperty(p)) {
        str += obj[p];
      }
    }
    return str;
  }

  function objToString2(obj, idx) {
    var str = '';
    for (var p = 0; p < idx; p++) {
      if (!obj.hasOwnProperty(p)) {
        str += ', ';
      } else if (obj.hasOwnProperty(p)) {
        if (p !== 4) str += obj[p] + ', ';
        else str += obj[p];
      }
    }
    return str;
  }
  useEffect(() => {
    // console.log(radioValue);
  }, [radioValue]);

  useEffect(() => {
    // console.log(selectSemester);
  }, [selectSemester]);

  let radioInits = [0, 0, 0, 0, 0];
  let selectInits = ['', '', '', '', '', ''];
  for (var p = 0; p < 5; p++) {
    radioInits[p] = state.takenStatus.split('')[p];
  }
  for (var q = 0; q < 6; q++) {
    selectInits[q] = state.takenSemesters[q];
  }
  console.log(radioInits);
  // console.log(state.takenSemesters);
  console.log(selectInits);
  useEffect(() => {
    fetch(`http://localhost:8080/api/user/info?userId=${state.userId}`, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        // console.log(result.res);
        // console.log('state is');
        // console.log({ state });
        // console.log('result is');
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
    <>
      <TableLayout>
        {userData.lectures ? (
          <>
            <TableContainer component={Paper}>
              <Table className={classes.table} aria-label="customized table" size="small">
                <TableHead>
                  <TableRow key="uniq123">
                    <StyledTableCell align="center">과목명</StyledTableCell>
                    <StyledTableCell align="center">이수여부</StyledTableCell>
                    <StyledTableCell align="center">이수학기</StyledTableCell>
                  </TableRow>
                </TableHead>
                <TableBody key={userData.lectures.lectureName}>
                  {Object.keys(userData.lectures).map((lecture, idx) => (
                    <>
                      <StyledTableRow key={userData.studentNumber}>
                        <StyledTableCell component="th" scope="row" align="center">
                          {Object.values(userData.lectures[idx].lectureName)}
                        </StyledTableCell>
                        <StyledTableCell align="center">
                          {
                            <Form>
                              {radioBtns.map((radio, idx2) => (
                                <Form.Label classname="m-0">
                                  <Form.Check
                                    className="m-2"
                                    inline
                                    // defaultChecked={idx2 == radioInits[idx]}
                                    defaultChecked={idx2 == radioInits[userData.lectures[idx].lecturePosition]}
                                    name={userData.lectures[idx].lectureName}
                                    value={userData.lectures[idx].lecturePosition + '' + idx2}
                                    type="radio"
                                    id={`${userData.lectures[idx].lecturePosition}`}
                                    onClick={() => userData.lectures[idx].lecturePosition + '' + idx2}
                                    onChange={handleClickedRadioBtn}
                                    disabled={
                                      userData.lectures[idx].lecturePosition + '' + idx2 === '02' ||
                                      userData.lectures[idx].lecturePosition + '' + idx2 === '22' ||
                                      userData.lectures[idx].lecturePosition + '' + idx2 === '33' ||
                                      userData.lectures[idx].lecturePosition + '' + idx2 === '43'
                                    }
                                  />
                                  {radio}
                                </Form.Label>
                              ))}
                            </Form>
                          }
                        </StyledTableCell>
                        <StyledTableCell align="center">
                          <Form.Select
                            aria-label="SelectBox"
                            size="sm"
                            disabled={
                              radioValue[userData.lectures[idx].lecturePosition] === '0'
                              // (radioValue[userData.lectures[idx].lecturePosition] === '2' && userData.lectures[idx].lecturePosition === 0) ||
                              // (radioValue[userData.lectures[idx].lecturePosition] === '2' && userData.lectures[idx].lecturePosition === 2) ||
                              // (radioValue[userData.lectures[idx].lecturePosition] === '3' && userData.lectures[idx].lecturePosition === 3) ||
                              // (radioValue[userData.lectures[idx].lecturePosition] === '3' && userData.lectures[idx].lecturePosition === 4)
                            }
                            onChange={handleClickedSelectBox}
                            // defaultChecked={selectInits[userData.lectures[idx].lecturePosition]}
                          >
                            {radioInits[userData.lectures[idx].lecturePosition] != 0 ? (
                              <option value={userData.lectures[idx].lecturePosition + '이수 학기'} key={idx}>
                                {selectInits[userData.lectures[idx].lecturePosition]}
                              </option>
                            ) : (
                              <option value={userData.lectures[idx].lecturePosition + '이수 학기'} key={idx}>
                                이수학기
                              </option>
                            )}

                            {/* {radioInits[userData.lectures[idx].lecturePosition] != radioInits[idx] ? (
                              <option value={userData.lectures[idx].lecturePosition + '이수 학기'} key={idx}>
                                이수학기
                              </option>
                            ) : 
                              <option value={userData.lectures[idx].lecturePosition + '이수 학기'} key={idx}>
                                {selectInits[userData.lectures[idx].lecturePosition]}
                              </option>
                            )} */}
                            {userData.lectures[idx].openYear.map((lecture, idx2) =>
                              (() => {
                                if (radioValue[userData.lectures[idx].lecturePosition] === '1')
                                  return (
                                    <option key={idx2} value={userData.lectures[idx].lecturePosition + userData.lectures[idx].openYear[idx2]}>
                                      {userData.lectures[idx].openYear[idx2]}
                                    </option>
                                  );
                              })()
                            )}
                            {(() => {
                              // if (radioValue[userData.lectures[idx].lecturePosition] === '2')
                              //   return (
                              //     <option
                              //       key={userData.lectures[idx].lecturePosition + '' + '2022-1'}
                              //       value={userData.lectures[idx].lecturePosition + '' + '2022-1'}
                              //       selected={'2022-1' === selectInits[idx]}
                              //     >
                              //       2022-1
                              //     </option>
                              //   );
                              if (radioValue[userData.lectures[idx].lecturePosition] === '3')
                                return (
                                  <option
                                    key={userData.lectures[idx].lecturePosition + '' + '2022-2'}
                                    value={userData.lectures[idx].lecturePosition + '' + '2022-2'}
                                    selected={'2022-2' === selectInits[idx]}
                                  >
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
      <ButtonStyle>
        <Button
          type="button"
          value="저장하기"
          className="rounded-pill m-2"
          onClick={onSaved}
          // disabled={radioValue[userData.lectures[idx].lecturePosition] === '1' && selectSemester[userData.lectures[idx].lecturePosition] === null}
        >
          저장하기
        </Button>
      </ButtonStyle>
    </>
  );
}
