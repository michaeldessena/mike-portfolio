import React from "react";
import './Work.css'

class Work extends React.Component {

    showDescirptiion = () => {

    };

    render(){
        return (
            <div className="work_wrapper">
                <h1 className="work_title">Work</h1>
                {/* <div className="work_gallery"> */}
                    {/* <div className="work_prev"></div> */}
                <div className="work_card">
                    <h2> Luxoft (DXC) </h2>
                    <h3> Software Developer - Automotive </h3>
                    <h4> 09/2022 - Present</h4>
                    <p> As a <b>Python Software Developer</b> at Luxoft, in the role of a consultant, I have been entrusted with the responsibility of developing/mantain <b>Key Performance Indicators (KPIs)</b> for an esteemed German car-maker, specifically focused on safety-related scenarios for <b>autonomous driving applications</b>.<br/>
                        Operating within an <b>Agile Scrum</b> environment I collaborate closely with client teams to deliver high-quality software solutions within the defined timelines. My work involves leveraging Python programming expertise to develop software solutions that drive business performance and ensure the safety of autonomous driving systems. 
                        <br/>
                        Luxoft fosters a <b>highly international</b> working environment, and as a consultant, I engage in frequent interactions with stakeholders from diverse cultural backgrounds, working mainly in <b>English</b>.
                    </p>
                    <div className="work_skills">
                        <div> Python </div>
                        <div> Git & GitHub</div>
                        <div> Data Analysis </div>
                        <div> Key Performance Indicator (KPI) </div>
                        <div> Numpy & Pandas </div>
                        <div> Docker </div>
                        <div> Bazel </div>
                        <div> Grafana </div>
                        <div> Data Visualization</div>
                        <div> Jenkins </div>
                        <div> Airflow </div>
                        <div> Agile Scrum </div>
                    </div>
                </div>

                <div className="work_card">
                    <h2> Compact Muon Solenoid Experiment - LHC (CERN)</h2>
                    <h3> Masther Thesis Student </h3>
                    <h4> 09/2021 - 06/2022</h4>
                    <p>
                    Dedicated and highly motivated student researcher who contributed to the CMS experiment at CERN for the completion of a master's thesis. 
                    Focused on studying high-energy <b>hadron-hadron collisions</b> to analyze the <b>underlying event</b> and is composition, defined as additional activity unrelated to the primary hard scattering in an high energy collision. 
                    I used <b>machine learning</b> techniques (e.g. Neural Networks) and <b>Python</b> programming to tune <b>Monte Carlo models' parameters</b>, optimizing their accuracy and reliability. 
                    Collaborated with a diverse team of scientists and researchers to analyze complex data and draw meaningful conclusions, by participating in team meeting weekly. <br/>
                    Strong analytical and problem-solving skills, combined with a passion for cutting-edge physics research.
                    Opportunity to work in the most internation environment ever, and the top experiment in the world for nuclear and subnuclear physics research.
                    </p>
                    <div className="work_skills">
                        <div> Particle Physics </div>
                        <div> Mathematics & Physics </div>
                        <div> Data Analysis </div>
                        <div> Monte Carlo simulation </div>
                        <div> Python </div>
                        <div> Machine Learning - Neural Networks </div>
                        <div> LaTeX </div>
                    </div>
                </div>

                {/* <div className="work_next"></div> */}
                {/* </div> */}
            </div>
        );
    }
}

export default Work;