import React, { useState, useEffect} from "react";


export const Tech = () => {
    const [data, setData] = useState([]);

    const getTechData = () => {
        fetch('./tech.json')
        .then(function(response) {
            return response.json();
        })
        .then(function(myJson){
            setData(myJson);
        });
    };

    useEffect(()=>{
        getTechData()
    },[]);

    return(
        <>
        <div className="tech">
            <div className="div-content">
            <h2 className="section-sub-2">- Technology I use</h2>
                <div className="tech-box">
                {
                data && data.length>0 && data.map((item) =>{
                    return(
                        <div className='tech' key={item.key} id={item.id} onClick={() => checkTech(item.id)}>
                            <img src={item.image} alt="Tech" className="tech-img"/>
                            <p className="tech-txt">{item.name}</p>
                        </div>
                        )
                    }
                    )
                }
                </div>
            </div>
        </div>
        </>
    );
};