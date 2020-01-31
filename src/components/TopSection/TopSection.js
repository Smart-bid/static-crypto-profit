import React, {Component} from 'react'

//Components
import Header from "./Header/Header"
import VideoPlayer from './VideoPlayer/VideoPlayer.js'
import Regform from './Regform/Regform'

//Images
import logo from './Header/logo.svg'
import brandIcons from './brand-icons.png'

export default class TopSection extends Component {

    render() {
        let languageManager = this.props.languageManager(),
            steps = [
                {
                    className: 'cardb',
                    inputs: [
                        {
                            name: 'first_name',
                            type: 'text',
                            className: 'input_small',
                            errorClass: 'inputError',
                            groupClass: 'formClass left'
                        },
                        {
                            name: 'last_name',
                            type: 'text',
                            className: 'input_small',
                            errorClass: 'inputError',
                            groupClass: 'formClass right'
                        },
                        {
                            name: 'email',
                            type: 'email',
                            className: 'input_big',
                            errorClass: 'inputError',
                            groupClass: 'formClass large'
                        },
                        {
                            name: 'phone_number',
                            type: 'phone_number',
                            className: 'input_small',
                            errorClass: 'inputError',
                            groupClass: 'formClass small left'
                        },
                        {
                            name: 'password',
                            type: 'password',
                            className: 'input_small',
                            errorClass: 'inputError',
                            groupClass: 'formClass small right',
                            listClass: 'req_list'
                        },
                        {
                            name: 'agree_1',
                            type: 'checkbox',
                            text: languageManager.agreement_first,
                            //errorClass: 'inputError',
                            links: [{text: 'Privacy Policy', to: '/'}],
                            groupClass: 'checkbox_text'
                        },
                        {
                            name: 'agree_2',
                            type: 'checkbox',
                            text: languageManager.agreement_second[0],
                            //errorClass: 'inputError',
                            links: [
                                {
                                    text: languageManager.agreement_second[1],
                                    to: '/terms'
                                },
                                {
                                    text: languageManager.agreement_second[2],
                                    to: '/privacy'
                                }
                            ],
                            groupClass: 'checkbox_text'
                        }
                    ],
                    button: {
                        className: 'button_forward',
                        text: languageManager.button
                    },
                    supportText: {
                        className: 'support_text',
                        image: {},
                        main: languageManager.more_title[0],
                        tooltip: languageManager.more_decription
                    }
                }
            ];
        return (
            <section className='TopSection'>
                <Header languageManager={this.props.languageManager}/>

                <div className="top-reg" id="top">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-7 col-md-7 col-sm-12 col-xs-12 video-player">
                                <VideoPlayer {...this.props}/>
                            </div>
                            <div className="col-lg-5 col-md-5 col-sm-12 col-xs-12 form">
                                <div className="regform">
                                    <div className="reg-title">
                                        <h3>
                                            {languageManager.title_form[0]}
                                        </h3>
                                        <span>{languageManager.title_form[1]}</span>
                                    </div>
                                    <Regform {...this.props}
                                             loadingLogo={{
                                                 className: 'loading',
                                                 source: logo
                                             }}
                                             material={true}
                                             formSteps={steps}
                                             responseError={{
                                                 className: 'resError',
                                                 button: {
                                                     className: 'button_forward',
                                                     text: 'OK'
                                                 }
                                             }}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="brand-icons">
                    <div className="container">
                        <img src={brandIcons} alt="" draggable={false}/>
                    </div>

                </div>
            </section>
        )
    }
}
