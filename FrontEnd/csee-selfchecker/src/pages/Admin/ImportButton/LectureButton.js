import React, { useState } from 'react';
import styled from 'styled-components';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';

export default function LectureButton(props) {
  return (
    <>
      <StyledButton className="rounded-pill m-2" onClick={props.clickUploadButton.bind(this, 'lecture')}>
        Lecture
      </StyledButton>
    </>
  );
}

const StyledButton = styled(Button)`
  width: 7vw;
  height: 5vh;
`;
