const contadorElement = document.getElementById('contador');
const boton = document.getElementById('boton');
const boton2 = document.getElementById('boton2');
const boton3 = document.getElementById('boton3');
const boton4 = document.getElementById('boton4');
const boton5 = document.getElementById('boton5');


let contador = 0;

boton.addEventListener('click', () => {
    contador++;
    contadorElement.textContent = contador;
});

boton2.addEventListener('click', () => {
    contador++;
    contadorElement.textContent = contador;
});

boton3.addEventListener('click', () => {
    contador++;
    contadorElement.textContent = contador;
});

boton4.addEventListener('click', () => {
    contador++;
    contadorElement.textContent = contador;
});

boton5.addEventListener('click', () => {
    contador++;
    contadorElement.textContent = contador;
});