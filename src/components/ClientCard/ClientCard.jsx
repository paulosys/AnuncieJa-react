import { useProduct } from "../../contexts/ProductContext";

import "./ClientCard.css";

const ClientCard = (product) => { 
    const { id, name, memory, color, memoryRam, price, image } = product.product
    const { handleFormDeleteProduct, handleFormUpdateProduct } = useProduct();

    const getPrice = (string) => {
        const priceArray = String(string).split(".");
        return priceArray;
    }
    const priceString = getPrice(price)
    return (
        <div className="product client-product" id = {`product-${id}`}>
                                
                <div className="button-crud">
                    <button className="button-crud-delete" onClick = { () => handleFormDeleteProduct(product) } title="deletar"><i className="fa-solid fa-trash-can"></i> X </button>
                </div>
                <div> 
                    <button className="Atualizar" onClick = {() => handleFormUpdateProduct(product)}> atualizar </button>
                </div>
                
                <div className="product-img">
                    <img src={image} alt = {name}/>
                </div>
                <div className="line"></div>
                <div className="product-info">
                    <div className="product-price">
                        <p> R$ { priceString[0] } <sup> { priceString[1] } </sup> </p>
                    </div>
                    <h3 className="product-name"> { name } { memory } GB { color } { memoryRam } GB RAM </h3>
                </div>
            </div>
    )

}
export default ClientCard;