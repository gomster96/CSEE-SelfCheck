import React from 'react';
import styled from 'styled-components';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';

export default function ExportButton() {
  const test = () => {
    console.log('export button clicked');
  };
  return (
    <Button className="rounded-pill m-2" onClick={test} disabled>
      Excel Export
    </Button>
  );
}
