import { Component } from 'react';


export default class PersonalInfos extends Component {
    render(){
        const { handleChange, fileInput } = this.props;
        return(
            <div className="personalInfos">
                <h2>Personal Informations</h2>
                <input type="text" placeholder="First name" name="firstName" onChange={handleChange}/> <br></br>
                <input type="text" placeholder="Last name" name="lastName" onChange={handleChange}/> <br></br>
                <input type="text" placeholder="Title" name="title" onChange={handleChange} /> <br></br>
                <input type="text" placeholder="Address" name="address" onChange={handleChange} /> <br></br>
                <input type="tel" placeholder="Phone number" name="phoneNumber" onChange={handleChange} /> <br></br>
                <input type="email" placeholder="Email" name="email" onChange={handleChange} /> <br></br>
                <textarea rows="4" placeholder="Description" name="description" onChange={handleChange} ></textarea>
                <label htmlFor="photo">
                    Photo
                    <input id="photo" type="file" placeholder="Photo" name="photo" ref={fileInput} /> <br></br> 

                </label>
            </div>
        )
    }
}