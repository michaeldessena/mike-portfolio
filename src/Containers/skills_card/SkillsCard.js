import React from "react";
import './SkillsCard.css'

class SkillsCard extends React.Component {

    render(){
        
        let value = this.props.value;
        const percentage = (v) => ({
            backgroundImage: 'conic-gradient(transparent 0%, transparent ' + v + '%, var(--primary-color) ' + v +'%, var(--primary-color) 100%)',
        });
        
        console.log(percentage(value))

        return (
            <div className="skills_card">
                <div className="skill_card_text">
                    <h1>{this.props.title}</h1>
                </div>
                <div class="indicator_wrapper">
                    <div class="indicator_circle1">
                    <div class="indicator_circle1_over" style={percentage(value)}>
                        <div class="indicator_circle2">
                            <h2> {this.props.value}% </h2>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="skills_card_children_div">
                    {this.props.children}
                </div>
                
            </div>
        );
    }
}

export default SkillsCard;