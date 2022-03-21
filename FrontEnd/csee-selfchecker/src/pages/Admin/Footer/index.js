import React from 'react';
import ExcelImportButton from './ExcelImport';
import styled from 'styled-components';
import ExcelExportButton from './ExcelExport';

const FooterLayoout = styled.div`
  margin-top: 3vh;
  display: flex;
  justify-content: space-between;
  margin-left: 17vw;
  margin-right: 17vw;
`;

export default function Footer() {
  return (
    <FooterLayoout>
      <ExcelImportButton />
      <ExcelExportButton />
    </FooterLayoout>
  );
}
