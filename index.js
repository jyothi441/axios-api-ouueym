import React, { Component } from 'react';
import { render } from 'react-dom';
import ProductList from './ProductList';
import Hello from './Hello';
import './style.css';
import axios from 'axios';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React',
      users: []
    };
  }

  componentDidMount() {
    let self = this;
    axios
      .get(
        'https://s3-ap-southeast-1.amazonaws.com/he-public-data/productdf38641.json'
      )
      .then(function(response) {
        self.setState({
          users: response.data
        });
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  render() {
    return (
      <div>
        <ProductList products={this.state.users} />
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
