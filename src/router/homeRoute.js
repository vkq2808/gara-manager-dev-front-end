import React from 'react';
import { Routes, Route } from 'react-router-dom';
import UserProfile from '../pages/profile/UserProfile';

const HomeRoute = () => (
    <Routes>=
        <Route path='profile/*' element={<UserProfile />} />
    </Routes>
);

export default HomeRoute;
