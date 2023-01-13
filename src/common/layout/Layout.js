import Footer from '../components/Footer';
import Header from '../components/Header';
import React from 'react';

const Layout = ({ children }) => {
    return (
        <>
            <Header />
            {children}
            <Footer
                contactName='John Doe'
                contactNumber='+6281234567890'
            />
        </>
    );
};

export default Layout;