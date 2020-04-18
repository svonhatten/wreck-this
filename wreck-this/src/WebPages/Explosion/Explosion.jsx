import React, { Component } from 'react';
import {Link} from "react-router-dom";
import './stylesExplosion.css';
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
                    <div className={'navBarContainerExplosion'}>
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
                    <div className={'mainExplosion'}>
                        <div className={'mainText'}>Blow it Up!</div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Explosion;