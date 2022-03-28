import React from 'react';
import styled from 'styled-components';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export default function SearchBar() {
  return (
    <SearchBarLayout>
      <TextField sx={{ width: '15vw', fontSize: '14' }} label="Search" variant="outlined" size="small" />
      <Button sx={{ width: '3vw' }} variant="contained">
        검색
      </Button>
    </SearchBarLayout>
  );
}

const SearchBarLayout = styled.div`
  margin-top: 2vh;
  display: flex;
  justify-content: center;
  margin-bottom: 5vh;
  font-size: 16px;
`;
