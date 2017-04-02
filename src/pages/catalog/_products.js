import React from 'react';
import { Filter } from '../../components/index';
const products_1 = require('../../img/products_1.jpg');
const products_2 = require('../../img/products_2.jpg');
const products_3 = require('../../img/products_3.jpg');
const products_4 = require('../../img/products_4.jpg');
const products_5 = require('../../img/products_5.jpg');
const products_6 = require('../../img/products_6.jpg');
const products_7 = require('../../img/products_7.jpg');
const products_8 = require('../../img/products_8.jpg');

const PRODUCTITEMS = [
    {img: products_1, species: 'shorts', disc: 'Printed swimsuit', price: '$23', sale: '', new: ''},
	{img: products_2, species: 'shorts', disc: 'Jogging bermuda shorts', price: '$12', sale: '$36', new: 'new'},
	{img: products_3, species: 'accessoires', disc: 'Basic beach flip flops', price: '$9', sale: '', new: ''},
	{img: products_4, species: 'accessoires', disc: 'Black sunglasses', price: '$29', sale: '', new: ''},
	{img: products_5, species: 'shirts', disc: 'Long sleeved twill shirt', price: '$20', sale: '', new: ''},
	{img: products_6, species: 'shorts', disc: 'Basic swimsuit', price: '$36', sale: '', new: ''},
	{img: products_7, species: 'shorts', disc: 'Bleached shorts', price: '$12', sale: '', new: ''},
	{img: products_8, species: 't-shirts', disc: 'T-shirt with lower panel', price: '$12', sale: '$32', new: ''}
];

export default class Products extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            stateArray: PRODUCTITEMS
        };
    }

    renderItems(item, index) {
        const salePrice = (item.sale !== '') ? 'sale-price' : '';
        const newProduct = (item.new !== '') ? 'catalog__item_new' : '';
        return  <li className={['catalog__item', newProduct].join(' ')} key={index}>
                    <figure className='catalog__img-wrap'>
                        <a className='catalog__link' href='#'>
                            <img className='catalog__img' src={item.img} />
                        </a>
                        <figcaption className='catalog__discription'>
                            <span className='catalog__discription-text'>{item.disc}</span>
                            <span className={['catalog__discription-price', salePrice].join(' ')} data-actual-price={item.sale}>{item.price}</span>
                        </figcaption>
                    </figure>
                </li>;
    }

    render() {
        return (
            <section className='catalog__products'>
                <div className='heading-wrap'>
                    <h1 className='heading'>Catalog</h1>
                </div>
                <Filter />
                <ul className='catalog__list'>
                    { this.state.stateArray.map(this.renderItems.bind(this)) }
                </ul>
                <div className='catalog__load'>
                    <a className='catalog__load-link' href='#'>Load more...</a>
                </div>
            </section>
        );
    }
}
