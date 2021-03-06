import React, { Component } from 'react';
import Card from './card.js';
// import Chart from './Chart.js';
var Admin = require('../admin');
class index extends Component {
   
    render() {
        return (
            <Admin title="Hệ thống tích điểm H&M">
                <Card />
                <div className="row">
                    <div className="offset-2 col-8 offset-2">
                        <form className="example">
                            <div className="input-group mb-3">
                                <div className="input-group-prepend">
                                    <span className="input-group-text"><i className="fas fa-search"></i></span>
                                </div>
                                <input type="text" className="form-control is-valid" placeholder="Search..." />
                            </div>
                        </form>
                    </div>
                    <div className="offset-4 col-4 offset-4">
                        <img src="/images/tichdiem.jpg" alt="tichdiem" />
                    </div>
                </div>
                {/*<Chart/>*/}
            </Admin>
        );
    }
}

export default index;