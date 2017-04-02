import React, { PropTypes } from 'react';
import { Header, Footer } from './components/index';

export default class App extends React.Component {

    static propTypes = {
        children: PropTypes.any.isRequired
    };
    static path = '/';

    render() {
        return (
            <div style={{height: 100 + '%'}}>
                <div className='wrapper'>
                    <Header />
                    { this.props.children }
                </div>
                <Footer />
            </div>
        );
    }

}
