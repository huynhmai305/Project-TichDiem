var React = require('react');
var DefaultLayout = require('./layouts/layout_in_out');
class Admin extends React.Component {
    render() {
        return (
            <DefaultLayout title="Admin">
                <div>
                    <nav className="main-nav" id="main-nav">
                        <div className="sidebar-header">
                            <h3>Danh mục</h3>
                        </div>
                        <ul className="list-unstyled">
                            <li>
                                <a href="/admin"><i className="fas fa-home fa-2x"></i></a>
                            </li>
                            <li className="active">
                                <a href="#customerSubmenu" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle"><i className="fas fa-users "></i> Quản lý khách hàng</a>
                                <ul className="collapse list-unstyled" id="customerSubmenu">
                                    <li>
                                        <a href="/admin/user"><i class="fas fa-list-ul "></i> Danh sách khách hàng</a>
                                    </li>
                                    <li>
                                        <a href="/admin/post"><i className="fas fa-pen-alt"></i> Bài review</a>
                                    </li>
                                    <li>
                                        <a href="#"><i className="far fa-comment-alt "></i> Bình luận</a>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a href="#storeSubmenu" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle"><i className="fas fa-store"></i> Quản lý cửa hàng</a>
                                <ul className="collapse list-unstyled" id="storeSubmenu">
                                    <li>
                                        <a href="/admin/store"><i class="fas fa-list-ul "></i> Danh sách cửa hàng</a>
                                    </li>
                                    <li>
                                        <a href="/admin/post"><i className="fas fa-pen-alt "></i> Bài viết</a>
                                    </li>
                                    <li>
                                        <a href="#"><i className="far fa-comment-alt"></i> Bình luận </a>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a href="#"><i class="fas fa-gifts"></i> Quản lý quà đổi thưởng</a>
                            </li>
                        </ul>
                    </nav>
                    <div className="page-wrap">
                        <header className="main-header">
                            <a href="#main-nav" className="open-menu">
                                <i class="fa fa-align-justify" aria-hidden="true"></i>
                            </a>
                            <a href="#" className="close-menu">
                                <i class="fa fa-align-left" aria-hidden="true"></i>
                            </a>
                            <h1>{this.props.title}</h1>
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

module.exports = Admin;