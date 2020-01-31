import React, { Component } from 'react'
import logo from '../TopSection/Header/logo.svg'

export default class BottomSection extends Component {
    render() {
        let languageManager = this.props.languageManager();

        return (
            <section className='BottomSection'>
                <div className="footer">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-3 col-md-3 footer-logo-block">
                                <img src={logo} alt="logo" className="footer-logo"/>
                            </div>
                            <div className="col-lg-9 col-md-9 footer-link-block">
                                <div className="links">
                                    <a onClick={() => this.props.pageHandler('privacy')}>Privacy Policy</a>
                                    <a onClick={() => this.props.pageHandler('terms')}>Terms</a>
                                    <a onClick={() => this.props.pageHandler('spam')}>Report Ad / Spam</a>
                                    <span className="copyright">© {new Date().getFullYear()}</span>
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="disclaimer">
                                    <p><span>{languageManager.disclaimer[0]}</span>{languageManager.disclaimer[1]}</p>
                                    <p>{languageManager.disclaimer[2]}</p>
                                    <p>{languageManager.disclaimer[3]}</p>
                                    <p>{languageManager.disclaimer[4]}</p>
                                    <p>{languageManager.disclaimer[5]}</p>
                                    <p>{languageManager.disclaimer[6]}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}
