import React, { Component } from 'react';
import { ImgPortofolio } from '../assets';

export default class Home extends Component {
    render() {
        return (
            <div className="app">
                <ImgPortofolio />
                <div className='title'>Hi Bro</div>
                <div className='subtitle'>Fajar Irvandi</div>
                <div className='subtitle-small'>Pegawai LNSW</div>
                <div className='subtitle-smaller'>Kementerian Keuangan Republik Indonesia</div>
            </div>
        )
    }
}
