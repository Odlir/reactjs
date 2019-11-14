import React, { Component } from "react";

class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-light bg-light">
                <a className="navbar-brand" href="#">
                    NavBar <span className="badge badge-pill badge-secondary">{this.props.totaCounters}</span>
                </a>
            </nav>
        );
    }
}

export default Navbar;
