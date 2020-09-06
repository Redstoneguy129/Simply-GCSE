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
                <ul id="dropdown1" className="dropdown-content">
                    <li><a className="black-text" href="https://google.co.uk/">Physics</a></li>
                    <li><a className="black-text" href="https://google.co.uk/">Chemistry</a></li>
                    <li><a className="black-text" href="https://google.co.uk/">Biology</a></li>
                </ul>
                <ul className="sidenav" id="mobile">
                    <li><a href="https://google.co.uk/">English</a></li>
                    <li><a href="https://google.co.uk/">Maths</a></li>
                    <li><a className="dropdown-trigger" href="https://google.co.uk/" data-target="dropdown1">Science<i className="material-icons right">arrow_drop_down</i></a></li>
                </ul>
                <div className="nav-fixed">
                    <nav>
                        <div className="nav-wrapper brown lighten-2">
                            <a href="https://google.co.uk/" className="brand-logo center">Simply GCSE</a>
                            <a href="#" data-target="mobile" className="sidenav-trigger"><i className="material-icons">menu</i></a>
                            <ul id="nav-mobile" className="left hide-on-med-and-down">
                                <li><a href="https://google.co.uk/">English</a></li>
                                <li><a href="https://google.co.uk/">Maths</a></li>
                                <li><a className="dropdown-trigger" href="https://google.co.uk/" data-target="dropdown1">Science<i className="material-icons right">arrow_drop_down</i></a></li>
                            </ul>
                            <ul className="right hide-on-med-and-down">
                                <a>Hours Left: 8</a>
                            </ul>
                        </div>
                    </nav>
                </div>
            </div>
        )
    }
}

export default Navbar
