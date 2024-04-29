import React from 'react';
import { Navbar, Home, About, Tech, Projects, Contact } from '../components';

export const Main = () => {

    return(
        <>
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