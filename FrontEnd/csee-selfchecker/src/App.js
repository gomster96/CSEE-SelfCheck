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
        <Route exact path="/csc/" element={<Login />} />
        <Route path="/csc/register" element={<Register />} />
        <Route path="/csc/adminregister" element={<AdminRegister />} />
        <Route path="/csc/main" element={<Main />} />
        <Route path="/csc/SelfCheck" element={<SelfCheck />} />
        <Route path="/csc/admin" element={<Admin />} />
        <Route path="/csc/google-login" element={<LoginGoogle />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
