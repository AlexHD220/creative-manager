
const toggleButton = document.getElementById('miBoton');
const seccion1 = document.getElementById('seccion1');
const seccion2 = document.getElementById('seccion2');

let seccionVisible = 2; // Inicialmente, mostramos la sección 1
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




function cambiarTexto() {
    const boton = document.getElementById('miBoton');
    
    if (boton.innerHTML === 'Mostrar Más Detalles') {
      boton.innerHTML = 'Mostrar Menos Detalles';
    } else {
      boton.innerHTML = 'Mostrar Más Detalles';
    }
  }
  