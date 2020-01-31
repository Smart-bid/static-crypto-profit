import React, { Component } from 'react'

import FamousNames from "./FamousNames/FamousNames";
import Faq from "./Faq/Faq";


export default class MidSection extends Component {

    render() {
        return (
            <div className="MidSection">
                <Faq languageManager={this.props.languageManager}/>
                {/*<FamousNames languageManager={this.props.languageManager}/>*/}
            </div>

        )
    }
}
