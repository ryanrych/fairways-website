import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Header';
import Footer from '../Footer';

export default function Layout({ darkMode }) {
  return (
    <div className={`${darkMode ? 'cs_dark' : ''}`}>
      <Header
        logoUrl='/images/logo_white.svg'
        actionBtnText="Download"
        actionBtnUrl="/light/contact"
      />
      <Outlet />
      <Footer />
    </div>
  );
}
