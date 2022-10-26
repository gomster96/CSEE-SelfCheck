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
import { useNavigate } from 'react-router';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import { TextLayout } from '../../Main/main.styled';

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

export default function SelfCheckTable(props) {
  let now = new Date();
  let year = now.getFullYear();
  let nextYear = year + 1;
  let todayMonth = now.getMonth() + 1;
  // console.log(year);
  let semester;
  if (todayMonth < 9 && todayMonth > 2) semester = 1;
  else semester = 2;
  let semester1 = 1;
  let semester2 = 2;
  let nextYearAndSemester = JSON.parse(JSON.stringify(nextYear + '-' + semester1));
  let nextSemester = year + '-' + semester2;
  // console.log(semester);
  const classes = useStyles();
  const userData = { ...props.userData };
  console.log(userData);

  const radioBtns = ['미이수', '이수', '이수중', '병수예정'];
  let [radioValue, setRadioValue] = useState({ radios: ['', '', '', '', ''] });
  const [selectSemester, setSelectSemester] = useState({ semesters: ['', '', '', '', ''] });
  const navigate = useNavigate();

  const handleClickedRadioBtn = (e, lecturePosition) => {
    const val = e.target.value;
    const idx = lecturePosition;
    console.log(e.target.value);

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

  const handleClickedSelectBox = (e, lecturePosition) => {
    const val = e.target.value;
    console.log(JSON.parse(JSON.stringify(e.target.value)));
    const idx = lecturePosition;
    if (val === '이수 학기') {
      selectSemester[idx] = ' ';
      setSelectSemester((prevState) => {
        return { ...prevState, selectSemester };
      });
    } else {
      selectSemester[idx] = val;
      setSelectSemester((prevState) => {
        return { ...prevState, selectSemester };
      });
    }
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
    fetch(`${process.env.REACT_APP_SERVER_URL}/api/user/save`, {
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

    navigate('../csc/main', {
      state: {
        userId: userData.userId,
      },
    });
    if (takenStatus) alert('저장되었습니다.');
  };

  function objToString(obj, idx) {
    var str = '';
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
        if (p != 4) str += obj[p] + ', ';
        else str += obj[p];
      }
    }
    return str;
  }
  useEffect(() => {}, [radioValue]);

  useEffect(() => {}, [selectSemester]);

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
                                <Form.Label className="m-0">
                                  {userData.lectures[idx].lecturePosition}
                                  {idx2}
                                  <Form.Check
                                    className="m-2"
                                    inline
                                    defaultChecked={idx2 == 0}
                                    name={userData.lectures[idx].lectureName}
                                    value={idx2}
                                    type="radio"
                                    id={`${idx2}`}
                                    onClick={() => idx2}
                                    onChange={(e) => handleClickedRadioBtn(e, userData.lectures[idx].lecturePosition)}
                                    disabled={
                                      todayMonth < 9 && todayMonth > 2
                                        ? userData.lectures[idx].lecturePosition + '' + idx2 === '02' ||
                                          userData.lectures[idx].lecturePosition + '' + idx2 === '22' ||
                                          userData.lectures[idx].lecturePosition + '' + idx2 === '33' ||
                                          userData.lectures[idx].lecturePosition + '' + idx2 === '43'
                                        : userData.lectures[idx].lecturePosition + '' + idx2 === '03' ||
                                          userData.lectures[idx].lecturePosition + '' + idx2 === '23' ||
                                          userData.lectures[idx].lecturePosition + '' + idx2 === '32' ||
                                          userData.lectures[idx].lecturePosition + '' + idx2 === '42'
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
                              todayMonth < 9 && todayMonth > 2
                                ? radioValue[userData.lectures[idx].lecturePosition] === '0' ||
                                  (radioValue[userData.lectures[idx].lecturePosition] === '2' && userData.lectures[idx].lecturePosition === 0) ||
                                  (radioValue[userData.lectures[idx].lecturePosition] === '2' && userData.lectures[idx].lecturePosition === 2) ||
                                  (radioValue[userData.lectures[idx].lecturePosition] === '3' && userData.lectures[idx].lecturePosition === 3) ||
                                  (radioValue[userData.lectures[idx].lecturePosition] === '3' && userData.lectures[idx].lecturePosition === 4)
                                : radioValue[userData.lectures[idx].lecturePosition] === '0' ||
                                  (radioValue[userData.lectures[idx].lecturePosition] === '3' && userData.lectures[idx].lecturePosition === 0) ||
                                  (radioValue[userData.lectures[idx].lecturePosition] === '3' && userData.lectures[idx].lecturePosition === 2) ||
                                  (radioValue[userData.lectures[idx].lecturePosition] === '2' && userData.lectures[idx].lecturePosition === 3) ||
                                  (radioValue[userData.lectures[idx].lecturePosition] === '2' && userData.lectures[idx].lecturePosition === 4)
                            }
                            onChange={(e) => handleClickedSelectBox(e, userData.lectures[idx].lecturePosition)}
                          >
                            <option value={'이수 학기'} key={'이수 학기'}>
                              이수 학기
                            </option>
                            {userData.lectures[idx].openYear.map((lecture, idx2) =>
                              (() => {
                                if (radioValue[userData.lectures[idx].lecturePosition] === '1')
                                  return (
                                    <option key={userData.lectures[idx].openYear[idx2]} value={userData.lectures[idx].openYear[idx2]}>
                                      {userData.lectures[idx].openYear[idx2]}
                                      {typeof userData.lectures[idx].openYear[idx2]}
                                    </option>
                                  );
                              })()
                            )}

                            {(() => {
                              if (radioValue[userData.lectures[idx].lecturePosition] === '2')
                                return (
                                  <option key={{ year } - { semester }} value={{ year } - { semester }}>
                                    {year}-{semester}
                                  </option>
                                );
                              if (radioValue[userData.lectures[idx].lecturePosition] === '3') {
                                if (todayMonth < 8 && todayMonth > 2)
                                  return (
                                    <option key={{ year } - { semester2 }} value={{ year } - { semester2 }}>
                                      {{ year } - { semester2 }}
                                    </option>
                                  );
                                else {
                                  return (
                                    <option key={{ nextYearAndSemester }} value={{ nextYearAndSemester }}>
                                      {nextYearAndSemester}
                                      {/* {typeof nextYearAndSemester} */}
                                    </option>
                                  );
                                }
                              }
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
      <TextLayout>
        {' '}
        <small>
          <h6 className="pt-3" style={{ fontSize: '0.8rem' }}>
            ※심화 전공의 경우 캡스톤디자인을 마칠 때까지 설계 학점 총 12학점을 이수해야 합니다.
          </h6>
        </small>
      </TextLayout>
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
