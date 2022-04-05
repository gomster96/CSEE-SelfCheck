import React from 'react';
import { Link } from 'react-router-dom';
import { ButtonStyle } from '../main.styled';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';

function EditButton(props) {
  return (
    <>
      <ButtonStyle>
        <Link to="../selfcheck">
          <Button className="rounded-pill m-2">수정하기</Button>
        </Link>
      </ButtonStyle>
    </>
  );
}

export default EditButton;
