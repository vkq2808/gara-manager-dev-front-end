import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from '../pages/login/Login';
import Regist from '../pages/regist/Regist';

const LoginRoute = () => (
    <Routes>=
        <Route path='login' element={<Login />} />
        <Route path='regist' element={<Regist />} />
    </Routes>
);

export default LoginRoute;
