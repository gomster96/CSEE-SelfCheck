import React from 'react';
import styled from 'styled-components';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';

export default function ImportButton() {
  const test = () => {
    console.log('import button clicked');
  };
  return (
    <Button className="rounded-pill m-2" onClick={test}>
      Excel Import
    </Button>
  );
}
