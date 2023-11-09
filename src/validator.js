

const validator = {
  maskify: (numeroTarjeta) => {

    //paso 1 Definir la Maskify 
    if (numeroTarjeta.length <= 4) {
      return numeroTarjeta;
    }
    const enmascaramiento = numeroTarjeta.slice(0, -4).split('').reduce((masked) => masked + '#', '') + numeroTarjeta.slice(-4);
    enmascaramiento + numeroTarjeta.slice(-4);
    return enmascaramiento
  },

  isValid: (creditCardNumber) => {
    //Paso 1. Reversar el número de tarjeta 
    const reversedString = creditCardNumber.split("").reduce((acc, char) => char + acc, "");

    // Paso 2. Multiplicar por 2 los que esten en segunda posición del número reversado.

    const numero = (reversedString)
    const digitos = Array.from(String(numero), Number);
    const resultado = digitos.map((digito, indice) => {
      if (indice % 2 === 1) {
        return digito * 2;
      }
      return digito;
    });
    // Paso 3. Si es igual o mayor a 10 sumar estos digitos entre si 

    const arregloDeSumas = [];
    resultado.forEach(numero => {
      if (numero >= 10) {
        const digitos = Array.from(String(numero), Number);
        const sumaDigitos = digitos.reduce((total, digito) => total + digito, 0);
        arregloDeSumas.push(sumaDigitos);
      } else {
        arregloDeSumas.push(numero);
      }
    });

    // Paso 4. Sumar todos los digitos del resutado
    const sumaTotal = arregloDeSumas.reduce((total, digito) => total + digito, 0);

    // Paso 5. El resultado debe ser multiplo de 10 

    if (sumaTotal % 10 === 0) {

      return true;
    } else {

      return false;
    }
  }

}
export default validator;
