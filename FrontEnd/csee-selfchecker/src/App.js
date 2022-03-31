import React from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Login from './pages/Login';
import Admin from './pages/Admin';
import Register from './pages/Register';
import SelfCheck from './pages/SelfCheck';
import AdminRegister from './pages/Register/Admin';
import Main from './pages/Main';
import LoginGoogle from './pages/Login/Googlebutton';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/adminregister" element={<AdminRegister />} />
        <Route path="/main" element={<Main />} />
        <Route path="/selfcheck" element={<SelfCheck />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/google-login" element={<LoginGoogle />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
