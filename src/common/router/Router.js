import React from 'react';
import Main from '../../page/Main';
import Umkm from '../../page/Umkm';
import { Route, Routes } from 'react-router-dom';

export default function Router() {
    return (
        <Routes>
            <Route exact path="/" element={<Main />} />
            <Route path="/pariwisata" element={<Main />} />
            <Route path="/umkm" element={<Umkm />} />
            <Route path="*" element={<Main />} />
        </Routes>
    );
};