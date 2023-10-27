// Importamos funcion suma de app.js
const { suma } = require('./app.js');

// Primera prueba
test('La suma de 14 + 9 es igual a 23', () => {
    // llamamos a la funcion suma con dos numeros
    let total = suma(14, 9);

    // resultado esperado es 23
    expect(total).toBe(23);
})

test("Un DOLLAR deberia ser 0.0067 YENES", function() {
    // funcion desde app.js
    const { fromDollarToYen } = require('./app.js');

    // uso de funcion
    const yenes = fromDollarToYen(3.5);

    //Si 1 yen son 0,0067 dólares, entonces 3.5 dolares debe ser (3.5 * 0.0067)
    const expected = 3.5 * 0.0067;

    // Hago mi comparación (la prueba)
    expect(yenes).toBe(expected);  // //Si 1 yen son 0,0067 dólares, entonces 3.5 dolares debe ser (3.5 * 0.0067)
}) 

test("Un EURO deberia ser 1.07 DOLLARS", function() {
    // Importo la funcion desde app.js
    const { fromEuroToDollar } = require('./app.js');

    // Uso la función como debe ser usada
    const dollars = fromEuroToDollar(3.5);

    // Si 1 euro son 1.07 dólares, entonces 3.5 euros debe ser (3.5 * 1.07)
    const expected = 3.5 * 1.07;

    // Hago mi comparación (la prueba)
    expect(dollars).toBe(expected); // 1 euro son 1.07 dólares, entonces 3.5 euros deberían ser = (3.5 * 1.07)
})

test("Un YEN deberia ser 0.00556 LIBRAS", function() {
    // Importo la funcion desde app.js
    const { fromYenToPound } = require('./app.js');

    // Uso la función como debe ser usada
    const libras = fromYenToPound(3.5);

    // Si 1 yen son 0.00556 libras, entonces 3.5 yenes debe ser (3.5 * 0.00556)
    const expected = 3.5 * 0.00556;

    // Hago mi comparación (la prueba)
    expect(libras).toBe(expected); // Si 1 yen son 0.00556 libras, entonces 3.5 yenes debe ser (3.5 * 0.00556)
})