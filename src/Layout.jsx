import React from 'react'
import Header from './components/Header/Header';
import SideNavbar from './components/Header/SideNavbar';
import { Outlet } from 'react-router-dom';


const Layout = () => {
  return (
    <>
      <SideNavbar />
      <div className='mainBody'>
        <Header />
        <Outlet />
      </div>
    </>
  )
}

export default Layout
