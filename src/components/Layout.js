import * as React from 'react';
import Header from './Header';
import Footer from './Footer';
import Container from './Container';

const Layout = ({ children }) => (
    <>
        <Header />
        <Container>
            {children}
        </Container>
        <Footer />
    </>
);

export default Layout;