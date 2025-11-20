// Constante de litros de agua necesarios para un par de zapatos (dato WWF)
const LITROS_POR_PAR = 8000;

function calcularHuella() {
    // 1. Obtener la cantidad de pares ingresada por el usuario
    const paresInput = document.getElementById('paresInput');
    const cantidadPares = parseInt(paresInput.value);

    // 2. Obtener el elemento donde mostraremos el resultado
    const resultadoDiv = document.getElementById('resultado');

    // 3. Validar la entrada
    if (isNaN(cantidadPares) || cantidadPares <= 0) {
        resultadoDiv.innerHTML = '<p class="error">Por favor, ingresa una cantidad válida de pares (mayor a cero).</p>';
        resultadoDiv.style.backgroundColor = '#f8d7da'; // Estilo de error
        return;
    }

    // 4. Realizar el cálculo
    const huellaHidrica = cantidadPares * LITROS_POR_PAR;
    
    // Función para formatear el número (añadir puntos como separador de miles)
    function formatearNumero(num) {
        return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    }
    
    const huellaFormateada = formatearNumero(huellaHidrica);

    // 5. Generar el mensaje de resultado
    let mensaje = '';
    
    if (cantidadPares < 5) {
        mensaje = '¡Buen trabajo! Tu impacto es menor al promedio. Pero recuerda, ¡cada par suma!';
    } else if (cantidadPares >= 5 && cantidadPares <= 12) {
        mensaje = 'Tu huella está cerca del promedio. Recuerda: el consumo responsable es clave.';
    } else {
        mensaje = 'Tu huella es significativamente alta. Es una gran oportunidad para reflexionar sobre tu próximo par.';
    }

    // 6. Mostrar el resultado al usuario
    resultadoDiv.innerHTML = `
        <h3>¡Tu Huella Hídrica es Sorprendente!</h3>
        <p>Para producir tus <strong>${cantidadPares} pares de calzado</strong> se necesitaron:</p>
        <p class="total-litros">${huellaFormateada} Litros de Agua</p>
        <p class="reflexion">${mensaje}</p>
    `;
    resultadoDiv.style.backgroundColor = '#e9f5ff'; // Estilo de éxito
}