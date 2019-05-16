var React = require('react');
var DefaultLayout = require('./layouts/default');

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            email: '',
            pw: ''
        };
    }
    // inputChange = (event) => {
    //     this.setState({[event.target.name]:event.target.value});
    // }
    
    render() {
        return (
            <DefaultLayout title="Đăng nhập">
                <div className="container-fluid login">
                    <div className="row">
                        <div className="col-xs-12">
                                <form className="form-container">
                                
                                    <div className="form-group">
                                        <label htmlFor="exampleInputEmail1">Email</label>
                                        <input type="email" className="form-control is-valid" id="exampleInputEmail1" placeholder="Email" name="email" onChange={event => this.inputChange(event)} required/>
                                        <div className="invalid-feedback">
                                            Không tìm thấy tài khoản
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="exampleInputPassword1">Password</label>
                                        <input type="password" className="form-control is-valid" id="exampleInputPassword1" placeholder="Password" name="pw" onChange={event => this.inputChange(event)} required/>
                                        <div className="invalid-feedback">
                                            Không tìm thấy tài khoản
                                        </div>
                                    </div>
                                    <div className="checkbox">
                                        <label>
                                            <input type="checkbox" name="remember" /> Ghi nhớ tôi
                                        </label>
                                    </div>
                                    <button type="submit" className="btn btn-success btn-block">Đăng nhập</button>
                                    <p className="text-center">OR</p>
                                    <a className="btn btn-danger btn-block" href="/register">Đăng ký</a>
                                </form>
                        </div>
                    </div>
                </div>
            </DefaultLayout>
        );
    }
}

module.exports = Login;