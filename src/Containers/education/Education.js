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
                            <h2>Master degree</h2>
                            <h3>2019 - 2022</h3>
                            <h2>Università degli studi di Torino</h2>
                            {/* <h2> </h2> */}
                        </span>
                    </div>
                </div>
                <div className="edu_mobile_line"></div>
                {/* Bachelor Degree */}
                <div className="edu_grid">
                    <div className="edu_path_div">
                        <div className="edu_path_div_sphere"></div>
                        <div className="edu_path_div_line"></div>
                    </div>
                    <div className="edu_entry_div">
                        <h1>Physics</h1>
                        <span>
                            <h2>Bachelor degree</h2>
                            <h3>2016 - 2019</h3>
                            <h2>Università degli studi di Torino</h2>
                            {/* <h2></h2> */}
                        </span>
                    </div>
                </div>
                <div className="edu_mobile_line"></div>
                {/* High school */}
                <div className="edu_grid">
                    <div className="edu_path_div">
                        <div className="edu_path_div_sphere"></div>
                        <div className="edu_path_div_line"></div>
                    </div>
                    <div className="edu_entry_div">
                        <h1>Liceo scientifico </h1>
                        <span>
                            <h2>High school</h2> 
                            <h3>2011 - 2016</h3>
                            <h2>Auturo Issel, Finale Ligure</h2>
                            {/* <h2></h2> */}
                        </span>
                    </div>
                </div>
                <div className="edu_mobile_line edu_mobile_line_shadow"></div>
            </div>
        );
    }
}

export default Education;