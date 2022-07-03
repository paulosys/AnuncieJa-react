import React, { useState } from 'react';

import "./UserProducts.css";
import FormProducts from '../FormProducts/FormProducts';
import { useProduct } from '../../contexts/ProductContext';
import ClientCard from "../ClientCard/ClientCard"

const UserProducts = () => {
  const { ShowProductForm, productClient, handleOpenFormCreateProduct } = useProduct()

  return (
    <div className="user-products">
      <h2 className="products-title"> Meus Anúncios </h2>

      {
      productClient.length == 0 ?
        <div className="no-product">
          <h3>Parece que você não possui nenhum anúncio!</h3>
          <p>Clique no botão abaixo para inserir um novo anúncio.</p>
        </div>
        :
        <div className="client-products-list">
          {
            productClient.map(product => <ClientCard key={`product-${product.id}`} product={product} />)
          }
        </div>
      }

      <div className="user-product-button">
        <button className="button" onClick={handleOpenFormCreateProduct}>Inserir Produtos</button>
      </div>

      {ShowProductForm && <FormProducts />}
    </div>
  );
};

export default UserProducts;
