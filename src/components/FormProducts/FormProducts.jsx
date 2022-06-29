import "./FormProducts.css";
import { useProduct } from "../../contexts/ProductContext";


const FormProducts = () => {
    const { toggleProductForm, productSelected } = useProduct()
    const {name, memory, color, memoryRam, price, image} = productSelected;

    return (
        
        <div className="form-modal">
            <div className="form-header">
                <h1>AnuncieJá </h1>
                <div className="box-close">
                    <button className="button-close" id="close-button" onClick={toggleProductForm}><i className="fa-solid fa-xmark"> X </i></button>
                </div>
            </div>

            <form id="form-product">
                <div className="input-group">
                    <div className="input-box">
                        <label htmlFor="productName">Nome do Produto</label>
                        <input id="productName" value = {name} type="text" name="productName" required />
                    </div>

                    <div className="input-box">
                        <label htmlFor="productPrice">Preço do produto</label>
                        <div className="flex-productPrice">
                            <div className="input-box-cifrao">
                                <span className="input-cifrao">R$</span>
                            </div>
                            <input id="productPrice" type="number" value = {price} name="productPrice" required />
                        </div>
                    </div>
                    <div className="input-box">
                        <label htmlFor="productMemory"> Memória principal </label>
                        <input id="productMemory" value = { memory } type="number" name="productMemory" required />

                    </div>
                    <div className="input-box">
                        <label htmlFor="productMemoryRam"> Memória Ram </label>
                        <input id="productMemoryRam" value = { memoryRam } type="number" name="" required />

                    </div>
                    <div className="input-box">
                        <label htmlFor="productColor"> Cor do produto </label>
                        <input id="productColor" value = { color } name="productColor" required />
                    </div>

                    <div className="input-box">
                        <label htmlFor="productCategory">Categoria do produto</label>
                        <select id="productCategory" name="productCategory" required="">
                            <option value="1"> Computador </option>
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