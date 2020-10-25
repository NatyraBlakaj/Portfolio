import React, {Component} from 'react';
import './AboutMe.css'

class AboutMe extends Component {
    render() {
        return (
            <div className="about-me">
                <div className="card w-50 mt-5">
                    <div className="card-body">
                        <h4 className="card-title text-center pt-3">About Me</h4>
                        <p className="card-text pt-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            At atque deleniti deserunt dolorem eos, facere id molestiae molestias nemo
                            nostrum possimus ratione repudiandae sit soluta totam! Aspernatur dolores
                            eligendi laudantium.</p>

                    </div>
                </div>
            </div>
        );
    }
}

export default AboutMe;