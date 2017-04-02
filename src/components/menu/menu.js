import React from 'react';
import { Link } from 'react-router';

const MENUITEMS = [
    { name: 'Delivery', link: '/delivery' },
    { name: 'Faq', link: '/faq' },
    { name: 'Help', link: '/help' }
];

export default class Menu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            stateArray: MENUITEMS
        };
    }

    renderItems(item, index) {
        return  <li className='menu__item' key={index}>
                    <Link className='menu__link' to={item.link}>{item.name}</Link>
                </li>;
    }

    render() {
        return (
            <div className='menu'>
                <ul className='menu__list'>
                    { this.state.stateArray.map(this.renderItems.bind(this)) }
                </ul>
            </div>
        );
    }
}
