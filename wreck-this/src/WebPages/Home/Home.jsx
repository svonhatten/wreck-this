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
                        {/* logo */}
                        <div className={'navBarLogo'}>logo</div>
                        <div className={'navBarText'}>WreckIt</div>
                        {/* container for destruction options on right side */}
                    </div>
                    {/* title section (the black part of screen) */}
                    <div className={'titleContainer'}>
                        <div className={'titleText'}>Wreck This Website</div>
                        <div className={'titleSubtext'}>* * * The site to relieve all your stress * * *</div>
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

