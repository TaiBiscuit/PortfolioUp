import React from 'react';

export const About = () => {

    return(
        <>
        <div className="about">
        <div className="sep" id='about'></div>
            <div className="div-content">
                <h2 className="section-sub">- About me
                </h2>
                <div className="about-rest">
                    <div className="about-txt">
                        <div className='about-txt-section'>
                        <p>Hello! My name is Nico, a Frontend developer from Argentina. I am a Computer Science student at UBA (Universidad de Buenos Aires) and learning Fullstack development on my own. I can speak Spanish at a native level, and Japanese at an intermediate level. I consider myself highly adaptable, motivated, responsible and well organized person who is always open to learn new technologies.</p>
                        </div>
{/*                         <div className='about-txt-section'>
                        <p>Hello! My name is Nico, a Frontend developer from Argentina. I am a Computer Science student at UBA (Universidad de Buenos Aires) and learning Fullstack development on my own. I can speak Spanish at a native level, and Japanese at an intermediate level. I consider myself highly adaptable, motivated, responsible and well organized person who is always open to learn new technologies.
                        </p>
                        </div> */}
                    </div>
                    <img src="https://avatars.githubusercontent.com/u/113484831?v=4" alt="" className='about-img'/>
                </div>
            </div>
        </div>
        </>
    );
};