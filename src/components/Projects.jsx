import React, { useState, useEffect} from 'react';
import { FiGithub } from "react-icons/fi";
import { RiExternalLinkLine } from "react-icons/ri";
import { FaFolder } from "react-icons/fa";

export const Projects = () => {
    const [mainData, setMainData] = useState([]);
    const [sideData, setSideData] = useState([]);

    const getMainData = () => {
        fetch('./mainProject.json')
        .then(function(response) {
            return response.json();
        })
        .then(function(myJson){
            setMainData(myJson);
        });
    };

    const getSideData = () => {
        fetch('./sideProject.json')
        .then(function(response) {
            return response.json();
        })
        .then(function(myJson){
            console.log(myJson[0].tech)
            setSideData(myJson);
        });
    };

    useEffect(()=>{
        getMainData()
        getSideData()
    },[]);

    return(
        <>
        <div>
        <div className="sep" id='projects'></div>  
            <div className="div-content projects">
                <h2 className="section-sub">- Projects</h2>
                <p>Being a blablabla</p>
                <h2 className="section-sub-3">- Check out my main Projects</h2>
                <div className="main-projects">
                    <div className="main-project-box">
                        <div className="left-side"></div>
                        <div className="right-side">
                            <div className="main-project-header">Chat App</div>
                        </div>
                    </div>
                </div>
                <h2 className='section-sub-3'>Other Stuff</h2>
                <div className="rest-projects">
                    {
                        sideData && sideData.length>0 && sideData.map((project) => {
                            return(
                                <div>
                                    <a href={project.live} target='_blank' key={project.key}>
                                        <div className="rest-project-box">
                                            <div className="rest-project-header">
                                                <p><FaFolder /></p>
                                                <div className="rest-links">
                                                    <a href={project.github} target='_blank'><FiGithub /></a>
                                                    <a href={project.live} target='_blank'><RiExternalLinkLine /></a>
                                                </div>
                                            </div>
                                            <h1 className="rest-project-title">{project.title}</h1>
                                            <p className="rest-project-desc">{project.description}</p>
                                            <div className="rest-project-tech">
                                                {   
                                                    project.tech.map((tech) => {
                                                        return(
                                                            <>
                                                                <p>{tech}</p>
                                                            </>
                                                        )
                                                    })
                                                }
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
        </>
    );
};