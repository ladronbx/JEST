# JEST

Jest es un marco de pruebas (framework) de JavaScript desarrollado por Facebook. Se utiliza principalmente para realizar pruebas unitarias en aplicaciones escritas en JavaScript, especialmente aquellas construidas con React, Angular, Vue, Node.js y otros entornos de desarrollo basados en JavaScript.

Aquí hay algunos conceptos clave relacionados con Jest:

1. **Pruebas de Unidad:**
    - Jest está diseñado principalmente para pruebas de unidad, lo que significa que se enfoca en probar partes aisladas de código, como funciones o módulos, para asegurar que funcionen correctamente de manera individual.
2. **Sintaxis Simple y Concisa:**
    - Jest proporciona una sintaxis simple y concisa para escribir pruebas. Utiliza funciones como `describe` para agrupar pruebas y `it` o `test` para escribir las pruebas reales. Además, Jest tiene funciones integradas para aserciones, lo que facilita la verificación de los resultados esperados.
3. **Rápido y Eficiente:**
    - Jest utiliza un motor de ejecución de pruebas altamente optimizado que ejecuta las pruebas de manera rápida y eficiente. Además, Jest puede ejecutar pruebas en paralelo para mejorar aún más la velocidad de ejecución.
4. **Integración con React:**
    - Jest es ampliamente utilizado en proyectos de React y viene preconfigurado con Create React App, el entorno oficial de desarrollo para aplicaciones React. También es compatible con la prueba de componentes React y facilita la simulación de eventos y comportamientos específicos de React.
5. **Snapshot Testing:**
    - Jest incluye una función llamada "Snapshot Testing" que permite capturar el resultado de un componente o estructura de datos y compararlo con versiones anteriores. Esto es útil para detectar cambios no deseados en la salida de las pruebas.
6. **Mocks y Espías:**
    - Jest proporciona herramientas para crear mocks (imitaciones) de funciones y módulos, así como para espiar funciones para verificar si han sido llamadas y con qué argumentos.
7. **Configuración Sencilla:**
    - Jest busca minimizar la configuración necesaria para empezar a escribir pruebas. A menudo, las configuraciones predeterminadas son suficientes para muchos proyectos.
8. **Extensibilidad:**
    - A pesar de su enfoque simple, Jest es extensible y se puede configurar para adaptarse a las necesidades específicas del proyecto.

Al utilizar Jest, los desarrolladores pueden asegurarse de que sus funciones y componentes individuales funcionen como se espera antes de integrarlos en una aplicación más grande. Esto ayuda a mantener la calidad del código y a prevenir errores antes de que lleguen a la etapa de producción.

Comandos :

```bash
npm init
```

```bash
sudo npm i jest -D
```