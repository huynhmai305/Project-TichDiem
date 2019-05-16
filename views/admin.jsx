var React = require('react');

class Admin extends React.Component {
    state = {  }
    render() {
        return (
            <div>
                <div class="icon-bar">
                    <a class="active" href="#"><i class="fa fa-home"></i></a> 
                    <a href="#"><i class="fa fa-search"></i></a> 
                    <a href="#"><i class="fa fa-envelope"></i></a> 
                    <a href="#"><i class="fa fa-globe"></i></a>
                    <a href="#"><i class="fa fa-trash"></i></a> 
                </div>
            </div>
        );
    }
}

module.exports = Admin;