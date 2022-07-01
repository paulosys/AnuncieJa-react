import axios from "axios"


const readAll = async() => {
    const resultado = await (await axios.get("https://json-server-2.tawham.repl.co/products")).data

    return resultado
   
}

export default {readAll}