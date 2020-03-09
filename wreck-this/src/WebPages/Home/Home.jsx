import React, { Component } from 'react';
// import { homeStyles } from './styles.js';
import './styles.css';

class Home extends Component {
    render() {
        return (
            <div>
                <div className={'home'}>
                    {/* navigation bar */}
                    <div className={'navBarContainer'}>navbar</div>
                    {/* title section (the black part of screen) */}
                    <div className={'titleContainer'}>Wreck This Website</div>
                    <div className={'bodyContainer'}>Destruction Choices</div>
                    {/* bottom section (everything below title section) */}
                </div>
            </div>
        );
    }
}

export default Home;

