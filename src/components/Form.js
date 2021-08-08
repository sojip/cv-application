import { Component } from "react";
import PersonalInfos from "../components/PersonalInfos";
import "../styles/Form.css";
import Education from "./Education";
import Experience from "./Experience";
import uniqid from "uniqid";
import Curriculum from "./Curriculum";
import React from "react";

export default class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            personal: {
              firstName: "",
              lastName: "",
              title: "",
              photo:"",
              address: "",
              phoneNumber: "",
              email: "",
              description: ""
            },
            experience: {
              id: uniqid(),
              position: "",
              company: "",
              city: "",
              from: "",
              to: ""
            },
            education: {
              id: uniqid(),
              university: "",
              city: "",
              degree: "",
              subject: "",
              from: "",
              to: ""
            },
            experiences: [],
            educations: [],
            isSubmited: false,
          };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.addExperience = this.addExperience.bind(this);
        this.removeExperience = this.removeExperience.bind(this);
        this.addEducation = this.addEducation.bind(this);
        this.removeEducation = this.removeEducation.bind(this);
        this.fileInput = React.createRef();
    }

    componentDidMount() {
        this.setState({
            experiences: [this.state.experience],
            educations: [this.state.education]
        })
    }


    handleSubmit(e) {
        e.preventDefault();
        this.setState({
            isSubmited: true,
            personal: {
                ...this.state.personal,
                photo: URL.createObjectURL(this.fileInput.current.files[0])
            }
        })

    }

    handleChange(e) {
        const target = e.target;
        const name = target.name;
        const value = target.value;

        if(e.target.parentNode.className === "personalInfos") {
            this.setState({     
                ...this.state,  
                personal: {
                    ...this.state.personal,
                    [name] : value
                }
            })
        }

        else if(e.target.parentNode.className === "experienceInfos") {
            this.setState({
                ...this.state,
                experience: {
                    id: e.target.parentNode.id,
                    [name] : value,
                }
            }, () => {
                let exp = this.state.experience;
                this.setState ({
                    experiences: this.state.experiences.map((experience) => {
                        if(experience.id === e.target.parentNode.id) {
                            return {
                                ...experience,
                                ...exp
                            }
                        }
                        else return experience
                    })
                }, () => console.log(this.state))
            })
        }

        else if(e.target.parentNode.className === "educationInfos") {
            this.setState({
                ...this.state,
                education: {
                    id: e.target.parentNode.id,
                    [name] : value,
                }
            }, () => {
                let educ = this.state.education;
                this.setState ({
                    educations: this.state.educations.map((education) => {
                        if(education.id === e.target.parentNode.id) {
                            return {
                                ...education,
                                ...educ
                            }
                        }
                        else return education
                    })
                }, () => console.log(this.state))
            })
        }
        
    }

    addExperience(e) {
        this.setState({
            ...this.state,
            experience:{
                id: uniqid(),
              position: "",
              company: "",
              city: "",
              from: "",
              to: ""
            }
        }, () => {
            this.setState({
                ...this.state,
                experiences: [...this.state.experiences, this.state.experience]
            })
        }) 
  
    }

    removeExperience(e) {
        this.setState({
            ...this.state,
            experiences: this.state.experiences.filter((experience) => {
                return this.state.experiences.indexOf(experience) + 1 !== this.state.experiences.length;
            })
        })
    }

    addEducation(e) {
        this.setState({
            ...this.state,
            education:{
                id: uniqid(),
                university: "",
                city: "",
                degree: "",
                subject: "",
                from: "",
                to: ""
            }
        }, () => {
            this.setState({
                ...this.state,
                educations: [...this.state.educations, this.state.education]
            })
        }) 
    }

    removeEducation(e) {
        this.setState({
            ...this.state,
            educations: this.state.educations.filter((education) => {
                return this.state.educations.indexOf(education) + 1 !== this.state.educations.length;
            })
        })
    }

    render() {
        let domExperiences = this.state.experiences.map((experience) => { 
            return <Experience handleChange={this.handleChange} id={experience.id} key={experience.id} />
        })

        let domEducations = this.state.educations.map((education) => {
            return <Education handleChange={this.handleChange} id={education.id} key={education.id} />
        })
        
        return(
            <div>
                <div className="form">
                    <form onSubmit={this.handleSubmit}>
                        <PersonalInfos handleChange={this.handleChange} fileInput={this.fileInput}/>
                        <h2>Experience</h2>
                        {domExperiences}
                        <input onClick={this.addExperience} type="button" value="+" />
                        <input onClick={this.removeExperience} type="button" value="-" />
                        <h2>Education</h2>
                        {domEducations}
                        <input onClick={this.addEducation} type="button" value="+" />
                        <input onClick={this.removeEducation} type="button" value="-" />
                        <input type="submit" value="Submit" />
                    </form>
                </div>
                {this.state.isSubmited === true && 
                <Curriculum datas = {this.state} />
                }
                
            </div>
            
        )
    }
}