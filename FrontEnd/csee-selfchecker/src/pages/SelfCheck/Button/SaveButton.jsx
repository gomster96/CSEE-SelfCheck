import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ButtonStyle } from '../main.styled';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';

function SaveButton(props) {
  return (
    <>
      <Button as="input" type="button" value="저장하기" className="rounded-pill m-2">
        저장하기
      </Button>
    </>
  );
}

export default SaveButton;
