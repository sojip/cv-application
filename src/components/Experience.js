import { Component } from "react";


export default class Experience extends Component {
    render() {
        const { handleChange, id } = this.props;
        return(
            <div className="experienceInfos" id={id}>
                <input type="text" placeholder="Position" name="position" onChange={handleChange} /> <br></br>
                <input type="text" placeholder="Company" name="company" onChange={handleChange} /> <br></br>
                <input type="text" placeholder="City" name="city" onChange={handleChange} /> <br></br>
                <input type="number" placeholder="From" name="from" min="1900" onChange={handleChange} /> <br></br> 
                <input type="number" placeholder="To" name="to" min="1900" onChange={handleChange} /> <br></br>
            </div>
        )
    }
}