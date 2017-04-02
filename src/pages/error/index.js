import React from 'react';
import { Link } from 'react-router';

export default class ErrorPage extends React.Component {

    render() {
        return (
            <div className='error'>
                <div className='container'>
                    <div className='heading-wrap'>
                        <h1 className='heading'>The page does't exist</h1>
                        <p>Перейти на <Link to='/'>главную</Link></p>
                    </div>
                </div>
            </div>
        );
    }

}
