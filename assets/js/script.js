let repetir = true //false
let opc
let opc1
let ActividadUno = 0
let ActividadDos = 0
let ActividadTres = 0
let ActividadCuatro = 0
let ActividadCinco = 0
let ActividadSeis = 0
let ActividadSiete = 0
let ActividadOcho = 0
let ActividadNueve = 0
let ActividadDiez = 0


//Ejercicio 1
function contadorParesImpares() {
    alert("programa que muestra la cantidad de números pares e impares dentro del rango desde 1 hasta el numero ingreso por el usuario.");
    let i = 1;
    let CantidadNumPares = 0;
    let CantidadNumImpares = 0;
    let numero = Number(prompt("Ingrese un numero: "))
    do {
        if (i % 2 == 0) {
            CantidadNumPares++
        } else {
            CantidadNumImpares++
        }
        i++
    } while (i <= numero);
    console.log("Impar: " + CantidadNumImpares + " Par: " + CantidadNumPares)
}

//Ejercicio 2
function Factorial() {
    alert("Programa que calcula el factorial del número ingresado.");
    let numero = Number(prompt("Ingrese un numero: "))
    let acumulador = 1;
    for (let i = 1; i <= numero; i++) {
        acumulador = acumulador * i;
    }
    console.log(acumulador);
}

//Ejercicio 3
//Funcion con parametro

function ValidarClave(clave) {
    if (clave == "secreto123") {
        console.log("acceso concedido")
    } else {
        console.log("acceso Denegado")
    }
}

//Ejercicio 4
function GeneradorTablaMultiplicar() {
    alert("Programa que  muestra la tabla de multiplicar correspondiente al numero ingresado.");
    let numero = Number(prompt('Ingrese un numero: '))
    for (let index = 1; index <= 10; index++) {
        multiplicacion = numero * index
        console.log(numero + ' * ' + index + ' = ' + multiplicacion)
    }
}

//Ejercicio 5
function AdivinarNumero() {
    alert("EL programa generara un número aleatorio entre 1 y 100, y usted debe adivinarlo. El programa le dara pistas como demasiado alto o demasiado bajo");
    let numero_Aleatorio = Math.floor(Math.random() * 101)
    while (true) {
        let numero = Number(prompt("Ingrese un numero: "))
        if (numero_Aleatorio == numero) {
            console.log("Felicidades adivinaste el numero")
            break
        } else {
            if (numero_Aleatorio < numero) {
                console.log("El numero es demasiado alto")
            }
            if (numero_Aleatorio > numero) {
                console.log("El numero es demasiado bajo")
            }
        }
    }
}

//Ejercicio 6
function NumerosPrimos() {
    alert("Programa que calcula la suma de los primeros N números primos, donde N es ingresado por el usuario.");
    let cantidadPrimos = Number(prompt("Ingrese un numero: "))
    let i = 0;
    let numero = 2
    let suma = 0
    while (i < cantidadPrimos) {
        let EsPrimo = true
        let contador = 2;
        while (contador < numero) {
            if (numero % contador == 0) {
                EsPrimo = false
                break
            }
            contador++
        }
        if (EsPrimo) {
            suma = suma + numero
            i++
        }
        numero++
    }
    console.log(suma)
}

//Ejercicio 7
function Fibonacci() {
    alert("Programa que genera la secuencia de Fibonacci hasta un término dado por el usuario.");
    let limite = Number(prompt("Ingrese un numero limite hasta donde termine el Fibonacci: "))
    const fib = [0, 1]
    for (let i = 2; i < limite; i++) {
        fib[i] = fib[i - 2] + fib[i - 1]
    }
    console.log(fib)
}

//Ejercicio 8
function ConvertidorTemperatura() {
    alert("Programa que convierte temperaturas entre grados Celsius y Fahrenheit, permitiendo al usuario elegir la dirección de la conversión (de Celsius a Fahrenheit o de Fahrenheit a Celsius");
    let Temperatura = Number(prompt("¿Que desea convertir?\nSi desea convertir grados Celsius a grados Fahrenheit escriba 1\nSi desea convertir grados Fahrenheit a grados Celsius escriba 2"))
    while (true) {
        if (Temperatura == 1) {
            let TemperaturaCelsius = Number(prompt("Ingrese los grados Celsius que desea convertir"))
            let Fahrenheit = Math.floor((TemperaturaCelsius * 9 / 5) + 32)
            console.log(TemperaturaCelsius + "°C" + " = " + Fahrenheit + "°F")
            break
        } else if (Temperatura == 2) {
            let TemperaturaFahrenheit = Number(prompt("Ingrese los grados Fahrenheit que desea convertir"))
            let Celsius = Math.floor((TemperaturaFahrenheit - 32) * 5 / 9)
            console.log(TemperaturaFahrenheit + "°F" + " = " + Celsius + "°C")
            break
        } else {
            console.log("Opcion incorrecta")
            break
        }
    }
}

//Ejercicio 9
function Potencia() {
    alert("Programa que calcula el resultado de elevar un número a una potencia dada por el usuario.");
    const base = Number(prompt("Ingrese el numero base: "))
    const exponente = Number(prompt("Ingrese la potencia: "))
    let resultado = 1;
    for (let i = 0; i < exponente; i++) {
        resultado = resultado * base;
    }
    console.log(resultado)
}

//Ejercicio 10
//Funcion con return y parametros
function PiedraPapelTijera(min, max) {
    alert("Juega contra la computadora eligiendo entre piedra, papel o tijeras. ");
    while (true) {
        let turnoUsuario = Number(prompt("Turno para el humano Ingresa\npapel: 1 \ntijera: 2\npiedra: 3\nSalir: 4"))
        var turnoMaquina = Math.floor(Math.random() * (max - min) + min)
        if (turnoUsuario == 1) {
            console.log("Tu elegiste 🧻")
        } else if (turnoUsuario == 2) {
            console.log("Tu elegiste ✂")
        } else if (turnoUsuario == 3) {
            console.log("Tu elegiste 🥌")
        } else {
            alert("Eligiste salir y huir como un cobarde")
            break
        }
        if (turnoMaquina == 1) {
            console.log("La maquina elige 🧻")
        } else if (turnoMaquina == 2) {
            console.log("La maquina elige ✂")
        } else if (turnoMaquina == 3) {
            console.log("La maquiona elige 🥌")
        }
        if (turnoUsuario == turnoMaquina) {
            console.log("Empate ")
        } else if (turnoUsuario == 1 && turnoMaquina == 3) {
            console.log("Gano el humano")
        } else if (turnoUsuario == 2 && turnoMaquina == 1) {
            console.log("Gano el humano")
        } else if (turnoUsuario == 3 && turnoMaquina == 2) {
            console.log("Gano el humano")
        } else {
            console.log("Perdiste y las maquinas conquistaran el planeta")
        }
    }
    return turnoMaquina
}


//Menu de opciones de los ejercicios
function Menu() {
    while (repetir) {
        opc = Number(prompt("Seleccione el ejercicio que desea realizar: \n \n 1. Contador de Números Pares e Impares\n 2. Calculadora de Factorial \n 3. Validación de Contraseña \n 4.  Generador de Tablas de Multiplicar \n 5. Adivinar el Número \n 6. Suma de Números Primos \n 7. Secuencia de Fibonacci \n 8. Convertidor de Temperatura \n 9. Calculadora de Potencia \n 10. Juego de Piedra, Papel o Tijeras \n 11. Salir"))
        switch (opc) {
            case 1:
                opc1 = Number(prompt("¿Desea seguir con la operacion? escriba 1 para si y 2 para no"))
                if (opc1 == 1) {
                    contadorParesImpares();
                }
                ActividadUno++
                break;
            case 2:
                opc1 = Number(prompt("¿Desea seguir con la operacion? escriba 1 para si y 2 para no"))
                if (opc1 == 1) {
                    Factorial()
                }
                ActividadDos++
                break;
            case 3:
                opc1 = Number(prompt("¿Desea seguir con la operacion? escriba 1 para si y 2 para no"))
                alert("Programa que valida la contraseña.");
                let clave = prompt("Ingrese su contraseña: ");
                if (opc1 == 1) {
                    ValidarClave(clave)
                }
                ActividadTres++
                break;
            case 4:
                opc1 = Number(prompt("¿Desea seguir con la operacion? escriba 1 para si y 2 para no"))
                if (opc1 == 1) {
                    GeneradorTablaMultiplicar()
                }
                ActividadCuatro++
                break;
            case 5:
                opc1 = Number(prompt("¿Desea seguir con la operacion? escriba 1 para si y 2 para no"))
                if (opc1 == 1) {
                    AdivinarNumero()
                }
                ActividadCinco++
                break;
            case 6:
                repetir = false
                opc1 = Number(prompt("¿Desea seguir con la operacion? escriba 1 para si y 2 para no"))
                if (opc1 == 1) {
                    NumerosPrimos()
                }
                ActividadSeis
                break;
            case 7:
                opc1 = Number(prompt("¿Desea seguir con la operacion? escriba 1 para si y 2 para no"))
                if (opc1 == 1) {
                    Fibonacci()
                }
                ActividadSiete++
                break;
            case 8:
                opc1 = Number(prompt("¿Desea seguir con la operacion? escriba 1 para si y 2 para no"))
                if (opc1 == 1) {
                    ConvertidorTemperatura()
                }
                ActividadOcho++
                break;
            case 9:
                opc1 = Number(prompt("¿Desea seguir con la operacion? escriba 1 para si y 2 para no"))
                if (opc1 == 1) {
                    Potencia()
                }
                ActividadNueve++
                break;
            case 10:
                opc1 = Number(prompt("¿Desea seguir con la operacion? escriba 1 para si y 2 para no"))
                if (opc1 == 1) {
                    PiedraPapelTijera(1, 3)
                }
                ActividadDiez++
                break;
            case 11:
                repetir = false
                console.log("Actividad 1 realizado: " + ActividadUno + " Veces")
                console.log("Actividad 2 realizado: " + ActividadDos + " Veces")
                console.log("Actividad 3 realizado: " + ActividadTres + " Veces")
                console.log("Actividad 4 realizado: " + ActividadCuatro + " Veces")
                console.log("Actividad 5 realizado: " + ActividadCinco + " Veces")
                console.log("Actividad 6 realizado: " + ActividadSeis + " Veces")
                console.log("Actividad 7 realizado: " + ActividadSiete + " Veces")
                console.log("Actividad 8 realizado: " + ActividadOcho + " Veces")
                console.log("Actividad 9 realizado: " + ActividadNueve + " Veces")
                console.log("Actividad 10 realizado: " + ActividadDiez + " Veces")
                break;
            default:
                break;
        }
    }
}

Menu();


