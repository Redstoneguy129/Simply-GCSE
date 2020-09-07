import React, { Component } from 'react'

export class Dashboard extends Component {
    render() {
        return (
            <div>
                <br/><br/><br/>
                <div class="row valign-wrapper">
                    <div class="col s6 offset-s3 valign">
                        <div class="card-panel brown lighten-2">
                            <span class="flow-text white-text">
                                Hello fellow GCSE student! We hope you have been revising hard and are enjoying the revision site.
                            </span>
                        </div>
                    </div>
                </div>
                <div class="row valign-wrapper">
                    <div class="col s6 offset-s3 valign">
                        <div class="card-panel brown lighten-2">
                            <span class="flow-text white-text">
                                So far you have spent 0 hours revising.
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Dashboard
