import React from 'react';
import { Link } from 'react-router-dom';
import { ButtonStyle } from '../main.styled';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';

function ResetButton(props) {
  return (
    <>
      <Button className="rounded-pill m-2" onClick={onReset}>
        초기화
      </Button>
    </>
  );
}

export default ResetButton;
