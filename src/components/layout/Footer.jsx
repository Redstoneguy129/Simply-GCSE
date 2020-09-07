import React, { Component } from 'react'

export class Footer extends Component {
    render() {
        return (
            <div>
                <footer className="page-footer brown lighten-1">
                    <div className="container">
                        <div className="row">
                        <div className="col l6 s12">
                            <h5 className="white-text">About</h5>
                            <p className="grey-text text-lighten-4">Simply GCSE is a place GCSE students from around the UK can revise for their exams.
                            we provide high quality revision practices and we are developed by GCSE students ourselves.</p>
                        </div>
                        <div className="col l4 offset-l2 s12">
                            <h5 className="white-text">Join Us!</h5>
                            <ul>
                            <li><a className="grey-text text-lighten-3" href="#!">Discord</a></li>
                            </ul>
                        </div>
                        </div>
                    </div>
                    <div className="footer-copyright">
                        <div className="container">
                        © 2020 Simply GCSE
                        </div>
                    </div>
                </footer>
            </div>
        )
    }
}

export default Footer
