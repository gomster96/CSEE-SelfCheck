import React from 'react';
import { Link } from 'react-router-dom';
import { ButtonStyle } from '../main.styled';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';

function ResetButton(props) {
  return (
    <>
      <Link to="../main">
        <Button className="rounded-pill m-2">저장하기</Button>
      </Link>
    </>
  );
}

export default ResetButton;
