import "./AllProducts.css";
import DefaultCard from "../DefaultCard/DefaultCard"
import { useProduct } from "../../contexts/ProductContext";

const AllProducts = () => {
    const {product} = useProduct()

    return(
        <div className="all-products">
            <div className="allproducts-content">
                <h2 className="products-title"> Anúncios </h2>
                <div className="products-container">
                    {
                        product.map((product) => <DefaultCard key = {`produto site ${product.id}`} produto={product}/>)
                    }
                </div>
            </div>
      </div>
    );
}

export default AllProducts;