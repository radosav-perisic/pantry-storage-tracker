import React, { useState } from 'react';

import Card from '../UI/Card';
import LoadingIndicator from '../UI/LoadingIndicator';
import './ProductForm.css';

const ProductForm = React.memo(props => {
  const [enteredTitle, setEnteredTitle] = useState('');
  const [enteredAmount, setEnteredAmount] = useState('');

  const submitHandler = event => {
    event.preventDefault();
    props.onAddProduct({ title: enteredTitle, amount: enteredAmount });
  };

  return (
    <section className="product-form">
      <Card>
        <form onSubmit={submitHandler}>
          <div className="form-control">
            <h1>Product Generator</h1>
            <label htmlFor="title">Name</label>
            <input
              type="text"
              id="title"
              value={enteredTitle}
              onChange={event => {
                setEnteredTitle(event.target.value);
              }}
            />
          </div>
          <div className="form-control">
            <label htmlFor="amount">Amount</label>
            <input
              type="number"
              id="amount"
              value={enteredAmount}
              onChange={event => {
                setEnteredAmount(event.target.value);
              }}
            />
          </div>
          <div className="product-form__actions">
            <button type="submit">Add Product</button>
            {props.loading && <LoadingIndicator />}
          </div>
        </form>
      </Card>
    </section>
  );
});

export default ProductForm;
