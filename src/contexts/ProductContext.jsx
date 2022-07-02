import { createContext, useState, useContext } from "react";

export const ProductContext = createContext({});

export function ProductContextProvider({ children }) {
    const emptyProduct = {
        name: "",
        memory: "",
        color: "",
        memoryRam: "",
        price: "",
        image: "",
        default: 1
    }
    const [productClient, setProductClient] = useState([]);
    const [product, setProduct] = useState([]);
    const [productSelected, setProductSelected] = useState(emptyProduct);
    const [ShowProductForm, setShowProductForm] = useState(false);
    const [typeProductForm, setTypeProductForm] = useState("create");

    
    const updateProductClient = (product) => {
        const temp = [...productClient];
        const index = temp.findIndex((products) => products.id == product.id);
        temp[index] = product
        setProductClient([...temp]);
        
    }
    const updateProduct = (products) => {
        const temp = [...product];
        const index = temp.findIndex((producsts) => producsts.id == products.id)
        temp[index] = products
        setProduct([...temp]);
        
    }

    const addProduct = (product2) => {
        const id_max = (product[product.length - 1].id) + 1;
        product2 = {...product2, id : id_max}

        setProductClient([...productClient, product2, ])
        setProduct([...product, product2])

    }
    const deleteProduct = (product2) => {
        let tempProduct = [...product];
        const index = tempProduct.findIndex((products) => products.id == product2.product.id);
        tempProduct.splice(index, 1);
        setProduct([...tempProduct]);

        let tempProductCliente = [...productClient];
        const indexProductCliente = tempProductCliente.findIndex((products) => products.id == product2.product.id);
        tempProductCliente.splice(indexProductCliente, 1);
        setProductClient([...tempProductCliente]);
    }
    


    const toggleProductForm = () => {
        setShowProductForm(!ShowProductForm);
    }
 
    const handleOpenFormCreateProduct = () => {
        setProductSelected(emptyProduct);
        setTypeProductForm("create");
        toggleProductForm()
       
       

    }
    const handleCloseFormCreateProduct = () => {
        toggleProductForm()
    }

    const handleFormUpdateProduct = (product) => {
        setProductSelected(product.product);
        toggleProductForm()
        setTypeProductForm("update");
    }
    


    return (
        <ProductContext.Provider value={{
            productClient, 
            setProductClient,
            product, 
            setProduct,
            productSelected, 
            setProductSelected,
            handleFormUpdateProduct,
            ShowProductForm, 
            setShowProductForm,
            toggleProductForm,
            handleOpenFormCreateProduct,
            handleCloseFormCreateProduct,
            emptyProduct,
            updateProductClient,
            updateProduct,
            addProduct,
            typeProductForm,
            deleteProduct

        }}
        >
            { children }
        </ProductContext.Provider>
    )
}

export function useProduct() {
    return useContext(ProductContext);
}


