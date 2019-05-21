var React = require('react');
var DefaultLayout = require('./layouts/layout_in_out'); 

class Register extends React.Component {
  
    render() {
        return (
            <DefaultLayout title="Đăng ký">
                <div className=" container-fluid login">
                    <div className="row">
                        <div className="col-md-12 col-sm-12 col-xs-12">
                            <form className="form-register" method="POST">
                                <div className="form-group">
                                    <label htmlFor="Name">Họ tên</label>
                                    <input type="text" className="form-control" id="Name" name="ten" placeholder="Họ tên" required/>
                                </div>
                                <div className="row">
                                    <div className="form-group col">
                                        <label htmlFor="Birthday">Ngày sinh</label>
                                        <input type="date" className="form-control is-valid" id="Birthday"  name="ngsinh" placeholder="Ngày sinh" required/>
                                    </div>
                                    <div className="form-group col">
                                        <label htmlFor="Phone">Số điện thoại</label>
                                        <input type="tel" className="form-control is-valid" id="Phone" name="sdt" placeholder="Số điện thoại" required/>
                                    </div> 
                                </div>
                                <div className="form-group">
                                    <label htmlFor="Address">Địa chỉ</label>
                                    <input type="text" className="form-control is-valid" id="Address"  name="diachi" placeholder="Địa chỉ" required/>
                                </div>
                                <div className="row">
                                    <div className="form-group col">
                                        <label htmlFor="Email">Email</label>
                                        <input type="email" className="form-control is-valid" id="Email" name="email" placeholder="Email" required />
                                    </div>
                                    <div className="form-group col">
                                        <label htmlFor="Password">Password</label>
                                        <input type="password" className="form-control is-valid" id="Password" name="password" placeholder="Password" required/>
                                    </div>
                                </div>
                                <div className="row  mb-3">
                                    <label className="col-6">Bạn đăng ký với vai trò là?</label>
                                    <div className="custom-control custom-radio col-3">
                                        <input type="radio" className="custom-control-input" id="client" name="role" value="1" required/>
                                        <label htmlFor="client" className="custom-control-label">Cửa hàng</label>
                                    </div>
                                    <div className="custom-control custom-radio col-3">
                                    <input type="radio" className="custom-control-input" id="customer" name="role" value="2" required/>
                                    <label htmlFor="customer" className="custom-control-label">Khách hàng</label>
                                    </div>
                                    <div className="invalid-feedback">Vui lòng chọn quyền truy cập</div>
                                </div>
                                <input type="submit" className="btn btn-success btn-block" value="ĐĂNG KÝ" id="btnRegister"/>
                                <a className="btn btn-danger btn-block" href="/">THOÁT</a>
                            </form>
                        </div>
                    </div>
                </div>
                
            </DefaultLayout>
        );
    }
}

module.exports = Register;