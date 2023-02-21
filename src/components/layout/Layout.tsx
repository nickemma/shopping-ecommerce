import React from 'react';
import Header from '../header/Header';
import Router from '../../router/Router';
import Footer from '../footer/Footer';

const Layout = () => {
  return (
    <>
      <Header />
      <main className="main">
        <Router />
      </main>
      <Footer />
    </>
  );
};

export default Layout;
