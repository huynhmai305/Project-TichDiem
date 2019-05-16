var React = require ('react');
var DefaultLayout = require('../layouts/default');
class Users extends React.Component {
    render() {
        return (  
            <DefaultLayout title="Trang user">
                <ol className="breadcrumb mt-5">
                    <li className="breadcrumb-item">
                        <a href="index.html">Trang chủ</a>
                    </li>
                    <li className="breadcrumb-item active">Trang quản lý khách hàng</li>
                </ol>
                <table class="table mt-5">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Name</th>
                            <th>Address</th>
                            <th>Phone</th>
                            <th>Email</th>
                        </tr>
                    </thead>
                    <tbody>
                    {this.props.result.map((item, key) => 
                        <tr key= {key}>
                            <td scope="row">{item.id}</td>
                            <td>{item.username}</td>
                            <td>{item.address}</td>
                            <td>{item.phone}</td>
                            <td>{item.email}</td>
                        </tr>
                    )}
                    </tbody>
                </table>
            </DefaultLayout>
        );
    }
}

module.exports = Users;