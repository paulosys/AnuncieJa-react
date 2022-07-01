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
    const [idUser, setIdUser] = useState(0);
    const [product, setProduct] = useState([]);
    const [productSelected, setProductSelected] = useState(emptyProduct);
    const [ShowProductForm, setShowProductForm] = useState(false);
    const [ShowProductFormDelete, setShowProductFormDelete] = useState(false);
    const [typeProductForm, setTypeProductForm] = useState("create");

    
    const updateProductClient = (product) => {
        console.log(productClient)
        const index = productClient.findIndex((products) => products.id == product.id)
        productClient[index] = product
        
    }
    const updateProduct = (products) => {
        console.log(product)
        const index = product.findIndex((producsts) => producsts.id == products.id)
        product[index] = products
        
    }

    const addProduct = (product2) => {
        const id_max = (product[product.length - 1].id) + 1;
        product2 = {...product2, id : id_max}

        setProductClient([...productClient, product2, ])
        console.log(productClient);
        setProduct([...product, product2])

    }
    
    


    const toggleProductForm = () => {
        setShowProductForm(!ShowProductForm);
    }
    const toggleProductFormDelete = () => {
        setShowProductFormDelete(!ShowProductFormDelete);
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
            toggleProductForm,
            emptyProduct,
            handleOpenFormCreateProduct,
            handleCloseFormCreateProduct,
            emptyProduct,
            updateProductClient,
            updateProduct,
            addProduct,
            typeProductForm

        }}
        >
            { children }
        </ProductContext.Provider>
    )
}

export function useProduct() {
    return useContext(ProductContext);
}


