import React from 'react';
import bubble from './bubble2.jpg';
import rip from './rip2.jpg';
import explosion from './explosion2.jpg';
import './styles.css';
import { Component } from 'react';

class Rip extends Component{
  render() {
    return (
        <div>
            {/* container the entire Rip page */}
            <div className={'ripPage'}> 
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
                    <div className={'mainText'}> Rip it up!!</div>
                </div>
            </div>
        </div>
    );
  }
}
export default Rip;
