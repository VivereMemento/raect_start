import React from 'react';
import { Navigation, Menu, Currency, Languages } from '../index';
import { Link } from 'react-router';
const logo = require('../../img/logo.png');

export default class Header extends React.Component {

    render() {
        return (
            <div className='header'>
                <div className='header__top'>
                    <div className='container'>
                        <div className='header__top-left'>
                            <Menu />
                        </div>
                        <div className='header__top-right'>
                            <Currency />
                            <Languages />
                        </div>
                    </div>
                </div>
                <div className='header__bottom'>
                    <div className='container flex-container'>
                        <div className='logo'>
                            <figure className='logo__img-wrap'>
                                <Link className='logo__link' to='/home'>
                                    <img className='logo__img' src={ logo } />
                                </Link>
                            </figure>
                        </div>
                        <Navigation />
                    <div className='user'>
                        <div className='user__bag'>
                            <Link
                                className='user__bag-count'
                                to='#'
                                data-count='2'
                            />
                        </div>
                        <div className='user__search'>
                            <Link className='user__search-link' to='#'/>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        );
    }

}
