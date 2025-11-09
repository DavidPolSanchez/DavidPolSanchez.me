"use client";
import React from 'react'
import Nav from './Nav';
import MobileNav from './MobileNav';

const ResponsiveNav = () => {

const [showNav, setShowNav] = React.useState(false);

const openNavHandeler = () => setShowNav(true);
const closeNavHandeler = () => setShowNav(false);


  return (
    <div>
      <Nav openNav={openNavHandeler}/>
      <MobileNav showNav={showNav} closeNav={closeNavHandeler}/>
    </div>
  )
}

export default ResponsiveNav;
