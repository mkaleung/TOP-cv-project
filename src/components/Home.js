import React, { Component } from 'react';
import Navbar from './Navbar';
import Profile from './Profile';
import ProfileInput from './ProfileInput';
import About from './About';
import AboutInput from './AboutInput';
import Experience from './Experience';
import ExperienceInput from './ExperienceInput';
import M from 'materialize-css';

export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            profileInput: false,
            aboutInput: false,
            experienceInput: false,
        }
        this.profileEdit = this.profileEdit.bind(this);
        this.aboutEdit = this.aboutEdit.bind(this);
        this.experienceEdit = this.experienceEdit.bind(this);
    }

    profileEdit() {
        this.setState({ profileInput: !this.state.profileInput })
    }
    aboutEdit() {
        this.setState({ aboutInput: !this.state.aboutInput })
    }
    experienceEdit() {
        this.setState({ experienceInput: !this.state.experienceInput })
    }

    textareaAutoResize(textarea) {
        M.textareaAutoResize(textarea);
    }

    render() {
        return (
            <section>
                <Navbar />
                <div className="container">
                    <div className="row">
                        <div className="col s12 m4 l3">
                            {this.state.profileInput ? 
                                <ProfileInput toggle={this.profileEdit} />
                                    :
                                <Profile toggle={this.profileEdit} />
                            }
                        </div>
                        <div className="col s12 m8 l9">
                            {this.state.aboutInput ?
                                <AboutInput toggle={this.aboutEdit} onLoad={this.textareaAutoResize}/>
                                    :
                                <About toggle={this.aboutEdit}/>
                            }
                            {this.state.experienceInput ? 
                                <ExperienceInput toggle={this.experienceEdit} onLoad={this.textareaAutoResize} />
                                    :
                                <Experience toggle={this.experienceEdit} />
                            }
                            {/* <Education /> */}                            
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}