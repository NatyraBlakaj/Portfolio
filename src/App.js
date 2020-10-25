import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './home/Home';
import Header from './header/Header';
import Projects from './projects/Projects';
import Contact from './contact/Contact';
import Footer from './footer/Footer';
import './App.css';
import SingleProject from "./projects/singleProject/singleProject";

import {Provider} from './projects/projectContext'

function App() {
    return (
        <Provider>
            <Router>
                <div className="App">
                    <Header/>
                    <Switch>
                        <Route exact path="/" component={Home}/>
                        <Route exact path="/projects" component={Projects}/>
                        <Route exact path="/contact" component={Contact}/>
                        <Route path={`/project/:id`} component={SingleProject}/>
                    </Switch>
                    <Footer/>
                </div>
            </Router>
        </Provider>
    );
}

export default App;
