import React, { Component, Suspense } from 'react';
import routes from './routes';
import { ImgUserCircle } from '../assets';

export default class Layout extends Component {
    constructor(props) {
        super(props);
        this.state = {
            onPage: 0
        }
    }
    renderLoading() {
        return (
            <div className="vw-100 vh-100 d-flex justify-content-center align-items-center">
                <div className="spinner-grow text-dark" role="status">
                    <span className="sr-only">Loading...</span>
                </div>
            </div>
        )
    };
    componentDidMount() {
        window.addEventListener('scroll', this.listenToScroll)
        const splitUrl = window.location.href.split('/')
        if (splitUrl[3]) {
            window.location.assign('/')
        }
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.listenToScroll)
    }

    listenToScroll = () => {
        const winScroll =
            document.body.scrollTop || document.documentElement.scrollTop

        const height =
            document.documentElement.scrollHeight -
            document.documentElement.clientHeight

        const scrolled = winScroll / height

        if (scrolled > 0 && scrolled < 0.167) {
            this.setState({ onPage: 0 })
        } else if (scrolled > 0.167 && scrolled < 0.334) {
            this.setState({ onPage: 1 })
        } else if (scrolled > 0.334 && scrolled < 0.501) {
            this.setState({ onPage: 2 })
        } else if (scrolled > 0.501 && scrolled < 0.668) {
            this.setState({ onPage: 3 })
        } else if (scrolled > 0.668 && scrolled < 0.835) {
            this.setState({ onPage: 4 })
        } else if (scrolled > 0.835 && scrolled < 1) {
            this.setState({ onPage: 5 })
        }
    }
    render() {
        const splitUrl = window.location.href.split('/')
        return (
            <div className="app">
                <Suspense fallback={this.renderLoading}>
                    <div className='sidenav'>
                        <div>
                            <ImgUserCircle style={{ marginBottom: 20 }} />
                            {routes.map((routes, index) => (
                                <a className={this.state.onPage === index ? 'active' : splitUrl && (splitUrl[3] === `#${routes.key}`)} href={`#${routes.key}`} key={index}>{routes.name}</a>
                            ))}
                        </div>
                    </div>
                    <main className='main'>
                        {routes.map((routes, index) => (
                            <React.Fragment key={index}>
                                <div id={routes.key} className='container'>
                                    <routes.component />
                                </div>
                            </React.Fragment>
                        ))}
                        <div className="footer">
                            <div>Blacksky - Portofolio</div>
                        </div>
                    </main>
                </Suspense>
            </div>
        )
    }
}
