import React, { Component } from 'react';
import './styles.css';
import bubble from './bubble.jpg';
import rip from './rip.jpg';
import explosion from './explosion.jpg';

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
                    {/* title section (the black part of screen) */}
                    <div className={'titleContainer'}>
                        <div className={'titleText'}>Wreck This Website</div>
                        <div className={'titleSubtext'}>*   *   *   The site to relieve all your stress   *   *   *</div>
                    </div>
                    {/* bottom section (everything below title section) */}
                    <div className={'bodyContainer'}>
                        <div className={'bodyTitleText'}>Choose Your Path</div>
                        <div className={'bodyTitleSubtext'}>Pick the option that most closely relates to how you're feeling</div>
                        {/* destruction choices */}
                        <div className={'destrChoicesContainer'}>
                            {/* Bubbles */}
                            <div className={'bubbleContainer'}>
                                <div className={'bubbleImage'}>
                                    Image goes here
                                </div>
                                <div className={'bubbleText'}>Bubbles</div>
                                <div className={'bubbleSubtext'}>Bubble out that which you hate the most!</div>
                            </div>
                            {/* Tearing */}
                            <div className={'ripContainer'}>
                                <div className={'ripImage'}>
                                    Image goes here
                                </div>
                                <div className={'ripText'}>Rip</div>
                                <div className={'ripSubtext'}>Rip the website to shreds!</div>
                            </div>
                            {/* Explosion */}
                            <div className={'explosionContainer'}>
                                <div className={'explosionImage'}>
                                    Image goes here
                                </div>
                                <div className={'explosionText'}>EXPLOSIONS!</div>
                                <div className={'explosionSubtext'}>Make this website go out with a BANG!</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;

