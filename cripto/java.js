let catalogo = [];
let wallet = [];

function crearCriptomoneda() {
    const nombre = prompt("Nombre de la criptomoneda:");
    const clave = prompt("Clave de la criptomoneda:");
    const precio = parseFloat(prompt("Precio de la criptomoneda en pesos mexicanos:"));

    const criptomoneda = { nombre, clave, precio };
    catalogo.push(criptomoneda);
    alert(`Criptomoneda ${nombre} creada con exito.`);
}

function comprarCriptomoneda() {
    if (catalogo.length === 0) {
        alert("No hay criptomonedas en el catalogo.");
        return;
    }

    let mensaje = "Catalogo de Criptomonedas:\n";
    catalogo.forEach(cripto => {
        mensaje += `Nombre: ${cripto.nombre}, Clave: ${cripto.clave}, Precio: ${cripto.precio} MXN\n`;
    });

    alert(mensaje);

    const clave = prompt("Ingresa la clave de la criptomoneda que deseas comprar:");
    const criptomoneda = catalogo.find(cripto => cripto.clave === clave);

    if (!criptomoneda) {
        alert("Clave incorrecta. Por favor, intenta de nuevo.");
        return;
    }

    const cantidad = parseFloat(prompt(`¿Cuántas unidades de ${criptomoneda.nombre} deseas comprar?`));
    const costo = cantidad * criptomoneda.precio;

    const existente = wallet.find(cripto => cripto.clave === criptomoneda.clave);
    if (existente) {
        existente.cantidad += cantidad;
    } else {
        wallet.push({ ...criptomoneda, cantidad });
    }

    alert(`Compra realizada. Total: ${costo} MXN.`);
}

function verWallet() {
    if (wallet.length === 0) {
        alert("El wallet está vacío.");
        return;
    }

    let mensaje = "Tu Wallet:\n";
    wallet.forEach(cripto => {
        mensaje += `Nombre: ${cripto.nombre}, Clave: ${cripto.clave}, Cantidad: ${cripto.cantidad}\n`;
    });

    alert(mensaje);
}
