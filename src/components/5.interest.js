import React, { Component } from 'react';
import { ImgSearching } from '../assets';

export default class Interest extends Component {
    render() {
        return (
            <div className="app">
                <ImgSearching />
                <div className='title'>Interest</div>
                <div className='subtitle'><b>Digital Marketing and Microstock</b></div>
                <div className='subtitle-small'>I want to make money Online</div>
            </div>
        )
    }
}
