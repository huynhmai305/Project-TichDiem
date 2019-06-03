
import React, { Component } from 'react';
import Modal from './modal';

class Navigation extends Component {
  render() {
    return (
  
        <nav className="navbar navbar-expand-lg navbar-dark fixed-top navbar-shrink " id="mainNav">
          <div className="container">
            <a className="navbar-brand " href="/">H&M </a>
            <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive"
             aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
              Menu
                 <i className="fas fa-bars"></i>
            </button>
            <div className="collapse navbar-collapse" id="navbarResponsive">
              <ul className="navbar-nav text-uppercase ml-auto">
                <li className="nav-item">
                  <a className="nav-link js-scroll-trigger" href="#about">Giới thiệu</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link js-scroll-trigger" href="#quytrinhtichdiem">Quy trình tích điểm</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link js-scroll-trigger" href="#client">Cửa hàng</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link js-scroll-trigger" href="#contact">Liên lạc</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link js-scroll-trigger" href="/login" > Đăng nhập <i className="fas fa-sign-in-alt"></i></a>
                </li>

              </ul>
            </div>
          </div>
        </nav>
    );
  }
}

export default Navigation;