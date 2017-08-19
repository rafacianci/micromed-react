import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getProduct, clearEdition, save } from '../../actions/products';

class ProductForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      product: {},
    };

    if (props.match.params && props.match.params.productId !== 'new') {
      props.getProduct(props.match.params.productId);
    }
  }

  componentWillReceiveProps(props) {
    if (props.product && !this.state.form.id) {
      this.setState({
        product: props.product,
      });
    }
  }

  componentWillUnmount() {
    this.props.clearEdition();
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.save(this.state.product);
    this.props.history.push('/products');
  }

  render() {
    return (
      <form onSubmit={(e) => this.handleSubmit(e)} className='container columns product__form'>
        <div className='is-12'>
          <div className='field column is-4'>
            <label htmlFor='description' className='label'>Description</label>
            <div className='control'>
              <input
                name='description'
                className='input'
                type='text'
                value={this.state.product.description}
                required
                onChange={(event) => this.setState({ product: { description: event.target.value }})}
              />
            </div>
          </div>
        </div>
        <div className='column is-12 actions'>
          <Link to='/products' className='button'>Cancel</Link>
          <button type='submit' className='button is-success'>Save</button>
        </div>
      </form>
    );
  }
}

const mapStateProps = ({ products }) => ({
  product: products.product,
});

export default connect(mapStateProps, {
  getProduct,
  clearEdition,
  save,
})(ProductForm);
