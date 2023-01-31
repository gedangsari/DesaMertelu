import React from 'react';
import Main from '../../page/Main';
import NotFound from '../../page/NotFound';
import Umkm from '../../page/Umkm';
import About from '../../page/About';
import Potential from '../../page/Potential';
import Plant from '../../page/Plant';
import { Route, Routes } from 'react-router-dom';

export default function Router() {
    return (
        <Routes>
            <Route exact path='/' element={<Main />} />
            <Route path='/home' element={<Main />} />
            <Route path='/pariwisata' element={<Main />} />
            <Route path='/umkm' element={<Umkm />} />
            <Route path='/potential' element={<Potential />} />
            <Route path='/about' element={<About />} />
            <Route path='/plant/:id' element={<Plant />} />
            <Route path='*' element={<NotFound />} />
        </Routes>
    );
};