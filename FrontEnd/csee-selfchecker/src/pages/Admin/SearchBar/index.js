import React from 'react';
import styled from 'styled-components';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const SearchBarLayout = styled.div`
  margin-top: 2vh;
  display: flex;
  justify-content: center;
  margin-bottom: 5vh;
`;

export default function SearchBar() {
  return (
    <SearchBarLayout>
      <TextField sx={{ width: '30vw', fontSize: '20vh' }} label="Search" variant="outlined" />
      <Button sx={{ width: '5vw', height: '56px' }} variant="contained">
        검색
      </Button>
    </SearchBarLayout>
  );
}
