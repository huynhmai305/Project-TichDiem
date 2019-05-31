import React, { Component } from 'react';
var DefaultLayout = require('../layouts/default');

class Post extends Component {
    render() {
        return (
            <DefaultLayout title="Quản lý bài viết">
                <section id="services">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="float-right">
                                    <button className="btn btn-success" data-toggle="modal" data-target="#add_new_record_modal"><i className="fas fa-pencil-alt"></i> Thêm bài viết</button>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12">
                                <h4>Danh sách bài viết</h4>
                                <div className="records_content">
                                    <table className="table">
                                        <thead>
                                            <tr>
                                                <th>ID</th>
                                                <th>Tiêu đề</th>
                                                <th>Nội dung</th>
                                                <th>Ngày nhập</th>
                                                <th>Hành động</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                                <td>
                                                    <button type="button" className="btn btn-info" data-dismiss="modal"><i className="fas fa-edit"> Sửa</i></button>
                                                    <button type="button" className="btn btn-danger" onclick="addRecord()"><i className="fas fa-trash"> Xóa</i></button>
                                                </td>

                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="modal fade" id="add_new_record_modal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
                        <div className="modal-dialog" role="document">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h4 className="modal-title" id="myModalLabel">Thêm bài viết</h4>
                                    <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button>

                                </div>

                                <div className="modal-body">

                                    <div className="form-group">
                                        <label for="first_name">Tiêu đề</label>
                                        <input type="text" id="first_name" placeholder="First Name" className="form-control" />
                                    </div>

                                    <div className="form-group">
                                        <label for="last_name">Nội dung</label>
                                        <input type="text" id="last_name" placeholder="Last Name" className="form-control" />
                                    </div>

                                    <div className="form-group">
                                        <label for="email">Email Address</label>
                                        <input type="text" id="email" placeholder="Email Address" className="form-control" />
                                    </div>

                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-default" data-dismiss="modal">Hủy bỏ</button>
                                    <button type="button" className="btn btn-primary" onclick="addRecord()">Thêm mới</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </DefaultLayout>
        );
    }
}

export default Post;