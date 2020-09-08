import React, { Component } from 'react'

export class Dashboard extends Component {
    render() {
        return (
            <div>
                <br/>
                <div className="row valign-wrapper">
                    <div className="col s6 offset-s3 valign">
                        <div className="card-panel brown lighten-2">
                            <span className="flow-text white-text">
                                Hello fellow GCSE student! 
                                We hope you have been revising hard and are enjoying the revision site. 
                                We suggest checking the footer for info and links!
                            </span>
                        </div>
                    </div>
                </div>
                <div className="row valign-wrapper">
                    <div className="col s6 offset-s3">
                        <iframe src="https://discordapp.com/widget?id=752976992433078274&theme=dark" width="400" height="500" allowtransparency="true" frameborder="0" sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"></iframe>
                    </div>
                    <div className="col s12">
                        <iframe src="https://titanembeds.com/embed/752976992433078274?css=164&defaultchannel=752994839985127474" height="500" width="450" frameborder="0"></iframe>
                    </div>
                </div>
            </div>
        )
    }
}

export default Dashboard
