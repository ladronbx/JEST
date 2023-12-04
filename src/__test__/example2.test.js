test(
    `Comprueba si son iguales`,
    () => {
        expected(10).toBe(10);
        expected(typeof 10).toBe('number');
        expect(true).toBe(false);
    }
)