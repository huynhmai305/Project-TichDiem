var React = require('react');
var DefaultLayout = require('./layouts/default');

class Admin extends React.Component {
    render() {
        return (
            <DefaultLayout title="Admin">
                <div className="container-fluid mt-5">
                    <div class="icon-bar">
                        <a class="active" href="#"><i class="fa fa-home"></i></a> 
                        <a href="#"><i class="fa fa-search"></i></a> 
                        <a href="#"><i class="fa fa-envelope"></i></a> 
                        <a href="#"><i class="fa fa-globe"></i></a>
                        <a href="#"><i class="fa fa-trash"></i></a> 
                    </div>
                </div>
            </DefaultLayout>
            
        );
    }
}

module.exports = Admin;