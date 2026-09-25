const listaProductos = [
    {
        id: 1,
        nombre: "Te Chai",
        precio: 8000,
        imagen: "img/te_chai.jpg"
    },
    {
        id: 2,
        nombre: "Te Verde",
        precio: 6000,
        imagen: "img/te_verde.jpg"
    },
    {
        id: 3,
        nombre: "Te Menta",
        precio: 10000,
        imagen: "img/te_menta.jpg"
    },
    {
        id: 4,
        nombre: "Café Árabe",
        precio: 12000,
        imagen: "img/arabic_coffee.jpg"
    },
    {
        id: 5,
        nombre: "Café Liberica",
        precio: 15000,
        imagen: "img/liberica_coffee.png"
    },
    {
        id: 6,
        nombre: "Café Robusta",
        precio: 18000,
        imagen: "img/robusta_coffee.jpg"
    }
];


function cargarProductos() {
    const contenedor = document.getElementById("contenedor-productos");
    contenedor.innerHTML = ""; // limpiar contenido existente

    // recorrer la lista mediante forEach
    listaProductos.forEach((producto) => {
        const tarjeta = document.createElement("div");
        tarjeta.classList.add("article");

        tarjeta.innerHTML = `
        <img src="${producto.imagen}" alt="${producto.nombre}" width="200" height="200">
        <h3>${producto.nombre}</h3>
        <p class="precio">$${producto.precio}</p>
        <button onclick="agregarAlCarrito(${producto.id})">Agregar al carrito</button>
        
        `;
        contenedor.appendChild(tarjeta);
    })
}

function agregarAlCarrito(id) {
    const producto = listaProductos.find(p => p.id === id);
    if (producto) {
        alert(`Producto ${producto.nombre} agregado al carrito.`);
        localStorage.setItem("carrito", JSON.stringify([...JSON.parse(localStorage.getItem("carrito") || "[]"), producto]));
    }

}

// ejecutar al cargar el dom
document.addEventListener("DOMContentLoaded", cargarProductos);