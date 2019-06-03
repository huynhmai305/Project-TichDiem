import React, { Component } from 'react';
import Layout from '../customer.jsx'
import Card from './card.jsx'

class Home extends Component {
  render() {
    return (
      <Layout title="Hệ thống tích điểm H&M">
        <Card/>
      </Layout>
    );
  }
}

export default Home;