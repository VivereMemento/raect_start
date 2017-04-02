import React, { PropTypes } from 'react';
import { Link } from 'react-router';

const NAVITEMS = [
    { name: 'Home', link: '/home' },
    { name: 'Catalog', link: '/catalog' },
    { name: 'News', link: '/news' },
    { name: 'Sale', link: '/sale' },
    { name: 'About', link: '/about' },
    { name: 'Contact', link: '/contact' }
];

export default class Navigation extends React.Component {
    static propTypes = {
        mods: PropTypes.string
    };

    constructor(props) {
        super(props);
        this.state = {
            stateArray: NAVITEMS
        };
    }

    renderItems(item, index) {
        const sale = ( item.name === 'Sale' ) ? 'nav__link_color' : '';
        const footerMods = this.props.mods;
        return  <li
                    className='nav__item'
                    key={index}
                    >
                    <Link className={['nav__link', sale, footerMods].join(' ')} to={item.link} activeClassName='active'>{item.name}</Link>
                </li>;
    }

    render() {
        return (
            <nav className='nav'>
                <ul className='nav__list'>
                    { this.state.stateArray.map(this.renderItems.bind(this)) }
                </ul>
            </nav>
        );
    }
}
