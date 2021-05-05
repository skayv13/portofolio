import React, { Component } from 'react';
import { ImgAboutMe } from '../assets';

export default class About extends Component {
    render() {
        return (
            <div className="app">
                <ImgAboutMe />
                <div className='title'>About me</div>
                <div className='subtitle'>Jakarta, Indonesia</div>
                <div className='subtitle-small'>13 Juni 1985</div>
            </div>
        )
    }
}
