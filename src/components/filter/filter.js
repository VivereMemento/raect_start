import React from 'react';

const FILTERITEMS = [
    { name: 'All', link: '/home' },
    { name: 'T-shirts', link: '/catalog' },
    { name: 'Sweaters', link: '/news' },
    { name: 'Shorts', link: '/sale' },
    { name: 'Jackets', link: '/about' },
    { name: 'Accessoires', link: '/contact' }
];

export default class Filter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            stateArray: FILTERITEMS
        };
    }

    renderItems(item, index) {
        const active = (item.name === 'All') ? 'active' : '';
        return  <li className={['tabs__item', active].join(' ')} key={index}>
                    <a className='tabs__link' href='#'>{item.name}</a>
                </li>;
    }

    render() {
        return (
            <div className='tabs'>
                <ul className='tabs__list'>
                    { this.state.stateArray.map(this.renderItems.bind(this)) }
                </ul>
            </div>
        );
    }
}
