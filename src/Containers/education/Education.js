import React from "react";
import './Education.css'

import thropy from './transparent-trophy-13.png'

class Education extends React.Component {

    render(){
        return (
            <div className="edu_wrapper">
                <h1 className="edu_title">Education</h1>
                {/* Master Degree */}
                <div className="edu_grid">
                    <div className="edu_path_div">
                        <div className="edu_path_div_thropy">
                            <img src={thropy} alt="thropy"></img>
                        </div>
                        <div className="edu_path_div_line"></div>
                    </div>
                    <div className="edu_entry_div">
                        <h1>Nuclear and Subnuclear Physics</h1>
                        <span>
                            <h2>Master degree - Università degli studi di Torino</h2>
                            <h3>2019 - 2022</h3>
                        </span>
                    </div>
                </div>
                {/* Bachelor Degree */}
                <div className="edu_grid">
                    <div className="edu_path_div">
                        <div className="edu_path_div_sphere"></div>
                        <div className="edu_path_div_line"></div>
                    </div>
                    <div className="edu_entry_div">
                        <h1>Physics</h1>
                        <span>
                            <h2>Bachelor degree - Università degli studi di Torino</h2>
                            <h3>2016 - 2019</h3>
                        </span>
                    </div>
                </div>
                {/* High school */}
                <div className="edu_grid">
                    <div className="edu_path_div">
                        <div className="edu_path_div_sphere"></div>
                        <div className="edu_path_div_line"></div>
                    </div>
                    <div className="edu_entry_div">
                        <h1>Liceo scientifico </h1>
                        <span>
                            <h2>High school - Auturo Issel, Finale Ligure</h2>
                            <h3>2011 - 2016</h3>
                        </span>
                    </div>
                </div>
            </div>
        );
    }
}

export default Education;