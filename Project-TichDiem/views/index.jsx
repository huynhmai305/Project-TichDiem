import Header from './layouts/header';
import About from './layouts/about';
import Quytrinhtichdiem from './layouts/quytrinhtichdiem';
import Client from './layouts/client';
import Contact from './layouts/contact';
var React = require('react');
var DefaultLayout = require('./layouts/default');


class Index extends React.Component {
  render() {
    return (
      <DefaultLayout title="Trang chủ">
        <Header />
        <About />
        <Quytrinhtichdiem />
        <Client />
        <Contact />
      </DefaultLayout>
    );
  }
}

module.exports = Index;
