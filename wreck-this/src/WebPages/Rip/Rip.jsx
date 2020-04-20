import React, { Component } from 'react';
import {Link} from "react-router-dom";
import bubble from './bubble2.jpg';
import rip from './rip2.jpg';
import explosion from './explosion2.jpg';
import './stylesRip.css';

class Rip extends Component{
    render() { 
        return (
            <div>
                {/* container the entire bubble page */}
                <div className={'ripPage'}> 
                    {/* nav bar */}
                    <div className={'navBarContainerRip'}>
                        {/* logo */}
                        <div className={'navBarLogoContainer'}>
                            <div className={'navBarLogo'}>logo</div>
                            <div className={'navBarText'}>
                                <Link to="/">Wreck it</Link>
                            </div>
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
                    {/* main section */}
                    <div className={'mainRip'}>
                        <div className={'mainText'}>Rip It Out!</div>
                    </div>
                </div>
            </div>
        );
  }
}
export default Rip;
