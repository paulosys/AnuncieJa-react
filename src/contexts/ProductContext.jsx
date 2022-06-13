import { createContext, useState, useContext } from "react";

export const ProductContext = createContext({});

export const ProductContextProvider = ({ children }) => {
    const emptyProduct = {
        name: "",
        memory: "",
        color: "",
        memoryRam: "",
        price: "",
        image: ""
    }
    const [productClient, setProductClient] = useState([]);
    const [idUser, setIdUser] = useState();
    const [product, setProduct] = useState([]);
    const [productSelected, setProductSelected] = useState(emptyProduct);
    const [ShowProductForm, setShowProductForm] = useState(false);
    const [ShowProductFormDelete, setShowProductFormDelete] = useState(false);
    const [typeProductForm, setTypeProductForm] = useState("create");


    const toggleProductForm = () => {
        setShowProductForm(!ShowProductForm);
    }
    const toggleProductFormDelete = () => {
        setShowProductFormDelete(!ShowProductFormDelete);
    }

    const handleFormCreateProduct = () => { 
        setProductSelected(emptyProduct);
        toggleProductForm()
        setTypeProductForm("create");
    }
    const handleCreateProduct = (product) => {
       // implementar depois de feita a api

    }

    const handleFormUpdateProduct = (product) => {
        setProductSelected(product);
        toggleProductForm()
        setTypeProductForm("update");
    }
    const handleUpdateProduct = (product) => {
        // implementar depois de feita a api
        
    }
    const handleFormDeleteProduct = (product) => {
        setProductSelected(product);
        toggleProductFormDelete()
    }
    

    const handleDeleteProduct = (product) => {
        // implementar depois de feita a api 
    }

    const handleSubmitProductForm = (product) => {
        typeProductForm == "create" ? handleCreateProduct(product) : handleUpdateProduct(product);
        toggleProductForm();
    }
    return (
        <ProductContext.Provider value={{
            productClient, 
            setProductClient,
            product, 
            setProduct,
            productSelected, 
            setProductSelected,
            handleFormCreateProduct,
            handleCreateProduct,
            handleFormUpdateProduct,
            handleUpdateProduct,
            handleFormDeleteProduct,
            handleDeleteProduct,
            handleSubmitProductForm,
            idUser, 
            setIdUser,
            ShowProductForm, 
            setShowProductForm,
            ShowProductFormDelete, 
            setShowProductFormDelete,
            toggleProductForm
        }}
        >
            { children }
        </ProductContext.Provider>
    )
}

export function useProduct() {
    return useContext(ProductContext);
}