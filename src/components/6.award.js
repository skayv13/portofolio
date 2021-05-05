import React, { Component } from 'react';
import { ImgCertificate } from '../assets';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCertificate } from '@fortawesome/free-solid-svg-icons';

export default class Award extends Component {
    render() {
        const myCertificate = [
            { name: 'Visual Studio Certification', icon: faCertificate },
            { name: 'Java Fundamental', icon: faCertificate },
        ]
        return (
            <div className="app">
                <ImgCertificate />
                <div className='title'>Awards and Certificates</div>
                <div className='subtitle'>Sertifikat Microsoft</div>
                <div className='subtitle-small'>Pemenang lomba makan kerupuk</div>

                {myCertificate.map((skill, index) => (
                    <div key={index} style={{ margin: '10px 0' }}> <FontAwesomeIcon className='icon' style={{ fontSize: '20px', color: '#532e1c' }} icon={skill.icon} />&nbsp;&nbsp;{skill.name}</div>
                ))}
            </div>
        )
    }
}
