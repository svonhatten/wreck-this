import React, { Component } from 'react';
import {Link} from "react-router-dom";
import bubble from './bubble1.jpg';
import rip from './rip1.jpg';
import explosion from './explosion1.jpg';
import './stylesBubble.css';

class Bubble extends Component {
    render() { 
        return (
            <div>
                {/* container the entire bubble page */}
                <div className={'bubblePage'}> 
                    {/* nav bar */}
                    <div className={'navBarContainerBubble'}>
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
                            <li> <Link to="/bubble">Bubble</Link> </li>
                            </div>
                            <div className={'navBarDestrLogo'}>
                                <img src={rip} alt="rip"/>
                            </div>
                            <div className={'navBarDestrText'}> Rip </div>
                            <div className={'navBarDestrLogo'}>
                                <img src={explosion} alt="explosion"/>
                            </div>
                            <div className={'navBarDestrText'}>
                                <li> <Link to="/explosion">Explosion</Link> </li>
                            </div>
                        </div>
                    </div>
                    {/* main section */}
                    <div className={'mainBubble'}>
                        <div className={'mainText'}>Bubble It Out!</div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Bubble;