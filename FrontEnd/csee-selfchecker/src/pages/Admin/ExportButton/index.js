import React from 'react';
import styled from 'styled-components';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';

export default function ExportButton(props) {
  const onClick = () => {
    props.setIsExportClick(true);
  };
  return (
    <Button className="rounded-pill m-2" onClick={onClick}>
      Excel Export
    </Button>
  );
}
