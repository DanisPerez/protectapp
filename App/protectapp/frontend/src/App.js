// src/App.js
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import SidebarEventos from './components/SidebarEventos';
import MainContent from './components/MainContent';
import LoginSection from './components/LoginSection';
import RegisterSection from './components/RegisterSection';
import MiProducto from './components/MiProducto';
import Cuenta from './components/Cuenta';
import MisDispositivos from './components/MisDispositivos';
import RegistroEventos from './components/RegistroEventos';
import ArchivoDeTelefono from './components/ArchivoDeTelefono';
import UbicacionTiempoReal from './components/UbicacionTiempoReal';
import GrabacionTiempoReal from './components/GrabacionTiempoReal';
import Capturas from './components/Capturas';
import ExportarDatos from './components/ExportarDatos';
import VerificacionPermisos from './components/VerificacionPermisos';
import Footer from './components/Footer';
import './css/App.css';
import './css/Home.css';

function App() {
    const location = useLocation();

<<<<<<< HEAD
    // Detectar si la ruta es una de las páginas principales
    const isMainPage = ['/inicio', '/mi_producto', '/cuenta', '/mis_dispositivos'].includes(location.pathname);

    // Detectar si la ruta es parte de las páginas de eventos, incluyendo rutas dinámicas
    const isEventoPage = 
        ['/reg_event', '/archivo_telefono', '/ubicacion', '/grabacion', '/capturas', '/exportar_datos', '/verificacion_permisos'].includes(location.pathname) ||
        /^\/dispositivo\/\d+\/reg_event$/.test(location.pathname);
=======
    const eventoPages = [
        '/reg_event', 
        '/dispositivo/:dispositivoId/reg_event', 
        '/archivo_telefono', 
        '/ubicacion',
        '/grabacion',
        '/capturas',
        '/exportar_datos',
        '/verificacion_permisos'
    ];
>>>>>>> 93377ebfbcd26d14f6f4e8a0b8a9a9d138f8e145

    return (
        <div className="App">
            <Header />
<<<<<<< HEAD
            
            {/* Renderizado de Sidebar según la sección */}
            {isMainPage ? (
=======
            {['/inicio', '/mi_producto', '/cuenta', '/mis_dispositivos'].includes(location.pathname) ? (
>>>>>>> 93377ebfbcd26d14f6f4e8a0b8a9a9d138f8e145
                <div className="main-layout">
                    <Sidebar />
                    <div className="content">
                        <Routes>
                            <Route path="/inicio" element={<MainContent />} />
                            <Route path="/mi_producto" element={<MiProducto />} />
                            <Route path="/cuenta" element={<Cuenta />} />
                            <Route path="/mis_dispositivos" element={<MisDispositivos />} />
                        </Routes>
                    </div>
                </div>
<<<<<<< HEAD
            ) : isEventoPage ? (
=======
            ) : eventoPages.includes(location.pathname) ? (
>>>>>>> 93377ebfbcd26d14f6f4e8a0b8a9a9d138f8e145
                <div className="main-layout">
                    <SidebarEventos />
                    <div className="content">
                        <Routes>
                            <Route path="/reg_event" element={<RegistroEventos />} />
                            <Route path="/dispositivo/:dispositivoId/reg_event" element={<RegistroEventos />} />
                            <Route path="/archivo_telefono" element={<ArchivoDeTelefono />} />
                            <Route path="/ubicacion" element={<UbicacionTiempoReal />} />
                            <Route path="/grabacion" element={<GrabacionTiempoReal />} />
                            <Route path="/capturas" element={<Capturas />} />
                            <Route path="/exportar_datos" element={<ExportarDatos />} />
                            <Route path="/verificacion_permisos" element={<VerificacionPermisos />} />
                        </Routes>
                    </div>
                </div>
            ) : (
                <div className="content">
                    <Routes>
                        <Route path="/login" element={<LoginSection />} />
                        <Route path="/register" element={<RegisterSection />} />
                    </Routes>
                </div>
            )}
<<<<<<< HEAD

=======
>>>>>>> 93377ebfbcd26d14f6f4e8a0b8a9a9d138f8e145
            <Footer />
        </div>
    );
}

<<<<<<< HEAD
export default App;
=======
export default App;
>>>>>>> 93377ebfbcd26d14f6f4e8a0b8a9a9d138f8e145
