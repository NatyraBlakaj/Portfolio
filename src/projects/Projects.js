import React, {Component} from 'react';
import './Projects.css';
import {Link} from "react-router-dom";

import {Consumer} from './projectContext';

class Projects extends Component {
    render() {
        return (
            <Consumer>
                {value => {
                    return (
                        <div className="main row ">
                            {value.projektet.map(project => (
                                <div className="card mt-3 ml-4 col-3" key={project.id}>
                                    <img className="card-img-top" src={project.thumbnailPhoto} alt="Card image cap"/>
                                    <div className="card-body">
                                        <h5 className="card-title">{project.title}</h5>
                                        <Link className="btn btn-primary" to={`/project/${project.id}`}>Lexo me
                                            shume</Link>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )
                }}
            </Consumer>
        )
    }
}

export default Projects;
