import React, { Component } from 'react'
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
                        <li><a className="black-text" href="#">Physics</a></li>
                        <li><a className="black-text" href="#">Chemistry</a></li>
                        <li><a className="black-text" href="#">Biology</a></li>
                    </ul>
                    <ul id="dropdown2" className="dropdown-content">
                        <li><a className="black-text" href="#">Physics</a></li>
                        <li><a className="black-text" href="#">Chemistry</a></li>
                        <li><a className="black-text" href="#">Biology</a></li>
                    </ul>
                    <nav>
                        <div className="nav-wrapper brown lighten-2">
                            <a href="#" className="brand-logo center">Simply GCSE</a>
                            <a href="#" data-target="mobile" className="sidenav-trigger"><i className="material-icons">menu</i></a>
                            <ul className="sidenav" id="mobile">
                                <li><a href="#">English</a></li>
                                <li><a href="#">Maths</a></li>
                                <li><a className="dropdown-trigger" href="#" data-target="dropdown1">Science<i className="material-icons right">arrow_drop_down</i></a></li>
                            </ul>
                            <ul id="nav-mobile" className="left hide-on-med-and-down">
                                <li><a href="#">English</a></li>
                                <li><a href="#">Maths</a></li>
                                <li><a className="dropdown-trigger" href="#" data-target="dropdown2">Science<i className="material-icons right">arrow_drop_down</i></a></li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </div>
        )
    }
}

export default Navbar
