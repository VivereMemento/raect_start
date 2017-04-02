import React from 'react';
import { Form } from '../../components/index';

export default class Subscribe extends React.Component {

    render() {
        return (
            <div className='subscribe'>
                <div className='container'>
                    <div className='title-wrap'>
                        <span className='title'>subscribe</span>
                    <span className='subtitle'>Stay updated on new</span>
                    </div>
                    <Form />
                </div>
            </div>
        );
    }

}
