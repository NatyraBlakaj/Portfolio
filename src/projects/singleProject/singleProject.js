import React, {Component} from 'react';
import './SingleProjects.css'
import {Link} from "react-router-dom";
import {Consumer} from '../projectContext';


class SingleProject extends Component {
    render() {

        let urlValue = this.props.match.params.id;
        return (
            <Consumer>
                {value => {
                    return (
                        <div className="main row">
                            {value.projektet.map(project => (
                                project.id == urlValue ?
                                    <div className="container mt-3">
                                        <Link to={'/projects'}><i className="fas fa-arrow-circle-left"/></Link>
                                        <img className="card-img-top" width="100px" height="360px"
                                             src={project.regularPhoto}
                                             alt="Card image cap"/>
                                        <h1 className=" mt-4">{project.title}</h1>
                                        <a href="https://projekti1-9f46b.web.app/"
                                           className="btn btn-primary mt-3">Demo</a>
                                        <h5 className="r mt-4 technologies">{project.techonologies}</h5>
                                        <p className="mt-3">{project.description}</p>
                                    </div>
                                    : null
                            ))}
                        </div>
                    )
                }}
            </Consumer>
        )
    }
}

export default SingleProject;