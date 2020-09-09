import React, { Component } from 'react'

import '../../style/dashboard.css'

export default class Dashboard extends Component {
    render() {
        return (
            <div>
                <br/><br/><br/>
                <div className="row">
                    <div className="col s12 l3">
                        <iframe title="discord" src="https://discordapp.com/widget?id=752976992433078274&theme=dark" width="350" height="520" allowtransparency="true" frameBorder="0" sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"></iframe>
                    </div>
                    <div className="col s12 l6">
                        <div className="card-panel brown lighten-2">
                            <span className="flow-text white-text">
                                Hello fellow GCSE students! 
                                We hope you have been revising hard and are enjoying the revision site. 
                                We suggest checking the footer for info and links!
                            </span>
                        </div>
                    </div>
                    <div className="col s12 l3">
                        <iframe src="https://titanembeds.com/embed/752976992433078274?css=164&defaultchannel=752994839985127474" height="520" width="350" frameBorder="0"></iframe>
                    </div>
                </div>
                <br/><br/><br/>
            </div>
        )
    }
}