function mostrarCarrito() {
    const carrito = JSON.parse(localStorage.getItem("carrito") || "[]");
    alert(`Su carrito tiene ${carrito.length} productos`);
}