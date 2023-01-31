import React from 'react';
import Main from '../../page/Main';
import NotFound from '../../page/NotFound';
import Umkm from '../../page/Umkm';
import About from '../../page/About';
import { Route, Routes } from 'react-router-dom';

export default function Router() {
    return (
        <Routes>
            <Route exact path="/" element={<Main />} />
            <Route path="/home" element={<Main />} />
            <Route path="/pariwisata" element={<Main />} />
            <Route path="/umkm" element={<Umkm />} />
            <Route path="*" element={<NotFound />} />
            <Route path='/about' element={<About />} />
        </Routes>
    );
};