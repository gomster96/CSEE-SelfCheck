import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ButtonStyle } from '../main.styled';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import service from '../../../util/service';

function SaveButton(props) {
  // const [userDatas, setUserDatas] = useState([]);
  // const handleSubmit = () => {
  //   console.log(props.userDatas);
  //   const response = service.postUserResult(props.userDatas);
  //   setUserDatas(response);
  // };
  return (
    <>
      <Link to="../main">
        <Button as="input" type="button" value="저장하기" className="rounded-pill m-2">
          저장하기
        </Button>
      </Link>
    </>
  );
}

export default SaveButton;
