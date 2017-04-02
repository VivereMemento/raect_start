import React from 'react';
import { Link } from 'react-router';

const LENGUAGES = [
    { name: 'ru', link: '/ru' },
    { name: 'ua', link: '/ua' },
    { name: 'en', link: '/en' }
];

export default class Languages extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            stateArray: LENGUAGES
        };
    }

    renderItems(item, index) {
        return  <li key={index} className='languages__item'>
                    <Link className='languages__link' to={item.link}>{item.name}</Link>
                </li>;
    }

    render() {
        return (
            <div className='languages'>
                <div className='languages__current-wrap'>
                    <span className='languages__current'>En</span>
                </div>
                <ul className='languages__list'>
                    { this.state.stateArray.map(this.renderItems.bind(this)) }
                </ul>
            </div>
        );
    }
}
