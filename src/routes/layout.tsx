import React from 'react';
import { Outlet } from 'react-router-dom';
import { HeaderDesktop, BuscaDesktop, MenuMobile, FooterDesktop } from '../components';

const Layout: React.FC = () => (
    <>
        <HeaderDesktop />
        <BuscaDesktop />
        <MenuMobile />
        <Outlet />
        <FooterDesktop />
    </>
);

export default Layout;
