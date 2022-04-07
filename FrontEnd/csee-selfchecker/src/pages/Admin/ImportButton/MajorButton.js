import React, { useState } from 'react';
import styled from 'styled-components';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';

export default function MajorButton(props) {
  return (
    <>
      <StyledButton className="rounded-pill m-2" onClick={props.clickUploadButton.bind(this, 'major')}>
        Major
      </StyledButton>
    </>
  );
}

const StyledButton = styled(Button)`
  width: 7vw;
  height: 5vh;
`;
