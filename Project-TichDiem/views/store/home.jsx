import React, { Component } from 'react';
import Store from '../store.jsx';
import Card from './card.jsx';

class Home extends Component {
    render() {
        return (
            <Store title="AZTea">
                <Card />
                <div className="row">
                    <img src="/images/logo_AZtea.png" className="rounded-circle offset-md-4 col-4" />
                    <h3 className="text-center col-12" style={{color: '#3c8033'}}>Bắt kịp trào lưu - Dẫn đầu khác biệt</h3>
                </div>
            </Store>
        );
    }
}

export default Home;