import React from 'react';

export default class HomePage extends React.Component {

    static path = '/home';

    render() {
        return (
            <div className='home'>
                <div className='container'>
                    <div className='heading-wrap'>
                        <h1 className='heading'>Hello this is Home page</h1>
                    </div>
                </div>
            </div>
        );
    }

}
