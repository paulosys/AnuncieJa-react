const validar_nome = (string) => {
    const resultado = /^[\w\u00C0-\u00FF\d\s]+$/.test(string);
    return resultado;
}

const validar_cor = (string) => {
    const resultado = /^[a-zA-Z\u00C0-\u00FF\s]+$/.test(string);
    return resultado;
    
}

export default {validar_nome, validar_cor};