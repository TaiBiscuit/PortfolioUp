import React from 'react';

export const Navbar = () => {

    return(
        <>
        <nav>
            <div className="nav-content">
                <a href="#" className="nav-a"><img src="./icon2.png" alt='Icon' className='nav-icon'/></a>
                <div className="nav-ol">
                    <ol>
                        <a href="#about" className='nav-a'>About me</a>
                        <a href="#projects" className='nav-a'>Projects</a>
                        <a href="#contact" className='nav-a'>Contact</a>
                        <a href="./assets/CV-NICO-EN.pdf" target='_blank' className='nav-a'><button className="nav-btn">Resume</button></a>
                    </ol>
                </div>
            </div>
        </nav>
        </>
    );
};