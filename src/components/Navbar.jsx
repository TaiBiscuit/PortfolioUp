import React from 'react';

export const Navbar = () => {

    return(
        <>
        <nav>
            <div className="nav-content">
                <img src="./icon2.png" alt='Icon' className='nav-icon'/>
                <div className="nav-ol">
                    <ol>
                        <a href="#about" className='nav-a'>About me</a>
                        <a href="#projects" className='nav-a'>Projects</a>
                        <a href="#contact" className='nav-a'>Contact</a>
                        <button className="nav-btn">Resume</button>
                    </ol>
                </div>
            </div>
        </nav>
        </>
    );
};