import validator from './validator.js';

let numeroTarjeta;

const inputNumeroTarjeta = document.getElementById("numero-tarjeta");
inputNumeroTarjeta.addEventListener("input", (event) => {
  numeroTarjeta = event.target.value
});

const botonConfirmacion = document.getElementById("botonConfirmacion")
botonConfirmacion.addEventListener("click", (event) => {
  event.preventDefault()

  if (validator.isValid(numeroTarjeta)) {
    alert(`La tarjeta de crédito ${validator.maskify(numeroTarjeta)} es válida. Reserva confirmada`);
  } else {
    alert(`La tarjeta de crédito ${validator.maskify(numeroTarjeta)} No es válida. Vuelve a intentarlo.`);
  }
});





