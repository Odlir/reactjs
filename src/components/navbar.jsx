import React, { Component } from "react";
import { Link, NavLink} from "react-router-dom";

class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <Link className="navbar-brand" to="#">
                    OdLir
                </Link>
                <button className="navbar-toggler"
                        data-toggle="collapse"
                        data-target="#navbarNavAltMarkup"
                        aria-controls="#navbarNavAltMarkup"
                        aria-label="#navbarNavAltMarkup"
                        aria-expanded="false"
                        type="button">
                    <span className="navbar-toggler-icon"/>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <NavLink className="nav-item nav-link" to="/movies">
                        Movies <span className="sr-only">(current)</span>
                    </NavLink>
                    <NavLink className="nav-item nav-link active" to="/customers">
                        Customers
                    </NavLink>
                    <NavLink className="nav-item nav-link active" to="/rentals">
                        Rentals
                    </NavLink>
                    <NavLink className="nav-item nav-link active" to="/login">
                        Login
                    </NavLink>
                    {/*<NavLink className="nav-item nav-link active" to="/register">
                        Register
                    </NavLink>*/}
                </div>
            </nav>
        );
    }
}

export default Navbar;
