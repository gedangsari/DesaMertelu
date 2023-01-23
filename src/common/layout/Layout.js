import Footer from '../components/Footer';
import Header from '../components/Header';
import React from 'react';
import ScrollButton from '../components/ScrollButton';

const Layout = ({ children, ...props }) => {
    return (
        <>
            <Header {...props} />
            {children}
            <Footer
                contactName='John Doe'
                contactNumber='+6281234567890'
                contactEmail='johndoe@mertelu.com'
            />
            <ScrollButton />
        </>
    );
};

export default Layout;