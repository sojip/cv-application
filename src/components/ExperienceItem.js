import { Component } from "react";

export default class ExperienceItem extends Component {
    render() {
        const {from, to, position, company} = this.props;
        return(
            <div style={{display:'flex', gap: '5px', margin:'5px 0px'}}>
                <span>{from}</span><span>-</span><span>{to}</span>
                <div style={{paddingLeft: '50px', width: '100%'}}>
                    <p>{position}</p>
                    <p>{company}</p>
                </div>
            </div>
        )
    }
}