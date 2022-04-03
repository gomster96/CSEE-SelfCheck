import React, { useState } from 'react';
import styled from 'styled-components';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export default function SearchBar(props) {
  const [inputData, setInputData] = useState('');

  const onChange = (e) => {
    setInputData(e.target.value);
  };

  const onClick = () => {
    props.setFetchBody((prevState) => {
      return { ...prevState, searchWord: inputData };
    });
  };
  return (
    <SearchBarLayout>
      <TextField sx={{ width: '15vw', fontSize: '14' }} label="Search" variant="outlined" size="small" onChange={onChange} />
      <Button sx={{ width: '3vw' }} variant="contained" onClick={onClick}>
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
