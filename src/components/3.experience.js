import React, { Component } from 'react';
import Timelines from './components/timelines';

export default class Experience extends Component {
    render() {
        return (
            <div className="app">
                <Timelines />
                <div className='title'>Experience</div>
                <div className='subtitle'>Programmer in National Company</div>
                <div className='subtitle-small'>My experience in Microstock and Digital Marketing</div>
            </div>
        )
    }
}
