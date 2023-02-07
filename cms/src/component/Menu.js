import React from 'react';
import { Link } from 'react-router-dom';

const Menu = () => {
    return (
        <div>
            <Link to='/login' className="button is-success mr-5">
                Login
            </Link>
            <Link to='/contacts' className="button is-success mr-5">
                Kontak
            </Link>
            <Link to='/pariwisata' className="button is-success mr-5">
                Konten Pariwisata
            </Link>
            <Link to='/umkm' className="button is-success mr-5">
                Konten UMKM
            </Link>
            <Link to='/plants' className="button is-success mr-5">
                Deskripsi Tanaman
            </Link>
        </div>
    );
};

export default Menu;