import React, { Component } from 'react';
import {Link} from "react-router-dom";
import bubble from './bubble1.jpg';
import rip from './rip1.jpg';
import explosion from './explosion1.jpg';
import './stylesBubble.css';

class Bubble extends Component {

    constructor() {
        super()
        this.onClickAnimate = this.onClickAnimate.bind(this)
       
        const img0 = require('/Users/jean-lucputter/Documents/Client-side/wreck-this/wreck-this/src/WebPages/Bubble/backgroung.png');
        const img1 = require('/Users/jean-lucputter/Documents/Client-side/wreck-this/wreck-this/src/WebPages/Bubble/bubblegif.gif');

        this.state ={
            index:0,
            imageList:[img0,img1]
        }
    }

    onClickAnimate(){
        if (this.state.index + 1 === this.state.imageList.length){
            this.setState({
                index:0
            })
        }else{
            this.setState({
                index:this.state.index + 1
            })
        }
    }


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
                            <div className={'navBarText'}><Link to="/" className={'linktext'}>Wreck it</Link>
                            </div>
                        </div>
                        {/* container for destruction options on right side */}
                        <div className={'navBarDestr'}>
                            <div className={'navBarDestrLogo'}>
                                <img src={bubble} alt="bubble"/>
                            </div>
                            <div className={'navBarDestrText'}>
                             <Link to="/bubble" className={'linktext'}>Bubble</Link>
                            </div>
                            <div className={'navBarDestrLogo'}>
                                <img src={rip} alt="rip"/>
                            </div>
                            <div className={'navBarDestrText'}> 
                            <Link to="/rip" className={'linktext'}>Rip</Link>
                            </div>
                            <div className={'navBarDestrLogo'}>
                                <img src={explosion} alt="explosion"/>
                            </div>
                            <div className={'navBarDestrText'}>
                                <Link to="/explosion"className={'linktext'}>Explosion</Link> 
                            </div>
                        </div>
                    </div>
                    {/* main section */}
                    <div className={'mainBubble'} onClick={this.onClickAnimate}>
                        <img className={'imageback'} src={this.state.imageList[this.state.index]} alt=""/>
                    </div>
                </div>
                </div>
        );
    }
}
export default Bubble;