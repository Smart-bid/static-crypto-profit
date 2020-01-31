import React, { Component } from 'react'
import Benefits from "./Benefits";

import elder from './img/alexander-elder.jpg'
import seykota from './img/ed-seykota.jpg'
import oneil from './img/william-o-neil.jpg'
import buffet from './img/warren-buffett.jpg'

export default class FamousNames extends Component {
    constructor(props) {
        super(props);
        this.state = {
            images: {
                elder,
                seykota,
                oneil,
                buffet
            }
        }
    }

    render () {
        let languageManager = this.props.languageManager();
        return (
            <section className="green-section">
                <div className="famousNames">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <h2 className="famous-title">{languageManager.famous_title}</h2>
                                <div className="row">
                                    <h4 className="famous-description col-lg-8 offset-lg-2">{languageManager.famous_description}</h4>
                                </div>
                            </div>
                            {
                                languageManager.famous_body.map((item, index) => {
                                    return (
                                        <div className="col-md-6 famous-people" key={index}>
                                            <div className="img">
                                                <img src={this.state.images[item.img]} alt={item.name}/>
                                            </div>
                                            <div className="single-person-info">
                                                <h3 className="name">{item.name}</h3>
                                                <p>{item.text}</p>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>

                <Benefits languageManager={this.props.languageManager}/>

            </section>
        )
    }
}