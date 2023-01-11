import React from 'react';
import Main from '../../page/Main';
// import NotFound from '../../page/NotFound';
import { Route, Routes } from 'react-router-dom';

export default function Router() {
    return (
        <Routes>
            <Route exact path="/" element={<Main />} />
            <Route path="/home" element={<Main />} />
            <Route path="*" element={<Main />} />
        </Routes>
    );
};