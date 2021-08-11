import React, { Component } from 'react';
import './App.css';
import Nav from "./components/Nav";
import Form from './components/Form';
import uniqid from "uniqid";
import Curriculum from "./components/Curriculum";

class App extends Component {
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
      this.reset = this.reset.bind(this);
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
            })
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
            })
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

  reset(e) {
    let form = document.querySelector("form");
    form.reset();
    this.setState({
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
    }, () => {
        this.setState({
          experiences: [this.state.experience],
          educations: [this.state.education]
      })
    })
  }



  render() {
    return (
      <div className="content">
        <Nav />
        <Form 
        experiences={this.state.experiences} 
        educations={this.state.educations} 
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
        fileInput={this.fileInput}
        addEducation={this.addEducation}
        addExperience={this.addExperience}
        removeEducation={this.removeEducation}
        removeExperience={this.removeExperience}
        reset={this.reset} />
        {this.state.isSubmited === true && 
        <Curriculum datas = {this.state} />}
      </div>     
    ); 
  }   
}

export default App;
