import React, { Component } from 'react';
import './styles.css';
import bubble from './bubble3.jpg';
import rip from './rip3.jpg';
import explosion from './explosion3.jpg';

class Explosion extends Component {
    render() {
        return (
            <div>
                {/* container the entire explosion page */}
                <div className={'explosionPage'}> 
                    {/* nav bar */}
                    <div className={'navBarContainer'}>
                        {/* logo */}
                        <div className={'navBarLogoContainer'}>
                            <div className={'navBarLogo'}>logo</div>
                            <div className={'navBarText'}>WreckIt</div>
                        </div>
                        {/* container for destruction options on right side */}
                        <div className={'navBarDestr'}>
                            <div className={'navBarDestrLogo'}>
                                <img src={bubble} alt="bubble"/>
                            </div>
                            <div className={'navBarDestrText'}>Bubbles</div>
                            <div className={'navBarDestrLogo'}>
                                <img src={rip} alt="rip"/>
                            </div>
                            <div className={'navBarDestrText'}>Rip</div>
                            <div className={'navBarDestrLogo'}>
                                <img src={explosion} alt="explosion"/>
                            </div>
                            <div className={'navBarDestrText'}>Explosion</div>
                        </div>
                    </div>
                    {/* main section */}
                    <div className={'main'}>
                        <div className={'mainText'}>Blow it Up!</div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Explosion;