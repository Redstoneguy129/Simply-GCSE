import React, { Component } from 'react'
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom'
import M from 'materialize-css'

export class Navbar extends Component {
    componentDidMount() {
        document.addEventListener('DOMContentLoaded', function() {
            M.Sidenav.init(document.querySelectorAll('.sidenav'));
            M.Dropdown.init(document.querySelectorAll('.dropdown-trigger'), {coverTrigger: false})
        })
    }
    render() {
        return (
            <div>
                <div className="nav-fixed">
                    <ul id="dropdown1" className="dropdown-content">
                        <li><Link className="black-text" to="/physics">Physics</Link></li>
                        <li><Link className="black-text" to="/chemistry">Chemistry</Link></li>
                        <li><Link className="black-text" to="/biology">Biology</Link></li>
                    </ul>
                    <ul id="dropdown2" className="dropdown-content">
                        <li><Link className="black-text" to="/physics">Physics</Link></li>
                        <li><Link className="black-text" to="/chemistry">Chemistry</Link></li>
                        <li><Link className="black-text" to="/biology">Biology</Link></li>
                    </ul>
                    <nav>
                        <div className="nav-wrapper brown lighten-2">
                            <Link to="/" className="brand-logo center">Simply GCSE</Link>
                            <a data-target="mobile" className="sidenav-trigger fakelink"><i className="material-icons">menu</i></a>
                            <ul className="sidenav" id="mobile">
                                <li><Link to="/english">English</Link></li>
                                <li><Link to="/mathematics">Mathematics</Link></li>
                                <li><a className="dropdown-trigger fakelink" data-target="dropdown1">Science<i className="material-icons right">arrow_drop_down</i></a></li>
                            </ul>
                            <ul id="nav-mobile" className="left hide-on-med-and-down">
                                <li><Link to="/english">English</Link></li>
                                <li><Link to="/mathematics">Mathematics</Link></li>
                                <li><a className="dropdown-trigger fakelink" data-target="dropdown2">Science<i className="material-icons right">arrow_drop_down</i></a></li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </div>
        )
    }
}

export default Navbar
