import React, { Component } from 'react';
import './styles.css';
import bubble from './bubble1.jpg';
import rip from './rip1.jpg';
import explosion from './explosion1.jpg';

class Bubble extends Component {
    render() {
        return (
            <div>
                {/* container the entire bubble page */}
                <div className={'bubblePage'}> 
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
                        <div className={'mainText'}>Bubble It Out!</div>
                    </div>
                </div>
            </div>
            // <div>
            //     <div className={'bubblePage'}>
            //         <div className={'test1'}>helloworld</div>
            //         <div className={'test2'}>test</div>
            //         <div className={'test3'}>test3</div>
            //     </div>
            // </div>
        );
    }
}

export default Bubble;