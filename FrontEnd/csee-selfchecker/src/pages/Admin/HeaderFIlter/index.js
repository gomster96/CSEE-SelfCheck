import React from 'react';
import styled from 'styled-components';
import Filters from './Filters';

const HeaderStyle = styled.div`
  margin-top: 5vh;
  font-size: 7vh;
  text-align: center;
`;

export default function HeaderFilter() {
  return (
    <>
      <HeaderStyle>Admin Page</HeaderStyle>
      <Filters />
    </>
  );
}
