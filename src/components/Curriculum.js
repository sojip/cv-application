import { Component } from "react";
import "../styles/Curriculum.css"
import EducationItem from "./EducationItem";
import ExperienceItem from "./ExperienceItem";

export default class Curriculum extends Component {
    render() {
        const { datas } = this.props;
        const experiences = datas.experiences;
        const educations = datas.educations;
        const experienceItems = experiences.map((experience) => {
            return <ExperienceItem 
                    key={experience.id} 
                    from={experience.from}  
                    to={experience.to}
                    position = {experience.position}
                    company = {experience.company}
                    />
        })
        const EducationItems = educations.map((education) => {
            return <EducationItem
                    key={education.id}
                    from={education.from}
                    to={education.to}
                    university={education.university}
                    city={education.city}
                    degree={education.degree}
                    subject={education.subject}
                    />
        })
        return(
            <div className="curriculum">
                <div className="infos">
                    <h1 className="name">{datas.personal.firstName} {datas.personal.lastName} </h1>
                    <h2 className="title">{datas.personal.title}</h2>
                </div>

                <div className='progress' style={{display: 'flex', gap: '10px'}}>
                    <div className="path">
                        <div className="description">
                            <h3>Description</h3>
                            <p>{datas.personal.description}</p>
                        </div>
                        <div className="experience">
                            <h3>Experience</h3>
                            {experienceItems}
                        </div>
                        <div className="education">
                            <h3>Education</h3>
                            {EducationItems}
                        </div>
                    </div>
                
                    <div className="personal">
                        <div style={{display:'flex', justifyContent: 'center', width:'100%' }}>
                        <img src={datas.personal.photo} style={{width: '100px', height: '100px'}} alt="" />
                        </div>
                        {/* <img src={datas.personal.photo} style={{width: '100px', height: '100px'}} /> */}
                        <h3>Personal Details</h3>
                        <h4>Address</h4>
                        <p>{datas.personal.address}</p>
                        <h4>Phone number</h4>
                        <p>{datas.personal.phoneNumber}</p>
                        <h4>Email</h4>
                        <p>{datas.personal.email}</p>
                    </div>
                </div>
            </div>
        )
    }
}