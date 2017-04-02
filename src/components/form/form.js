import React from 'react';

export default class Form extends React.Component {

    render() {
        return (
            <div className='form-wrap'>
                <form className='form'>
                    <label className='form__label' />
                    <input className='form__input' type='text' placeholder='Your email address' />
                </form>
            </div>
        );
    }

}
