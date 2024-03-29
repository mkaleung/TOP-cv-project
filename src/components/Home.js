import React, { Component } from 'react';
import Navbar from './Navbar';
import Profile from './Profile';
import ProfileInput from './ProfileInput';
import About from './About';
import AboutInput from './AboutInput';
import Experience from './Experience';
import Education from './Education';
import Footer from './Footer'
import M from 'materialize-css';

export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            profileInput: false,
            aboutInput: false,
        }
        this.profileEdit = this.profileEdit.bind(this);
        this.aboutEdit = this.aboutEdit.bind(this);
    }

    profileEdit() {
        this.setState({ profileInput: !this.state.profileInput })
    }
    aboutEdit() {
        this.setState({ aboutInput: !this.state.aboutInput })
    }

    textareaAutoResize(textarea) {
        M.textareaAutoResize(textarea);
    }

    render() {
        return (
            <>
            <section>
                <Navbar />
                <div className="container">
                        <div className="col s12 m8 l9">
                            {this.state.profileInput ? 
                                <ProfileInput toggle={this.profileEdit} />
                                    :
                                <Profile toggle={this.profileEdit} />
                            }
                            {this.state.aboutInput ?
                                <AboutInput toggle={this.aboutEdit} onLoad={this.textareaAutoResize}/>
                                    :
                                <About toggle={this.aboutEdit}/>
                            }
                            <Education onLoad={this.textareaAutoResize} />   
                            <Experience onLoad={this.textareaAutoResize} />                         
                        </div>
                </div>
                <Footer />
            </section>
            </>
        )
    }
}