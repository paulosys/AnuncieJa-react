import "./FormProducts.css";
import React, { useState } from 'react';

const FormProducts = () => {

    const [showForm, setShowForm] = useState(false);

    const showFormProduct = () => {
        setShowForm(showForm == false);
    }

    return(
        <div className="form-modal"> 

            <form id = "form-product">
                <div className="form-header">
                        <h1>AnuncieJá </h1>
                        <div className="box-close">
                            <button className="button-close" id="close-button"><i className="fa-solid fa-xmark" onClick={showFormProduct}></i></button>
                        </div>      
                </div>

                <div className="input-group">
                    <div className="input-box">
                        <label htmlFor="productName">Nome do Produto</label>
                        <input id="productName" type="text" name="productName" required/>
                    </div>
                    
                    <div className="input-box">
                        <label htmlFor="productPrice">Preço do produto</label>
                        <div className="flex-productPrice">
                            <div className="input-box-cifrao">
                                <span className="input-cifrao">R$</span>
                            </div>
                            <input id="productPrice" type="number" name="productPrice" required/>
                        </div>
                    </div>
                    <div className="input-box">
                        <label htmlFor="productMemory"> Memória principal </label>
                        <input id="productMemory" type="number" name="productMemory" required/>

                    </div>
                    <div className="input-box">
                        <label htmlFor="productMemoryRam"> Memória Ram </label>
                        <input id="productMemoryRam" type="number" name="" required/>

                    </div>
                    <div className="input-box">
                        <label htmlFor="productColor"> Cor do produto </label>
                        <input id="productColor" name="productColor" required/>
                    </div>

                    <div className="input-box">
                        <label htmlFor="productCategory">Categoria do produto</label>
                        <select id="productCategory" name="productCategory" required="">
                            <option value="1">Computador </option>
                            <option value="2"> Celular </option>
                        </select>
                    
                    </div>

                    <div className="post-button">
                        <button id="enviar"> Postar Anúncio </button>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default FormProducts;