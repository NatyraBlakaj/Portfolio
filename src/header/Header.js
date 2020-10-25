import React, {Component} from 'react';
import Router, {Link} from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import './Header.css';

class Header extends Component {
    render() {
        return (


            <div className="mainDiv">
                <nav className="navbar navbar-expand-sm bg-light navbar-light border-bottom">
                    <h1 className="ml-5">Logo</h1>
                    <ul className="navbar-nav ml-auto mr-5 pr-5">
                        <li className="nav-item">
                            <Link className="nav-link pr-3" to="/" >Home</Link>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link pr-3 "href="/projects">Projects</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link pr-3" href="/contact">Contact </a>
                        </li>
                    </ul>
                </nav>
            </div>
        )
    }
}

export default Header;