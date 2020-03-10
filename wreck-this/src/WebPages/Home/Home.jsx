import React, { Component } from 'react';
// import { homeStyles } from './styles.js';
import './styles.css';

class Home extends Component {
    render() {
        return (
            <div>
                <div className={'home'}>
                    {/* navigation bar */}
                    <div className={'navBarContainer'}>
                        navbar
                        {/* logo */}
                        {/* WreckIt title */}
                        {/* container for destruction options on right side */}
                    </div>
                    {/* title section (the black part of screen) */}
                    <div className={'titleContainer'}>
                        <div>Wreck This Website</div>
                        <div>* * * The site to relieve all your stress * * *</div>
                    </div>
                    {/* bottom section (everything below title section) */}
                    <div className={'bodyContainer'}>
                        Destruction Choices
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;

