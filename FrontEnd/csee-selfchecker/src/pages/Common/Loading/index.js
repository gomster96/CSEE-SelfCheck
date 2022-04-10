import * as React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

export default function Loading() {
  return (
    <Box sx={BoxStyle}>
      <CircularProgress />
    </Box>
  );
}

const BoxStyle = {
  display: 'flex',
  justifyContent: 'center',
  position: 'fixed',
  // marginLeft: '4rem',
  width: '60vw',
  height: '15vh',
  background: '#f5f5f5',
  zIndex: '20',
};
