export const actualizarContador = (carrito) => {
    const contador= document.getElementById ("contador-carrito")
    if(contador){
        cpmtador.textContent = carrito.length
    }
}
export const mostrarMensaje =(texto)=>{
    alert (texto)
}