const token = localStorage.getItem('access_token');
const dispositivoId = localStorage.getItem('dispositivoSeleccionado');

if (!dispositivoId) {
    alert('No se ha seleccionado un dispositivo.');
    window.location.href = '/mis_dispositivos';  // Redirigir si no hay ID
}

<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> 7abb30cb4dbdac2fb6787b7118a19056b324ee29


const token = localStorage.getItem('access_token');


const token = localStorage.getItem('access_token');


const token = localStorage.getItem('token');

const token = localStorage.getItem('access_token');
 a8d19f143da4dcdf7a22fd08e935b212cf57580a
 b4cb2bf817590ea6000bce461d5a50d14c9ce9b7
 b0b9b03a14308048bdfe4ae811ef3107c4b0cc5e
 afc917d1d14c3730d6946130d053056968a08dc6
<<<<<<< HEAD
>>>>>>> 140297cf9450a6de7652b1265e43fff63f4f0b04
=======
>>>>>>> 7abb30cb4dbdac2fb6787b7118a19056b324ee29
let map;
let marker;

// Inicializar Google Map
function initMap() {
    const loadingMessage = document.getElementById('loading-map');
    map = new google.maps.Map(document.getElementById('map'), {
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> 7abb30cb4dbdac2fb6787b7118a19056b324ee29







        center: { lat: 0, lng: 0 },  // Valor predeterminado (cambiar con datos reales)
        zoom: 15
    });
    marker = new google.maps.Marker({
        position: { lat: 0, lng: 0 },  // Valor predeterminado (cambiar con datos reales)
        map: map
    });

    // Ocultar el mensaje de carga cuando el mapa está listo
    google.maps.event.addListenerOnce(map, 'idle', function() {
        loadingMessage.style.display = 'none';

 b4cb2bf817590ea6000bce461d5a50d14c9ce9b7
 b0b9b03a14308048bdfe4ae811ef3107c4b0cc5e
 afc917d1d14c3730d6946130d053056968a08dc6
<<<<<<< HEAD
>>>>>>> 140297cf9450a6de7652b1265e43fff63f4f0b04
=======
>>>>>>> 7abb30cb4dbdac2fb6787b7118a19056b324ee29
        center: { lat: 0, lng: 0 },  // Valor predeterminado
        zoom: 15
    });
    marker = new google.maps.Marker({
        position: { lat: 0, lng: 0 },  // Valor predeterminado
        map: map
    });

    google.maps.event.addListenerOnce(map, 'idle', function () {
        loadingMessage.style.display = 'none';  // Ocultar mensaje de carga
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> 7abb30cb4dbdac2fb6787b7118a19056b324ee29






 a8d19f143da4dcdf7a22fd08e935b212cf57580a
 b4cb2bf817590ea6000bce461d5a50d14c9ce9b7
 b0b9b03a14308048bdfe4ae811ef3107c4b0cc5e
 afc917d1d14c3730d6946130d053056968a08dc6
<<<<<<< HEAD
>>>>>>> 140297cf9450a6de7652b1265e43fff63f4f0b04
=======
>>>>>>> 7abb30cb4dbdac2fb6787b7118a19056b324ee29
    });
}

// Obtener y actualizar la ubicación actual
async function obtenerUbicacionActual() {
    try {
<<<<<<< HEAD
<<<<<<< HEAD
        const response = await fetch(`/api/dispositivos/${dispositivoId}/ubicaciones/`, {
=======
=======
>>>>>>> 7abb30cb4dbdac2fb6787b7118a19056b324ee29

        const response = await fetch(`/api/dispositivos/${dispositivoId}/ubicaciones/`, {

        const response = await fetch('/api/dispositivos/1/ubicaciones/', {
 afc917d1d14c3730d6946130d053056968a08dc6
<<<<<<< HEAD
>>>>>>> 140297cf9450a6de7652b1265e43fff63f4f0b04
=======
>>>>>>> 7abb30cb4dbdac2fb6787b7118a19056b324ee29
            method: 'GET',
            headers: { 'Authorization': 'Bearer ' + token }
        });

        if (response.ok) {
            const data = await response.json();
            if (data.length > 0) {
<<<<<<< HEAD
<<<<<<< HEAD
                const ubicacionActual = data[data.length - 1];  // Última ubicación
=======
=======
>>>>>>> 7abb30cb4dbdac2fb6787b7118a19056b324ee29

                const ubicacionActual = data[data.length - 1];  // Última ubicación


                const ubicacionActual = data[data.length - 1];  // Última ubicación


                const ubicacionActual = data[data.length - 1];  // Última ubicación


                const ubicacionActual = data[data.length - 1];  // Tomar la última ubicación

                const ubicacionActual = data[data.length - 1];  // Última ubicación
 a8d19f143da4dcdf7a22fd08e935b212cf57580a
 b4cb2bf817590ea6000bce461d5a50d14c9ce9b7
 b0b9b03a14308048bdfe4ae811ef3107c4b0cc5e
 afc917d1d14c3730d6946130d053056968a08dc6
<<<<<<< HEAD
>>>>>>> 140297cf9450a6de7652b1265e43fff63f4f0b04
=======
>>>>>>> 7abb30cb4dbdac2fb6787b7118a19056b324ee29
                const latLng = { lat: parseFloat(ubicacionActual.latitud), lng: parseFloat(ubicacionActual.longitud) };
                map.setCenter(latLng);
                marker.setPosition(latLng);
            }
        } else {
            console.error("Error al obtener la ubicación actual");
        }
    } catch (error) {
        console.error("Error al actualizar la ubicación:", error);
    }
}

// Obtener historial de ubicaciones
async function obtenerHistorialUbicaciones() {
    const loadingMessage = document.getElementById('loading-historial');
    try {
<<<<<<< HEAD
<<<<<<< HEAD
        const response = await fetch(`/api/dispositivos/${dispositivoId}/ubicaciones/`, {
=======
=======
>>>>>>> 7abb30cb4dbdac2fb6787b7118a19056b324ee29

        const response = await fetch(`/api/dispositivos/${dispositivoId}/ubicaciones/`, {

        const response = await fetch('/api/dispositivos/1/ubicaciones/', {
 afc917d1d14c3730d6946130d053056968a08dc6
<<<<<<< HEAD
>>>>>>> 140297cf9450a6de7652b1265e43fff63f4f0b04
=======
>>>>>>> 7abb30cb4dbdac2fb6787b7118a19056b324ee29
            method: 'GET',
            headers: { 'Authorization': 'Bearer ' + token }
        });

        if (response.ok) {
            const data = await response.json();
            const historial = document.getElementById('historial-ubicaciones');
            historial.innerHTML = '';
            data.forEach((ubicacion, index) => {
                historial.innerHTML += `
                    <tr>
                        <td>${index + 1}</td>
                        <td>${ubicacion.latitud}</td>
                        <td>${ubicacion.longitud}</td>
                        <td>${ubicacion.fecha}</td>
                        <td>${ubicacion.hora}</td>
                    </tr>
                `;
            });
<<<<<<< HEAD
<<<<<<< HEAD
            loadingMessage.style.display = 'none';  // Ocultar mensaje de carga
=======
=======
>>>>>>> 7abb30cb4dbdac2fb6787b7118a19056b324ee29

            loadingMessage.style.display = 'none';  // Ocultar mensaje de carga


            loadingMessage.style.display = 'none';  // Ocultar mensaje de carga


            loadingMessage.style.display = 'none';  // Ocultar mensaje de carga


            loadingMessage.style.display = 'none';  // Ocultar el mensaje de carga

            loadingMessage.style.display = 'none';  // Ocultar mensaje de carga
 a8d19f143da4dcdf7a22fd08e935b212cf57580a
 b4cb2bf817590ea6000bce461d5a50d14c9ce9b7
 b0b9b03a14308048bdfe4ae811ef3107c4b0cc5e
 afc917d1d14c3730d6946130d053056968a08dc6
<<<<<<< HEAD
>>>>>>> 140297cf9450a6de7652b1265e43fff63f4f0b04
=======
>>>>>>> 7abb30cb4dbdac2fb6787b7118a19056b324ee29
        } else {
            throw new Error("Error al obtener el historial de ubicaciones");
        }
    } catch (error) {
        console.error("Error al obtener el historial:", error);
        loadingMessage.textContent = 'Error al cargar el historial de ubicaciones.';
    }
}

// Sondeo para actualizar la ubicación y el historial cada 10 segundos
setInterval(() => {
    obtenerUbicacionActual();
    obtenerHistorialUbicaciones();
}, 10000);

<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> 140297cf9450a6de7652b1265e43fff63f4f0b04
=======

>>>>>>> 7abb30cb4dbdac2fb6787b7118a19056b324ee29
// Redirigir a la página de registro de eventos
document.getElementById('registro-link').addEventListener('click', function () {
    const dispositivoId = localStorage.getItem('dispositivoSeleccionado');
    if (dispositivoId) {
        window.location.href = `/dispositivo/${dispositivoId}/reg_event`;
    } else {
        alert('No se ha seleccionado un dispositivo.');
        window.location.href = '/mis_dispositivos';  // Redirigir si no hay ID
    }
});
<<<<<<< HEAD
<<<<<<< HEAD
=======

 afc917d1d14c3730d6946130d053056968a08dc6
>>>>>>> 140297cf9450a6de7652b1265e43fff63f4f0b04
=======

 afc917d1d14c3730d6946130d053056968a08dc6
>>>>>>> 7abb30cb4dbdac2fb6787b7118a19056b324ee29