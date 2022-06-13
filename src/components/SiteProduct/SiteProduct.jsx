const SiteProduct = (produto) => {
    const { id, name, memory, color, memoryRam, price, image } = product;
    const getPrice = (string) => {
        const priceArray = String(string).split(".");
        return priceArray;
        
    }
    const priceString = getPrice(price);
    return (
        <div className="product client-product" id = {`product-${id}`}>
                                
        <div className="button-crud">
            <button className="button-crud-delete" title="deletar"><i className="fa-solid fa-trash-can"></i></button>
        </div>
        
        <div className="product-img">
            <img src={image} alt={name}/>
        </div>
        <div className="line"></div>
        <div className="product-info">
            <div className="product-price">
                <p> { priceString[0] } <sup> { priceString[1] } </sup> </p>
            </div>
            <h3 className="product-name"> { name } { memory } GB { color } { memoryRam } GB RAM </h3>
        </div>
    </div>

    )
}