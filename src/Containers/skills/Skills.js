import React from "react";
import './Skills.css'
import SkillsCard from '../skills_card/SkillsCard.js'

class Skills extends React.Component {

    render(){
        return (
            <div className="skills_wrapper">
                <h1 className="skills_title">Skills</h1>
                <div className="skills_gallery">
                <SkillsCard title="Physics" value="100">
                    <p> Particle physics </p>
                    <p> Nuclear physics </p>
                    <p> Monte Carlo Simulation </p>
                    <p> Particle detectors </p>
                </SkillsCard>
                <SkillsCard title="Object Oriented Programming" value="95">
                    <p> Python</p>
                    <p> C / C++</p>
                    <p> Java </p>
                    <p> MATLAB </p>
                    <p> Desing Patterns </p>
                </SkillsCard>
                <SkillsCard title="Data Analysis and engineering" value="90">
                    <p> Statistics / Mathematics </p>
                    <p> Data visualization </p>
                    <p> Big data </p>
                    <p> SQL and data query </p>
                    <p> Machine Learning </p>
                    <p> Cloud computing (Google Cloud) </p> 
                </SkillsCard>
                <SkillsCard title="CI/CD tools" value="70">
                    <p> Git & GitHub </p>
                    <p> Bazel (Build and Test) </p>
                    <p> Docker - Containerization </p>
                    <p> Jenkins & Airflow </p>
                </SkillsCard>
                </div>
            </div>
        );
    }
}

export default Skills;