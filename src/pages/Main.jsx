import React from 'react';
import { Navbar, Home, About, Tech, Projects, Contact, NavbarMob } from '../components';

export const Main = () => {

    return(
        <>
        <NavbarMob />
        <div className="main-container">
            <Navbar/>
            <Home />
            <About />
            <Tech />
            <Projects />
            <Contact />
        </div>
        </>
    );
};