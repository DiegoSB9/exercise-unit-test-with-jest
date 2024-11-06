// Importar la función sum del archivo app.js
const { sum } = require('./app.js');

// Comienza tu primera prueba
test('adds 14 + 9 to equal 23', () => {
    // Dentro de la prueba llamamos a nuestra función sum con 2 números
    let total = sum(14, 9);

    // Esperamos que la suma de esos 2 números sea 23
    expect(total).toBe(23);
});

test("One euro should be 1.07 dollars", function() {
    // Importo la funcion desde app.js
    const { fromEuroToDollar } = require('./app.js');

    // Uso la función como debe ser usada
    const dollars = fromEuroToDollar(3.5);

    // Si 1 euro son 1.07 dólares, entonces 3.5 euros debe ser (3.5 * 1.07)
    const expected = 3.5 * 1.07;

    // Hago mi comparación (la prueba)
    expect(fromEuroToDollar(3.5)).toBe(3.745); // 1 euro son 1.07 dólares, entonces 3.5 euros deberían ser = (3.5 * 1.07)
})

test("One Dollar should be 0,00683706070287539936102236421725 Yen", function() {
    // Importo la funcion desde app.js
    const { fromDollarToYen } = require('./app.js');

    // Uso la función como debe ser usada
    const Yen = fromDollarToYen(3.5);

    // Si 1.07 Dollar son 1 Euro y este 156.5 Yen, entonces 3.5 Dollar debe ser (3.5 * 0.00683706070287539936102236421725)
    const expected = 3.5 * 0.00683706070287539936102236421725;

    // Hago mi comparación (la prueba)
    expect(fromDollarToYen(3.5)).toBe(0.02392971246006389776357827476038);
})

test("One Yen should be 179,88505747126436781609195402299 Pound", function() {
    // Importo la funcion desde app.js
    const { fromYenToPound } = require('./app.js');

    // Uso la función como debe ser usada
    const pound = fromYenToPound(3.5);

    // Si 156.5 son 1 Euro y este 0.87 Pound, entonces 3.5 Yens debe ser (3.5 * 179.88505747126436781609195402299)
    const expected = 3.5 * 179.88505747126436781609195402299;

    // Hago mi comparación (la prueba)
    expect(fromYenToPound(3.5)).toBe(629.59770114942528735632183908047);
})