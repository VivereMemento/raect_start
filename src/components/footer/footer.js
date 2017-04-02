import React from 'react';
import { Navigation } from '../index';
import { Link } from 'react-router';
const logo = require('../../img/logo.png');

export default class Footer extends React.Component {

    render() {
        return (
            <footer className='footer'>
                <div className='container flex-container'>
                    <div className='logo'>
                        <figure className='logo__img-wrap'>
                            <Link className='logo__link' to='/home'>
                                <img className='logo__img' src={ logo } />
                            </Link>
                        </figure>
                    </div>
                    <Navigation mods='footer__nav-link_mods'/>
                    <div className='copyright'>
                        <span className='copyright__text'>&copy;2010 - 2016 All rights reserved</span>
                    </div>
                </div>
            </footer>
        );
    }

}
