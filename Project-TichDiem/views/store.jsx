import React, { Component } from 'react';
var DefaultLayout = require('./layouts/layout_in_out.jsx')
class Store extends Component {
    render() {
        return (
           <DefaultLayout title="Store">
                <div>
                    <nav className="main-nav" id="main-nav">
                        <div className="sidebar-header">
                            <h5 className="text-center">Hệ thống tích điểm H&M</h5>
                        </div>
                        <ul className="list-unstyled">
                            <li>
                                <a href="/store"><i className="fas fa-home fa-2x"></i></a>
                            </li>
                            <li className="active">
                                <a href="#"><i className="fas fa-edit"></i> Bài viết</a>
                            </li>
                            <li>
                                <a href="#"><i className="fas fa-thumbs-up"></i> Bài review</a>
                            </li>
                            <li>
                                <a href="#"><i className="fas fa-store"></i> Thông tin cửa hàng</a>
                            </li>
                            <li>
                                <a href="/"><i className="fas fa-sign-out-alt"></i> Đăng xuất</a>
                            </li>
                        </ul>
                    </nav>
                    <div className="page-wrap">
                        <header className="main-header fixed-top">
                            <a href="#main-nav" className="open-menu">
                                <i class="fa fa-align-justify" aria-hidden="true"></i>
                            </a>
                            <a href="#" className="close-menu">
                                <i class="fa fa-align-left" aria-hidden="true"></i>
                            </a>
                            <h2>{this.props.title}</h2>
                        </header>
                        <div className="main-content">
                            {this.props.children}
                        </div>
                    </div>
                </div>
            </DefaultLayout>
        );
    }
}

export default Store;