

// 1. Dado un arreglo de 10 números generados aleatoriamente recorrer el arreglo y presentar cada número
function mostrarArregloAleatorio() {
    let arreglo = Array.from({length: 10}, () => Math.floor(Math.random() * 100))
    document.getElementById("result1").textContent = `Arreglo generado: ${arreglo.join(", ")}`
}

// 2. Promedio de calificaciones: Calcular el promedio de cinco calificaciones ingresadas por el usuario
function promedioCalificaciones() {
    let calificaciones = []
    for (let i = 0; i < 5; i++) {
        calificaciones.push(parseFloat(prompt(`Ingrese la calificación ${i + 1}:`)))
    }
    let suma = calificaciones.reduce((acc, cal) => acc + cal, 0)
    let promedio = suma / calificaciones.length
    document.getElementById("result2").textContent = `Promedio de calificaciones: ${promedio.toFixed(2)}`
}

// 3. Encontrar el máximo de una lista de números: Encontrar el número más grande en una lista de números
function maximoDeArreglo() {
    let arreglo = document.getElementById("maximoArreglo").value.split(",").map(Number)
    let maximo = Math.max(...arreglo)
    document.getElementById("result3").textContent = `Valor máximo: ${maximo}`
}

// 4. Encontrar el promedio de números mayores a un valor dado: Calcular el promedio de los números mayores a un valor límite en un arreglo
function promedioMayoresQueValor() {
    let arreglo = document.getElementById("mayoresArreglo").value.split(",").map(Number)
    let limite = parseFloat(document.getElementById("limiteValor").value)
    let numerosMayores = arreglo.filter(num => num > limite)
    let promedio = numerosMayores.reduce((acc, num) => acc + num, 0) / numerosMayores.length
    document.getElementById("result4").textContent = `Promedio de números mayores que ${limite}: ${promedio.toFixed(2)}`
}

// 5. Encontrar el mínimo de un arreglo de números: Encontrar el número más pequeño de un arreglo
function minimoDeArreglo() {
    let arreglo = document.getElementById("minimoArreglo").value.split(",").map(Number)
    let minimo = Math.min(...arreglo)
    document.getElementById("result5").textContent = `Valor mínimo: ${minimo}`
}

// 6. Promedio de números pares de un arreglo: Calcular el promedio de los números pares en un arreglo de 10 números
function promedioPares() {
    let arreglo = document.getElementById("paresArreglo").value.split(",").map(Number)
    let pares = arreglo.filter(num => num % 2 === 0)
    let promedio = pares.reduce((acc, num) => acc + num, 0) / pares.length
    document.getElementById("result6").textContent = `Promedio de números pares: ${promedio.toFixed(2)}`
}

// 7. Arreglo suma dígitos: Almacenar los dígitos de un número en un arreglo y luego calcular la suma de los dígitos
function sumaDigitos() {
    let numero = document.getElementById("numeroSuma").value
    let digitos = numero.split("").map(Number)
    let suma = digitos.reduce((acc, num) => acc + num, 0)
    document.getElementById("result7").textContent = `Suma de los dígitos: ${suma}`
}

// 8. Contar y sumar números positivos y negativos: Contar y sumar cuántos de 10 números ingresados son positivos o negativos
function contarPositivosNegativos() {
    let arreglo = document.getElementById("positivosNegativosArreglo").value.split(",").map(Number)
    let positivos = arreglo.filter(num => num > 0)
    let negativos = arreglo.filter(num => num < 0)
    let sumaPositivos = positivos.reduce((acc, num) => acc + num, 0)
    let sumaNegativos = negativos.reduce((acc, num) => acc + num, 0)
    document.getElementById("result8").textContent = `Positivos: ${positivos.length}, Suma positivos: ${sumaPositivos}, Negativos: ${negativos.length}, Suma negativos: ${sumaNegativos}`
}

// 9. Dado un arreglo de números crear otro arreglo con el cuadrado de cada elemento del primer arreglo
function arregloCuadrados() {
    let arreglo = document.getElementById("arregloCuadrado").value.split(",").map(Number)
    let arregloCuadrado = arreglo.map(num => num ** 2)
    document.getElementById("result9").textContent = `Arreglo con los cuadrados: ${arregloCuadrado.join(", ")}`
}

// 10. Dado dos arreglos con la misma dimensión crear otro arreglo con la suma de cada elemento del arreglo1 con el arreglo2 en el orden de la misma posición
function sumarArreglos() {
    let arreglo1 = document.getElementById("arreglo1").value.split(",").map(Number)
    let arreglo2 = document.getElementById("arreglo2").value.split(",").map(Number)
    let sumaArreglo = arreglo1.map((num, index) => num + arreglo2[index])
    document.getElementById("result10").textContent = `Arreglo suma: ${sumaArreglo.join(", ")}`
}
