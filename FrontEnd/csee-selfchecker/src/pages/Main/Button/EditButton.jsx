import React, { useEffect, useState } from 'react';
import { ButtonStyle } from '../main.styled';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';

export default function EditButton(props) {
  return (
    <>
      <ButtonStyle>
        <Button className="rounded-pill m-2">수정하기</Button>
      </ButtonStyle>
    </>
  );
}
