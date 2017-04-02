import React from 'react';
import { Link } from 'react-router';

const CURRENCY = [
    { name: 'rub', link: '/rub' },
    { name: 'uah', link: '/uah' },
    { name: 'usd', link: '/usd' },
    { name: 'eur', link: '/eur' }
];

export default class Currency extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            stateArray: CURRENCY
        };
    }

    renderItems(item, index) {
        return  <li key={index} className='currency__item'>
                    <Link className='currency__link' to={item.link}>{item.name}</Link>
                </li>;
    }

    render() {
        return (
            <div className='currency'>
                <div className='currency__current-wrap'>
                    <span className='currency__current'>Dollars</span>
                </div>
                <ul className='currency__list'>
                    { this.state.stateArray.map(this.renderItems.bind(this)) }
                </ul>
            </div>
        );
    }
}
