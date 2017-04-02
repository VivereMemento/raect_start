import React from 'react';
import Products from './_products';
import Subscribe from './_subscribe';

export default class Catalog extends React.Component {

    static path = '/catalog';

    render() {
        return (
            <div className='catalog'>
                <div className='container'>
                    <Products />
                    <Subscribe />
                </div>
            </div>
        );
    }

}
