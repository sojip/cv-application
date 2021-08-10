import { Component } from "react";
import PersonalInfos from "../components/PersonalInfos";
import "../styles/Form.css";
import Education from "./Education";
import Experience from "./Experience";


export default class Form extends Component {

    render() {
        let domExperiences = this.props.experiences.map((experience) => { 
            return <Experience handleChange={this.props.handleChange} id={experience.id} key={experience.id} />
        })

        let domEducations = this.props.educations.map((education) => {
            return <Education handleChange={this.props.handleChange} id={education.id} key={education.id} />
        })
        
        return(
            <div>
                <div className="form">
                    <form onSubmit={this.props.handleSubmit}>
                        <PersonalInfos handleChange={this.props.handleChange} fileInput={this.props.fileInput}/>
                        <h2>Experience</h2>
                        {domExperiences}
                        <input onClick={this.props.addExperience} type="button" value="+" />
                        <input onClick={this.props.removeExperience} type="button" value="-" />
                        <h2>Education</h2>
                        {domEducations}
                        <input onClick={this.props.addEducation} type="button" value="+" />
                        <input onClick={this.props.removeEducation} type="button" value="-" />
                        <input type="submit" value="Submit" />
                        <input onClick={this.props.reset} type="button" value="Reset" />
                    </form>
                </div>    
            </div>
            
        )
    }
}