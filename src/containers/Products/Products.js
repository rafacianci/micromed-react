import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getProducts } from '../../actions/products';

class Products extends Component {

  componentWillMount() {
    this.props.getProducts();
  }

  render() {
    return (
      <div className='container'>
        <div className='actions'>
          <h1>Products</h1>
          <Link to='/product/new' className='button is-success'>New</Link>
        </div>
        <table>
          <thead>
            <tr>
              <th>descricao</th>
            </tr>
          </thead>
          <tbody>
            {
              this.props.products.map((product) => (
                <tr>
                  <td>
                    { product.descricao }
                  </td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
    );
  }
}

const mapStateProps = ({ products }) => ({
  products: products.data,
});

export default connect(mapStateProps, {
  getProducts,
})(Products);
