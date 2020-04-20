import React, { Component } from 'react';
import {Link} from "react-router-dom";
import './stylesHome.css';
import bubble from './bubble.jpg';
import rip from './rip.jpg';
import explosion from './explosion.jpg';
import bubbleImage from './bubbleImage.jpg.png';
import ripImage from './ripImage.jpg.png';
import explosionImage from './explosionImage.jpg.png';

class Home extends Component {
    render() {
        return (
            <div>
                <div className={'home'}>
                    {/* navigation bar */}
                    <div className={'navBarContainerHome'}>
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
                            <div className={'navBarDestrText'}>
                                <Link to="/bubble">Bubble</Link> 
                            </div>
                            <div className={'navBarDestrLogo'}>
                                <img src={rip} alt="rip"/>
                            </div>
                            <div className={'navBarDestrText'}> 
                                <Link to="/rip">Rip</Link>
                            </div>
                            <div className={'navBarDestrLogo'}>
                                <img src={explosion} alt="explosion"/>
                            </div>
                            <div className={'navBarDestrText'}>
                                <Link to="/explosion">Explosion</Link>
                            </div>
                        </div>
                    </div>
                    {/* title section (the black part of screen) */}
                    <div className={'titleContainerHome'}>
                        <div className={'titleText'}>Wreck This Website</div>
                        <div className={'titleSubtext'}>*   *   *   The site to relieve all your stress   *   *   *</div>
                    </div>
                    {/* bottom section (everything below title section) */}
                    <div className={'bodyContainerHome'}>
                        <div>
                            <div className={'bodyTitleText'}>Choose Your Path</div>
                            <div className={'bodyTitleSubtext'}>Pick the option that most closely relates to how you're feeling</div>
                        </div>
                        {/* destruction choices */}
                        <div className={'destrChoicesContainer'}>
                            {/* Bubbles */}
                            <div className={'bubbleContainer'}>
                                <div className={'bubbleImage'}>
                                    <img src={bubbleImage} alt="bubbleImage"/>
                                </div>
                                <div className={'explosionText'}>
                                    <Link to="/bubble">Bubbles</Link> 
                                </div>
                                <div className={'bubbleSubtext'}>Bubble out that which you hate the most!</div>
                            </div>
                            {/* Tearing */}
                            <div className={'ripContainer'}>
                                <div className={'ripImage'}>
                                    <img src={ripImage} alt="ripImage"/>
                                </div>
                                <div className={'ripText'}>
                                    <Link to="/rip"> Rip the Website to shreds!</Link>
                                </div>
                                <div className={'ripSubtext'}>Rip the website to shreds!</div>
                            </div>
                            {/* Explosion */}
                            <div className={'explosionContainer'}>
                                <div className={'explosionImage'}>
                                    <img src={explosionImage} alt="explosionImage"/>
                                </div>
                                <div className={'explosionText'}>
                                    <Link to="/explosion">EXPLOSIONS!!!!</Link>
                                </div>
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

