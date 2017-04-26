import * as React from "react";
import { Link } from "react-router-dom"

export default class WelcomePage extends React.Component<any, null>
{
    render()
    {
        return <div>
            <h1>JunkFood</h1>
            <h2>Hi there</h2>
            <Link to="/map" >To map</Link>
            <p />
            <Link to="/search" >Search</Link>
            {this.props.children}
        </div>;
    }
}