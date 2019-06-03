import React, { Component } from 'react';
import Layout from '../customer.jsx';

class Profile extends Component {
    render() {
        return (
            <Layout title='Hệ thống tích điểm H&M'>
                <div className="row">
                    <div className="container">
                        <div className="d-flex justify-content-center h-100">
                            <div className="image_outer_container">
                                <div className="green_icon" />
                                    <div className="image_inner_container">
                                        <img src="https://i0.wp.com/tricksmaze.com/wp-content/uploads/2017/04/Stylish-Girls-Profile-Pictures-36.jpg?resize=300%2C300&ssl=1" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    
                </div>
            </Layout>
        );
    }
}

export default Profile;