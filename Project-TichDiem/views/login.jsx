var React = require ('react');
var DefaultLayout = require('./layouts/default');

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.validateForm = this.validateForm.bind(this);
        this.state = {
        email:'',
        password:''
        };
    }
    handleEmailChange(e){
        this.setState({email:e.target.value})
    }
    handlePasswordChange(e){
        this.setState({password:e.target.value})
    }
    validateForm() {
        var x = document.forms["myForm"]["email"].value;
        if (x == "aaa@gmail.com") {
          alert("Email must be filled out");
          return false;
        }
      }
      submit() { 
          return(
          <div>
            <input type="submit" className="btn btn-success btn-block" value="ĐĂNG NHẬP" onClick={this.validateForm}/>
            <p className="text-center">OR</p>
            <a className="btn btn-primary btn-block circle" href="/register">ĐĂNG KÝ</a>
            
        </div>)
    }
      
    render() {
        return (
            <DefaultLayout title="Đăng nhập">
                <div className="container-fluid login">
                    <div className="row">
                        <div className="col-xs-12">
                            <form className="form-container"  method="POST" name="myForm">
                                <div className="form-group">
                                    <label htmlFor="exampleInputEmail1">Email</label>
                                    <input type="email" className="form-control is-valid" id="exampleInputEmail1" onChange={this.handleEmailChange} placeholder="Email" name="email" required autoFocus/>
                                    <div className="invalid-feedback">
                                        Không tìm thấy tài khoản
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="exampleInputPassword1">Password</label>
                                    <input type="password" className="form-control is-valid" id="exampleInputPassword1" onChange={this.handlePasswordChange} placeholder="Password" name="password" required/>
                                    <div className="invalid-feedback">
                                        Không tìm thấy tài khoản
                                    </div>
                                </div>
                               
                                {this.submit()}
                            </form>
                        </div>
                    </div>
                </div>
            </DefaultLayout>
        );
    }

   
}

module.exports = Login;