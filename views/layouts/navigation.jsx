
 import React, { Component } from 'react';
 
 class Navigation extends Component {
     render() {
         return (
             <div>
             <nav className="navbar navbar-expand-lg navbar-dark fixed-top navbar-shrink" id="mainNav">
             <div className="container">
               <a className="navbar-brand js-scroll-trigger" href="/"><img src="/images/Mcoin.jpg" className="logo"/> H&M </a>
               <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                 Menu
                 <i className="fas fa-bars"></i>
               </button>
               <div className="collapse navbar-collapse nav" id="navbarResponsive">
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
                     <a className="nav-link js-scroll-trigger" href="/login">Đăng nhập</a>
                   </li>
                 </ul>
               </div>
             </div>
           </nav>
                 
             </div>
         );
     }
 }
 
 export default Navigation;