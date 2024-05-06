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

    const goProject = (e) => {
        window.open(`${mainData[e].live}`, '_blank');
    }

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
                <p></p>
                <h2 className="section-sub-3">- Check out my main Projects</h2>
                <div className="main-projects">
                    {
                        mainData && mainData.length>0 ?
                        <>
                            <div className="project-1" onClick={(e) => goProject(0)}>
                                <div className="left-side-1">
                                    <img src={mainData[0].img} alt="" className='main-project-img'/>
                                </div>
                                <div className="right-side-1">
                                <div className="right-content-1">
                                <div className="main-project-header-icon">
                                                <p><FaFolder /></p>
                                                <div className="main-links">
                                                    <a href={mainData[0].github} target='_blank'><FiGithub /></a>
                                                    <a href={mainData[0].live} target='_blank'><RiExternalLinkLine /></a>
                                                </div>
                                            </div>
                                    <div className="main-project-header"><h1>{mainData[0].title}</h1></div>
                                    <div className="main-project-txt">{mainData[0].description}</div>
                                    <div className="main-project-tech">
                                    {   
                                    mainData[0].tech.map((tech) => {
                                        return(
                                            <>
                                                <p>{tech}</p>
                                            </>
                                        )
                                    })
                                    }
                                    </div>
                                </div>
                                </div>
                            </div>
                            <div className="project-2" onClick={(e) => goProject(1)}>
                                <div className="left-side-2">
                                    <div className="left-content-2">
                                        <div className="main-project-header"><h1>{mainData[1].title}</h1></div>
                                        <div className="main-project-txt">{mainData[1].description}</div>
                                        <div className="main-project-tech">
                                            {   
                                            mainData[1].tech.map((tech) => {
                                                return(
                                                    <>
                                                        <p>{tech}</p>
                                                    </>
                                                )
                                            })
                                            }
                                        </div>
                                    </div>
                                </div>
                                <div className="right-side-2">
                                    <img src={mainData[1].img} alt="" className='main-project-img'/>
                                </div>
                            </div>
                            <div className="project-3" onClick={(e) => goProject(2)}>
                                <div className="left-side-3">
                                    <img src={mainData[2].img} alt="" className='main-project-img'/>
                                </div>
                                <div className="right-side-3">
                                    <div className="right-content-3">
                                        <div className="main-project-header"><h1>{mainData[2].title}</h1></div>
                                        <div className="main-project-txt">{mainData[2].description}</div>
                                        <div className="main-project-tech">
                                            {   
                                            mainData[2].tech.map((tech) => {
                                                return(
                                                    <>
                                                        <p>{tech}</p>
                                                    </>
                                                )
                                            })
                                            }
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </>
                        :
                        <>
                        </>
                    }
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