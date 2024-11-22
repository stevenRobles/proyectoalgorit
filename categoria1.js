// Imprimir números impares
function imprimirImpares() {
    const max = parseInt(document.getElementById('numImpares').value);
    let resultado = '';
    for (let i = 1; i <= max; i += 2) {
        resultado += i + ' ';
    }
    document.getElementById('result1').textContent = resultado || 'Por favor, ingrese un número válido.';
}

// Calcular la suma de los primeros 100 números
function calcularSuma100() {
    const suma = (100 * (100 + 1)) / 2; // Fórmula de Gauss
    document.getElementById('result2').textContent = `La suma es: ${suma}`;
}

// Suma de números pares hasta un número dado
function sumaPares() {
    const max = parseInt(document.getElementById('numPares').value);
    let suma = 0;
    for (let i = 2; i <= max; i += 2) {
        suma += i;
    }
    document.getElementById('result3').textContent = `La suma es: ${suma}`;
}

// Imprimir números divisibles por 3 y 5
function imprimirDivisibles() {
    const max = parseInt(document.getElementById('divisibles').value);
    let resultado = '';
    for (let i = 1; i <= max; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            resultado += i + ' ';
        }
    }
    document.getElementById('result4').textContent = resultado || 'Ningún número divisible encontrado.';
}

// Generar la tabla de multiplicar
function tablaMultiplicar() {
    const num = parseInt(document.getElementById('tablaNum').value);
    let resultado = '';
    for (let i = 1; i <= 10; i++) {
        resultado += `${num} x ${i} = ${num * i}\n`;
    }
    document.getElementById('result5').textContent = resultado || 'Ingrese un número válido.';
}

// Generar la serie de Fibonacci
function generarFibonacci() {
    const n = parseInt(document.getElementById('fibonacci').value);
    let a = 0, b = 1, resultado = '';
    for (let i = 0; i < n; i++) {
        resultado += a + ' ';
        [a, b] = [b, a + b];
    }
    document.getElementById('result6').textContent = resultado || 'Ingrese un número válido.';
}

// Multiplicación de n números
function multiplicarNumeros() {
    const n = parseInt(document.getElementById('multiplicacion').value);
    let producto = 1;
    for (let i = 1; i <= n; i++) {
        producto *= i;
    }
    document.getElementById('result7').textContent = `El producto es: ${producto}`;
}

// Calcular el factorial de un número
function calcularFactorial() {
    const num = parseInt(document.getElementById('factorial').value);
    let factorial = 1;
    for (let i = 1; i <= num; i++) {
        factorial *= i;
    }
    document.getElementById('result8').textContent = `El factorial es: ${factorial}`;
}

// Imprimir múltiplos de un número
function imprimirMultiplos() {
    const num = parseInt(document.getElementById('multiplos').value);
    let resultado = '';
    for (let i = 1; i <= 10; i++) {
        resultado += num * i + ' ';
    }
    document.getElementById('result9').textContent = resultado || 'Ingrese un número válido.';
}

// Calcular divisores de un número
function calcularDivisores() {
    const num = parseInt(document.getElementById('divisores').value);
    let resultado = '';
    for (let i = 1; i <= num; i++) {
        if (num % i === 0) resultado += i + ' ';
    }
    document.getElementById('result10').textContent = resultado || 'Ingrese un número válido.';
}

// Verificar si un número es perfecto
function esPerfecto() {
    const num = parseInt(document.getElementById('numeroPerfecto').value);
    let suma = 0;
    for (let i = 1; i < num; i++) {
        if (num % i === 0) suma += i;
    }
    const mensaje = suma === num ? 'Es un número perfecto.' : 'No es un número perfecto.';
    document.getElementById('result11').textContent = mensaje;
}

// Encontrar números primos hasta un número dado
function encontrarPrimos() {
    const max = parseInt(document.getElementById('primos').value);
    let resultado = '';
    for (let i = 2; i <= max; i++) {
        if (esPrimo(i)) resultado += i + ' ';
    }
    document.getElementById('result12').textContent = resultado || 'Ningún primo encontrado.';
}
function esPrimo(num) {
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}

// Invertir un número
function invertirNumero() {
    const num = document.getElementById('invertirNum').value;
    const invertido = num.split('').reverse().join('');
    document.getElementById('result13').textContent = `Número invertido: ${invertido}`;
}

// Contar dígitos de un número
function contarDigitos() {
    const num = document.getElementById('contarDigitos').value;
    const total = num.length;
    document.getElementById('result14').textContent = `El número tiene ${total} dígitos.`;
}

// Dibujar un triángulo de asteriscos
function dibujarTriangulo() {
    const filas = parseInt(document.getElementById('triangulo').value);
    let resultado = '';
    for (let i = 1; i <= filas; i++) {
        resultado += '*'.repeat(i) + '\n';
    }
    document.getElementById('result15').textContent = resultado || 'Ingrese un número válido.';
}
