import React from 'react';
import styled from 'styled-components';
import Filters from './Filters';

const HeaderStyle = styled.div`
  margin-top: 3vh;
  font-size: 6vh;
  text-align: center;
  font-weight: bold;
  margin-bottom: 3vh;
`;

export default function HeaderFilter() {
  return (
    <>
      <HeaderStyle>Admin Page</HeaderStyle>
      <Filters />
    </>
  );
}
