// 1. Concatenar nombre y apellido
function concatenarNombreApellido() {
    var nombreApellido = document.getElementById("nombreApellido").value.trim();
    if (nombreApellido === "") {
        document.getElementById("result1").textContent = "Por favor, ingresa un nombre y apellido.";
        return;
    }
    var partes = nombreApellido.split(" ");
    if (partes.length < 2) {
        document.getElementById("result1").textContent = "Por favor, ingresa tanto un nombre como un apellido.";
        return;
    }
    var resultado = partes[1] + " " + partes[0];
    document.getElementById("result1").textContent = resultado;
}

// 2. Comparar frases
function compararFrases() {
    var frase1 = document.getElementById("frase1").value.trim();
    var frase2 = document.getElementById("frase2").value.trim();
    if (frase1 === "" || frase2 === "") {
        document.getElementById("result2").textContent = "Por favor, ingresa ambas frases para comparar.";
        return;
    }

    var resultado = (frase1 === frase2) ? "Las frases son iguales" :
                    (frase1 > frase2) ? "La primera frase es mayor que la segunda" :
                    "La primera frase es menor que la segunda";

    document.getElementById("result2").textContent = resultado;
}

// 3. Ingresar palabra y separar caracteres
function separarCaracteres() {
    var palabra = document.getElementById("palabra").value.trim();
    if (palabra === "") {
        document.getElementById("result3").textContent = "Por favor, ingresa una palabra.";
        return;
    }
    var resultado = palabra.split("").join(" ");
    document.getElementById("result3").textContent = resultado;
}

// 4. Mostrar código ASCII de cada carácter
function mostrarASCII() {
    var frase = document.getElementById("fraseASCII").value.trim();
    if (frase === "") {
        document.getElementById("result4").textContent = "Por favor, ingresa una frase.";
        return;
    }
    var resultado = "";
    for (var i = 0; i < frase.length; i++) {
        resultado += frase[i] + ": " + frase.charCodeAt(i) + "\n";
    }
    document.getElementById("result4").textContent = resultado;
}

// 5. Invertir palabra o frase
function invertirPalabra() {
    var palabra = document.getElementById("invertirPalabra").value.trim();
    if (palabra === "") {
        document.getElementById("result5").textContent = "Por favor, ingresa una palabra o frase.";
        return;
    }
    var resultado = palabra.split("").reverse().join("");
    document.getElementById("result5").textContent = resultado;
}

// 6. Contar vocales en una palabra
function contarVocales() {
    var palabra = document.getElementById("vocalesPalabra").value.trim().toLowerCase();
    if (palabra === "") {
        document.getElementById("result6").textContent = "Por favor, ingresa una palabra.";
        return;
    }
    var vocales = "aeiou";
    var contador = 0;
    for (var i = 0; i < palabra.length; i++) {
        if (vocales.includes(palabra[i])) {
            contador++;
        }
    }
    document.getElementById("result6").textContent = "Número de vocales: " + contador;
}

// 7. Contar letras del alfabeto en una palabra
function contarLetrasAlfabeto() {
    var palabra = document.getElementById("alfabetoPalabra").value.trim().toLowerCase();
    if (palabra === "") {
        document.getElementById("result7").textContent = "Por favor, ingresa una palabra.";
        return;
    }
    var letras = "abcdefghijklmnopqrstuvwxyz";
    var contador = 0;
    for (var i = 0; i < palabra.length; i++) {
        if (letras.includes(palabra[i])) {
            contador++;
        }
    }
    document.getElementById("result7").textContent = "Número de letras del alfabeto: " + contador;
}

// 8. Contar dígitos en una frase
function contarDigitos() {
    var frase = document.getElementById("digitosFrase").value.trim();
    if (frase === "") {
        document.getElementById("result8").textContent = "Por favor, ingresa una frase.";
        return;
    }
    var contador = 0;
    for (var i = 0; i < frase.length; i++) {
        if (/\d/.test(frase[i])) {
            contador++;
        }
    }
    document.getElementById("result8").textContent = "Número de dígitos: " + contador;
}

// 9. Contar signos de puntuación en una palabra
function contarSignosPuntuacion() {
    var palabra = document.getElementById("signosPalabra").value.trim();
    if (palabra === "") {
        document.getElementById("result9").textContent = "Por favor, ingresa una palabra.";
        return;
    }
    var signos = [".", ",", ";", ":", "!", "?", "-", "_", "(", ")", "[", "]", "{", "}"];
    var contador = 0;
    for (var i = 0; i < palabra.length; i++) {
        if (signos.includes(palabra[i])) {
            contador++;
        }
    }
    document.getElementById("result9").textContent = "Número de signos de puntuación: " + contador;
}
