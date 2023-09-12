
const toggleButton = document.getElementById('miBoton');
const seccion1 = document.getElementById('seccion1');
const seccion2 = document.getElementById('seccion2');

let seccionVisible = 2; // Inicialmente, mostramos la sección 2
seccion1.style.display = 'none';
seccion2.style.display = 'block';


toggleButton.addEventListener('click', () => {
  if (seccionVisible === 1) {
    seccion1.style.display = 'none';
    seccion2.style.display = 'block';
    seccionVisible = 2;
  } else {
    seccion1.style.display = 'block';
    seccion2.style.display = 'none';
    seccionVisible = 1;
  }
});



const toggleButton2 = document.getElementById('miBoton2');
const seccion3 = document.getElementById('seccion3');
const seccion4 = document.getElementById('seccion4');

let seccionVisible2 = 4; // Inicialmente, mostramos la sección 4
seccion3.style.display = 'none';
seccion4.style.display = 'block';

toggleButton2.addEventListener('click', () => {
  if (seccionVisible2 === 3) {
    seccion3.style.display = 'none';
    seccion4.style.display = 'block';
    seccionVisible2 = 4;
  } else {
    seccion3.style.display = 'block';
    seccion4.style.display = 'none';
    seccionVisible2 = 3;
  }
});



function cambiarTexto() {
    const boton = document.getElementById('miBoton');
    
    if (boton.innerHTML === 'Mostrar Más Detalles') {
      boton.innerHTML = 'Mostrar Menos Detalles';
    } else {
      boton.innerHTML = 'Mostrar Más Detalles';
    }

    const boton2 = document.getElementById('miBoton2');
    
    if (boton2.innerHTML === 'Mostrar Más Detalles') {
      boton2.innerHTML = 'Mostrar Menos Detalles';
    } else {
      boton2.innerHTML = 'Mostrar Más Detalles';
    }
}
