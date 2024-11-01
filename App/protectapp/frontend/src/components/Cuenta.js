// src/components/Cuenta.js
import React, { useEffect, useState } from 'react';
<<<<<<< HEAD
import '../css/Account.css';
import UserMenu from './UserMenu'; // Importa el componente UserMenu
=======
import { Link } from 'react-router-dom';
import UserIcon from '../assets/img/cuenta.png';
import '../css/Account.css';
>>>>>>> 93377ebfbcd26d14f6f4e8a0b8a9a9d138f8e145

const Cuenta = () => {
    const [usuario, setUsuario] = useState({
        nombre: '',
        email: '',
        fechaCreacion: '',
        esActivo: ''
    });
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    useEffect(() => {
        obtenerUsuario();
    }, []);

    const obtenerUsuario = async () => {
        const token = localStorage.getItem('access_token');
        if (!token) {
            alert("No has iniciado sesión. Redirigiendo a la página de inicio de sesión.");
            window.location.href = "/login";
            return;
        }
        try {
<<<<<<< HEAD
            const response = await fetch('http://localhost:8000/api/user/', {
=======
            const response = await fetch('http://localhost:8000/api/usuarios/', {
>>>>>>> 93377ebfbcd26d14f6f4e8a0b8a9a9d138f8e145
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });
            if (response.ok) {
                const data = await response.json();
                setUsuario({
                    nombre: data.nombre,
                    email: data.email,
                    fechaCreacion: new Date(data.date_joined).toLocaleDateString(),
                    esActivo: data.es_activo ? "Activo" : "Inactivo"
                });
            } else {
                setErrorMessage('Error al cargar los datos del usuario');
            }
        } catch (error) {
            setErrorMessage('Error al conectarse al servidor');
        }
    };

    const actualizarUsuario = async () => {
        const token = localStorage.getItem('access_token');
        if (password && password.length < 8) {
            setErrorMessage('La contraseña debe tener al menos 8 caracteres.');
            return;
        }
        try {
<<<<<<< HEAD
            const response = await fetch('http://localhost:8000/api/user/', {
=======
            const response = await fetch('http://localhost:8000/api/usuarios/', {
>>>>>>> 93377ebfbcd26d14f6f4e8a0b8a9a9d138f8e145
                method: 'PUT',
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    nombre: usuario.nombre,
                    password: password || undefined
                })
            });
            if (response.ok) {
                alert('Usuario actualizado');
                obtenerUsuario();
            } else {
                setErrorMessage('Error al actualizar el usuario.');
            }
        } catch (error) {
            setErrorMessage('Error al conectarse al servidor.');
        }
    };

<<<<<<< HEAD
=======
    const logout = () => {
        localStorage.removeItem('access_token');
        alert("Has cerrado sesión.");
        window.location.href = "/login";
    };

>>>>>>> 93377ebfbcd26d14f6f4e8a0b8a9a9d138f8e145
    return (
        <div className="cuenta-page main-content">
            <div className="content-header">
                <h2>Centro de Miembros Protect</h2>
<<<<<<< HEAD
                <UserMenu /> {/* Aquí está el menú de usuario */}
=======
                <div className="user-info">
                    <img src={UserIcon} alt="User Icon" onClick={() => document.getElementById("user-dropdown").classList.toggle("show")} />
                    <div className="user-dropdown" id="user-dropdown">
                        <Link to="/cuenta">Mi Cuenta</Link>
                        <Link to="/login" onClick={logout}>Cerrar Sesión</Link>
                    </div>
                </div>
>>>>>>> 93377ebfbcd26d14f6f4e8a0b8a9a9d138f8e145
            </div>

            <div className="form-section">
                <h4>Administre su información personal</h4>
                <form onSubmit={(e) => { e.preventDefault(); actualizarUsuario(); }}>
                    <div className="form-group">
                        <label>Nombre Completo:</label>
<<<<<<< HEAD
                        <input
                            type="text"
                            id="nombre"
                            value={usuario.nombre}
                            onChange={(e) => setUsuario({ ...usuario, nombre: e.target.value })}
                            disabled
                            autoComplete="name" // Añade autocomplete para el nombre
                        />
                        <button
                            type="button"
                            onClick={() => {
                                const inputNombre = document.getElementById('nombre');
                                inputNombre.disabled = !inputNombre.disabled;
                                if (inputNombre.disabled) {
                                    actualizarUsuario();
                                }
                            }}
                        >
=======
                        <input type="text" id="nombre" value={usuario.nombre} onChange={(e) => setUsuario({ ...usuario, nombre: e.target.value })} disabled />
                        <button type="button" onClick={() => {
                            const inputNombre = document.getElementById('nombre');
                            inputNombre.disabled = !inputNombre.disabled;
                            if (inputNombre.disabled) {
                                actualizarUsuario();
                            }
                        }}>
>>>>>>> 93377ebfbcd26d14f6f4e8a0b8a9a9d138f8e145
                            {document.getElementById('nombre') && document.getElementById('nombre').disabled ? "Editar" : "Guardar"}
                        </button>
                    </div>
                    <div className="form-group">
                        <label>Correo Electrónico:</label>
<<<<<<< HEAD
                        <input type="email" value={usuario.email} disabled autoComplete="email" />
=======
                        <input type="email" value={usuario.email} disabled />
>>>>>>> 93377ebfbcd26d14f6f4e8a0b8a9a9d138f8e145
                    </div>
                    <div className="form-group">
                        <label>Fecha de Registro:</label>
                        <input type="text" value={usuario.fechaCreacion} disabled />
                    </div>
                    <div className="form-group">
                        <label>Estado Activo:</label>
<<<<<<< HEAD
                        <input type="text" value={usuario.esActivo} disabled autoComplete="username" />
                    </div>
                    <div className="form-group">
                        <label>Contraseña:</label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            autoComplete="current-password" // Añade autocomplete para mejorar accesibilidad y seguridad
                        />
=======
                        <input type="text" value={usuario.esActivo} disabled />
                    </div>
                    <div className="form-group">
                        <label>Contraseña:</label>
                        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
>>>>>>> 93377ebfbcd26d14f6f4e8a0b8a9a9d138f8e145
                        <button type="submit" className="btn btn-primary">Actualizar Contraseña</button>
                    </div>
                    {errorMessage && <div className="text-danger">{errorMessage}</div>}
                </form>
            </div>
        </div>
    );
};

export default Cuenta;
