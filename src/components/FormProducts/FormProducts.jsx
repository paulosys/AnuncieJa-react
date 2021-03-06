import "./FormProducts.css";
import { useProduct } from "../../contexts/ProductContext";
import regex from "../../../regex/regex";
import api from "../../../api/api";
import swal from "sweetalert"


const FormProducts = () => {
    const { handleCloseFormCreateProduct, productSelected, setProductSelected, emptyProduct, typeProductForm, updateProductClient, updateProduct, addProduct } = useProduct()
    const handleChangeName = (event) => {
        setProductSelected({...productSelected, name: event.target.value})
        console.log(productSelected)
    }
    const handleChangePrice = (event) => {
        setProductSelected({...productSelected, price: event.target.value})
        console.log(productSelected)
    }

    const handleChangeMemory = (event) => {
        setProductSelected({...productSelected, memory: event.target.value})
        console.log(productSelected)
    }
    const handleChangeRam = (event) => {
        setProductSelected({...productSelected, memoryRam: event.target.value})
        console.log(productSelected)
    }
    const handleChangeColor = (event) => {
        setProductSelected({...productSelected, color: event.target.value})
        console.log(productSelected);
    }
    const handleChangeType = (event) => {
        const type = event.target.value == "computador" ? "imgs/computador.jpeg" : "imgs/motoE.webp"
        setProductSelected({...productSelected, image: type})
    }

    const handleSubmitFormCreate = (event) => {
        event.preventDefault();
        const resultado = {nome: regex.validar_nome(productSelected.name), color: regex.validar_cor(productSelected.color)}
        if (resultado.nome && resultado.color) {
            api.addProduct(productSelected)
            addProduct(productSelected)
            setProductSelected(emptyProduct)
            handleCloseFormCreateProduct()

        } 
        else {
            const errado = resultado.nome === false ? "nome" :  "cor"
            const texto = errado === "nome" ? "Campo só pode preencher com letra, número e espaço" : "Campo só pode ser preenchido com letra e espaço"
            swal({
                title: `${errado} preenchido errado`,
                text: texto,
                icon: "error",
                button: "Tente novamente",
            });

        }
    }
    const handleSubmitFormUpdate = (event) => {

        event.preventDefault();
        const resultado = {nome: regex.validar_nome(productSelected.name), color: regex.validar_cor(productSelected.color)}
        if (resultado.nome && resultado.color) {
            api.updateProduct(productSelected);
            updateProductClient(productSelected);
            updateProduct(productSelected)
            setProductSelected(emptyProduct);
            handleCloseFormCreateProduct()

        }

        else {
            const errado = resultado.nome === false ? "nome" :  "cor"
            const texto = errado === "nome" ? "Campo só pode preencher com letra, número e espaço" : "Campo só pode ser preenchido com letra e espaço"
            swal({
                title: `${errado} preenchido errado`,
                text: texto,
                icon: "error",
                button: "Tente novamente",
            });

        }
        
       

    }
    return (
        
        <div className="form-modal">
            <div className="form-header">
                <h1>AnuncieJá </h1>
                <div className="box-close">
                    <button className="button-close" id="close-button" onClick={handleCloseFormCreateProduct}><i className="fa-solid fa-xmark"> X </i></button>
                </div>
            </div>

            <form id="form-product" onSubmit={typeProductForm == "create" ? handleSubmitFormCreate : handleSubmitFormUpdate}>
                <div className="input-group">
                    <div className="input-box">
                        <label htmlFor="productName">Nome do Produto</label>
                        <input  id="productName" onChange = {handleChangeName} value = {productSelected.name} type="text" name="productName" required />
                    </div>

                    <div className="input-box">
                        <label htmlFor="productPrice">Preço do produto</label>
                        <div className="flex-productPrice">
                            <div className="input-box-cifrao">
                                <span className="input-cifrao">R$</span>
                            </div>
                            <input id="productPrice" onChange = {handleChangePrice} type="number" value = {productSelected.price} name="productPrice" required />
                        </div>
                    </div>
                    <div className="input-box">
                        <label htmlFor="productMemory"> Memória principal </label>
                        <input id="productMemory" onChange = {handleChangeMemory} value = { productSelected.memory } type="number" name="productMemory" required />

                    </div>
                    <div className="input-box">
                        <label htmlFor="productMemoryRam"> Memória Ram </label>
                        <input id="productMemoryRam" onChange = {handleChangeRam} value = { productSelected.memoryRam } type="number" name="" required />

                    </div>
                    <div className="input-box">
                        <label htmlFor="productColor"> Cor do produto </label>
                        <input id="productColor" onChange = {handleChangeColor} value = { productSelected.color } name="productColor" required />
                    </div>
                    <div className="options"> 
                        <input onChange = {handleChangeType} type = "radio" name = "tipo" value = "computador"/> Computador
                        <input onChange = {handleChangeType} type="radio" name = "tipo" value = "Celular" /> Celular
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