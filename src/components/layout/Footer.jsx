import React, { Component } from 'react'
import Cookies from 'universal-cookie'

import '../../style/footer.css'

export class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cookies: new Cookies(),
            hours: 0
        };
        this.setState({hours: parseInt(this.state.cookies.get('hours') || 0)});
    }

    updateHours() {
        if(this.state.cookies.get('hours') == null) {
            this.state.cookies.set('hours', 0);
        }
        let hoursCookie = parseInt(this.state.cookies.get('hours'));
        this.state.cookies.set('hours', hoursCookie+1);
        this.setState({hours: parseInt(this.state.cookies.get('hours'))+1});
        console.log('Updated');
        console.log(typeof(this.state.hours));
    }

    componentDidMount() {
        setInterval(() => {
            let currentTime = Math.floor(Date.now() / 1000);
            if(this.state.cookies.get('lastTime') != null) {
                let lastTime = parseInt(this.state.cookies.get('lastTime'));
                let diffTime = currentTime-lastTime;
                if(diffTime > 3600) {
                    this.state.cookies.set('lastTime', currentTime);
                    this.updateHours();
                }
            } else {
                this.state.cookies.set('lastTime', currentTime);
            }
        }, 1000);
    }

    render() {
        return (
            <div>
                <footer className="page-footer brown lighten-2">
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
                        <p className="grey-text text-lighten-4 right">You have spent {this.state.hours} hours revising this Month!</p>
                        </div>
                    </div>
                </footer>
            </div>
        )
    }
}

export default Footer
