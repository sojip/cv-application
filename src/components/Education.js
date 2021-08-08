import { Component } from "react";

export default class Education extends Component {
    render() {
        const { handleChange, id } = this.props;
        return(
            <div className="educationInfos" id={id}>
                <input type="text" placeholder="University name" name="university" onChange={handleChange} /> <br></br>
                <input type="text" placeholder="City" name="city" onChange={handleChange} /> <br></br>
                <input type="text" placeholder="Degree" name="degree" onChange={handleChange} /> <br></br>
                <input type="text" placeholder="Subject" name="subject" onChange={handleChange} /> <br></br>
                <input type="number" placeholder="From" name="from" min="1900" onChange={handleChange} /> <br></br> 
                <input type="number" placeholder="To" name="to" min="1900" onChange={handleChange} /> <br></br>
            </div>
        )
    }
}