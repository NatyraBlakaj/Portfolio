import React, {Component} from 'react';
import './Home.css';
import AboutMe from "./AboutMe";

class Home extends Component {
    render() {
        return (
            <div>
                <div className=" row  intro">
                    <h2 className="col-4 offset-2 text-light intro-text">hello <br/> I'm Natyra</h2>

                    <img className="float-right mr-5" id="intro-image" src="/img/intro-image.jpg" width="50px"/>
                </div>
            <AboutMe/>
                <button type="button" className="btn btn-danger mt-5">Click here te see my work</button>
            </div>
        )
    }
}

export default Home;