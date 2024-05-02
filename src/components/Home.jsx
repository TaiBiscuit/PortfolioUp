import React from 'react';

export const Home = () => {

    return(
        <>
        <div className="sep" id='home'></div>
        <div className="home">
            <div className="home-content">
                <p className="sub-sub-title">Hi, my name is</p>
                <h1 className='title'>Nicolás Campos</h1>
                <h1 className="sub-title">A web developer</h1>
                <p className='home-txt'> I am a CS student who really likes technology</p>
                <a href="#projects" className='home-btn-a'><button className="home-btn">Check my projects!</button></a>
            </div>
        </div>
        </>
    );
};