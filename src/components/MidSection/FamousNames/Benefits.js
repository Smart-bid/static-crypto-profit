import React, { Component } from 'react'

//Images
import performance from './img/cpu.svg'
import technology from './img/app.svg'
import trading from './img/lightbulb.svg'

export default class Benefits extends Component {
    constructor(props) {
        super(props);
        this.state = {
            images: {
                performance,
                technology,
                trading
            }
        }
    }
    render() {
        let languageManager = this.props.languageManager();
        return(
            <div className="Benefits">
                <div className="container">
                    <div className="benefits-list">
                        {
                            languageManager.benefits_list.map((item,i)=>{
                                return(
                                    <div className="benefit-item" key={i}>
                                        <div className="image">
                                            <img src={this.state.images[item.img]} alt=""/>
                                        </div>
                                        <div className="description">
                                            <h3>{item.title}</h3>
                                            <p>
                                                {item.descr}
                                            </p>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        )
    }
}