import * as React from "react";
import { HashRouter, Link } from "react-router-dom"
import { Route } from 'react-router'

const Home = () => (
    <div>
        <h2>Home</h2>
    </div>
)

const About = () => (
    <div>
        <h2>About</h2>
    </div>
)

const Topics = () => (
    <div>
        <h3>Topics</h3>
    </div>
)

const Routes = (
    <HashRouter >
        <div>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/topics">Topics</Link></li>
            </ul>

            <Route exact path="/" component={Home} />
            <Route path="/About" component={About} />
            <Route path="/topics" component={Topics} />
        </div>
    </HashRouter>
)

export default Routes