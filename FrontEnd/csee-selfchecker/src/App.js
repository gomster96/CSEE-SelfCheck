import React from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import styled from 'styled-components';
import Login from './pages/Login';
import Admin from './pages/Admin';
import Register from './pages/Register';
import Main from './pages/Main';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/main" element={<Main />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
