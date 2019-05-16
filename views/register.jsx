var React = require('react');
var DefaultLayout = require('./layouts/default'); 

class Register extends React.Component {
  
    render() {
        return (
            <DefaultLayout title="Đăng ký">
                <div className=" container-fluid login">
                
                    <div className="row">
                        <div className="col-md-12 col-sm-12 col-xs-12">
                            <form className="form-regrester">
                                <div className="form-group">
                                    <label htmlFor="exampleInputName">Họ tên</label>
                                    <input type="text" className="form-control is-valid" id="exampleInputName" placeholder="Họ tên" required/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="exampleInputAddress">Địa chỉ</label>
                                    <input type="text" className="form-control is-valid" id="exampleInputAddress" placeholder="Địa chỉ" required/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="exampleInputPhone">Số điện thoại</label>
                                    <input type="tel" className="form-control is-valid" id="exampleInputPhone" placeholder="Số điện thoại" required/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="exampleInputEmail1">Email</label>
                                    <input type="email" className="form-control is-valid" id="exampleInputEmail1" placeholder="Email" required/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="exampleInputPassword1">Password</label>
                                    <input type="password" className="form-control is-valid" id="exampleInputPassword1" placeholder="Password" required/>
                                </div>

                                <a className="btn btn-danger btn-block" href="/">Đăng ký</a>
                            </form>
                        </div>
                    </div>
                </div>
            </DefaultLayout>
        );
    }
}

module.exports = Register;