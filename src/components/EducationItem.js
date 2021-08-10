import { Component } from "react";

export default class EducationItem extends Component {
    render() {
        const {from, to, university, city, degree, subject } = this.props;
        return(
            <div style={{display:'flex', gap: '5px', margin:'5px 0px'}}>
                <span>{from}</span><span>-</span><span>{to}</span>
                <div style={{paddingLeft: '50px', width: '100%'}}>
                    <p>{university}, <span>{city}</span></p>
                    <p><span style={{fontFamily:'Montserrat, sans-serif'}}>Degree:</span> {degree}</p>
                    <p><span style={{fontFamily:'Montserrat, sans-serif'}}>Subject:</span> {subject}</p>
                </div>
            </div>
        )
    }
}