import React, { useState } from 'react';

import "./UserProducts.css";
import FormProducts from '../FormProducts/FormProducts';
import { useProduct } from '../../contexts/ProductContext';

const UserProducts = () => {
  const {ShowProductForm} = useProduct()


  return (
    <div className="user-products">
      <div className="products-content">
        <h2 className="products-title"> Meus Anúncios </h2>
        <div
          className="products-list client-products-list"
          id="client-products-list"
        ></div>
      </div>

      <div className="no-product">
        <h3>Parece que você não possui nenhum anúncio!</h3>
        <p>Clique no botão abaixo para inserir um novo anúncio.</p>
      </div>

      <div className="user-product-button">
        <button className="button" onClick={showFormProduct}>Inserir Produtos</button>
      </div>

      {ShowProductForm && <FormProducts />}
    </div>
  );
};

export default UserProducts;
