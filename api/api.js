import axios from "axios"

const baseApi = "https://json-server-2.tawham.repl.co"
const readAll = async() => {
    const resultado = await (await axios.get(`${baseApi}/products`)).data

    return resultado
   
}
const addProduct = async (product) => {
    await axios.post(`${baseApi}/products`, product);

}

const updateProduct = async (product) => {
    await axios.put(`${baseApi}/products/${product.id}`, product);

}

const deleteProduct = async (id) => {
    await axios.delete(`${baseApi}/products/${id}`);
}
export default {readAll, addProduct, updateProduct, deleteProduct};