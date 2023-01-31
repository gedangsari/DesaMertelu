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
                contactName='Nursiyamtoro'
                contactNumber='+6285228868024'
                contactEmail='nursiyamtoro@gmail.com'
            />
            <ScrollButton />
        </>
    );
};

export default Layout;