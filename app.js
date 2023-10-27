// Esta es mi funcion que suma dos numeros
const suma = (a,b) => {
    return a + b;
}

// Solo un registro en consola
console.log(suma(7, 3));


// Funcion fromEuroToDollar

const fromEuroToDollar = function(valueInEuro) {
    // convertimos valor a usd
    let valueInDollar = valueInEuro * 1.07;
    // retornamos valor en dolares
    return valueInDollar;
}

// Funcion fromDollarToYen

const fromDollarToYen = function(valueInDollar) {
    // convertimos valor a usd
    let valueInYen = valueInDollar * 0.0067; 
    // retornamos valor en yenes
    return valueInYen;
}

// Funcion fromYenToPound

const fromYenToPound = function(valueInYen) {
    // convertimos valor a usd
    let valueInPound = valueInYen * 0.00556; 
    // retornamos valor en libras
    return valueInPound;
}


// Exportamos la funcion para usarla en otros archivos
module.exports = { suma, fromEuroToDollar, fromDollarToYen, fromYenToPound };