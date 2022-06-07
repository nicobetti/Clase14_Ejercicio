const pagos = [];
const usuarios = [];
const fechas = [];
const efectivos = [];
const listado = document.getElementById('list-group');
const cuadroResultado = document.getElementById('total');
const usuario = document.getElementById('nombre');
const pago = document.getElementById('pago');
const efectivo = document.getElementById('ft');

function repartir() {
    agregarGastosAListas();
    agregarUltimo();
    mostrarPagos();
}

function agregarGastosAListas() {
    usuarios.push(usuario.value);
    pagos.push(pago.value);
    fechas.push(new Date());
    efectivos.push(efectivo.checked);
}

function agregarUltimo() {
    const li = document.createElement('li');
    li.classList.add('list-group-item');
    const ultimo = pagos.length - 1;
    const usuario = usuarios[ultimo];
    const pago = pagos[ultimo];
    const fecha = fechas[ultimo].toLocaleString();
    const ft = efectivos[ultimo] ? 'en efectivo' : 'no usó efectivo';
    li.textContent = `${usuario}: $${pago}, fecha: ${fecha}, ${ft} `;
    listado.appendChild(li);
}

function mostrarPagos() {
    const total = sumarValores();
    cuadroResultado.textContent = `Total: ${total}
 A cada uno le toca aportar: $${(total / pagos.length).toFixed(2)}`;
}

function sumarValores() {
    let total = 0;
    for (const gasto of pagos) {
        total += parseInt(gasto);
    }
    return total;
}
