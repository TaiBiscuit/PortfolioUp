import React from 'react';
import { MdMail } from "react-icons/md";
import { BsGithub } from "react-icons/bs"; 
import { ImLinkedin } from "react-icons/im";

export const Contact = () => {

    return(
        <>
        <div>
        <div className="sep" id='contact'></div>  
            <div className="div-content-contact projects">
                <h2 className="section-sub">- Get in touch
                </h2>
                <div className="contact-rest">
                    <div className="contact-top">
                        <div className='contact-main-section'>
                        <p className='contact-bottom-title'>Send me an e-mail</p>
                        <div className="contact-link">
                            <a href="mailto: nicolas.l.campos1@gmail.com" className="contact-link" target="_blank">
                                <MdMail size={50} className="contact-top-icon"/> 
                            </a></div>
                        </div>
                    </div>
                    <div className='contact-bottom'>
                            <p className='contact-bottom-title'>I am also in:</p>
                            <ul className="contact-bottom-ul">
                                <li><div className="contact-link">
                                    <a href="https://github.com/TaiBiscuit" className="contact-link" target="_blank">
                                    <BsGithub size={50} className="contact-icon"/> 
                                    </a>
                                    <p className="contact-txt" >TaiBiscuit</p>
                                    </div>
                                </li>
                                <li> 
                                    <div className="contact-link">
                                        <a href="https://www.linkedin.com/in/nicolas-cam-pos/" className="contact-link" target="_blank">
                                            <ImLinkedin size={50} className="contact-icon" /> 
                                        </a>
                                        <p className="contact-txt"> Nicolás Campos </p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                </div>
            </div>
        </div>
        </>
    );
};