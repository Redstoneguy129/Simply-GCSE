import React, { Component } from 'react'
import { Link } from 'react-router-dom'
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
                    <ul id="dropdown1science" className="dropdown-content">
                        <li><Link className="black-text" to="/science/physics">Physics</Link></li>
                        <li><Link className="black-text" to="/science/chemistry">Chemistry</Link></li>
                        <li><Link className="black-text" to="/science/biology">Biology</Link></li>
                    </ul>
                    <ul id="dropdown2science" className="dropdown-content">
                        <li><Link className="black-text" to="/science/physics">Physics</Link></li>
                        <li><Link className="black-text" to="/science/chemistry">Chemistry</Link></li>
                        <li><Link className="black-text" to="/science/biology">Biology</Link></li>
                    </ul>
                    <ul id="dropdown1english" className="dropdown-content">
                        <li><Link className="black-text" to="/english/Paper1">Paper 1</Link></li>
                        <li><Link className="black-text" to="/english/Paper2">Paper 2</Link></li>
                    </ul>
                    <ul id="dropdown2english" className="dropdown-content">
                        <li><Link className="black-text" to="/english/Paper1">Paper 1</Link></li>
                        <li><Link className="black-text" to="/english/Paper2">Paper 2</Link></li>
                    </ul>
                    <nav>
                        <div className="nav-wrapper brown lighten-2">
                            <Link to="/" className="brand-logo center">Simply GCSE</Link>
                            <a data-target="mobile" className="sidenav-trigger"><i className="material-icons">menu</i></a>
                            <ul className="sidenav" id="mobile">
                                <li><a className="dropdown-trigger" data-target="dropdown1english">English<i className="material-icons right">arrow_drop_down</i></a></li>
                                <li><Link to="/mathematics">Mathematics</Link></li>
                                <li><a className="dropdown-trigger" data-target="dropdown1science">Science<i className="material-icons right">arrow_drop_down</i></a></li>
                            </ul>
                            <ul id="nav-mobile" className="left hide-on-med-and-down">
                                <li><a className="dropdown-trigger" data-target="dropdown1english">English<i className="material-icons right">arrow_drop_down</i></a></li>
                                <li><Link to="/mathematics">Mathematics</Link></li>
                                <li><a className="dropdown-trigger" data-target="dropdown1science">Science<i className="material-icons right">arrow_drop_down</i></a></li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </div>
        )
    }
}

export default Navbar
