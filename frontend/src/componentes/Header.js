import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import React, { useEffect, useState } from 'react';

export default function Header() {

    /******* VERIFICAR SI EL USUARIO INICIO SESION PARA MOSTRAR EL COMPONENTE  *******/
    const [user, setUser] = useState(null);
    const navigate = useNavigate();
    useEffect(() => {
        async function fetchUserData() {
            try {
                const response = await axios.get('http://localhost:4000/api/users/me', {
                    headers: {
                        'x-access-token': localStorage.getItem('token'),
                    },
                });
                setUser(response.data); // Guarda el usuario en el estado local
            } catch (error) {
                console.error('Error al obtener los datos del usuario:', error);
                // Aquí puedes manejar los diferentes errores según el código de estado
                if (error.response && error.response.status === 401) {
                    // Redirige al usuario a la página de inicio de sesión si el token es inválido o no se proporciona
                    navigate('/');
                } else {
                    // Manejar otros errores aquí
                }
            }
        }

        fetchUserData();
    }, [navigate]);

    /******* VERIFICAR SI EL USUARIO INICIO SESION PARA SALIR DE SESION  *******/
    const handleSignout = async () => {
        try {

            // Elimina el token del local storage al hacer logout
            localStorage.removeItem('token');
            // Envía una solicitud GET al backend para cerrar la sesión
            await axios.get('http://localhost:4000/api/users/logout');

            // Redirecciona al usuario a la página principal después de cerrar sesión
            navigate('/');
        } catch (error) {
            console.error('Error al cerrar sesión:', error);
        }
    };




    return (
        <>
            {/* Navbar */}
            <nav className="main-header navbar navbar-expand navbar-white navbar-light">
                {/* Left navbar links */}
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <a className="nav-link" data-widget="pushmenu" href="#" role="button"><i className="fas fa-bars" /></a>
                    </li>
                    <li className="nav-item d-none d-sm-inline-block">
                        <a href="/dashboard" className="nav-link">Principal</a>
                    </li>
                    <li className="nav-item d-none d-sm-inline-block">
                        <a href="#" className="nav-link">Contacto</a>
                    </li>
                </ul>
                {/* Right navbar links */}
                <ul className="navbar-nav ml-auto">
                    {/* Navbar Search */}
                    <li className="nav-item">
                        <a className="nav-link" data-widget="navbar-search" href="#" role="button">
                            <i className="fas fa-search" />
                        </a>
                        <div className="navbar-search-block">
                            <form className="form-inline">
                                <div className="input-group input-group-sm">
                                    <input className="form-control form-control-navbar" type="search" placeholder="Search" aria-label="Search" />
                                    <div className="input-group-append">
                                        <button className="btn btn-navbar" type="submit">
                                            <i className="fas fa-search" />
                                        </button>
                                        <button className="btn btn-navbar" type="button" data-widget="navbar-search">
                                            <i className="fas fa-times" />
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </li>
                    {/* Notifications Dropdown Menu */}
                    <li className="nav-item dropdown">
                        <a className="nav-link" data-toggle="dropdown" href="#">
                            <i className="far fa-bell" />
                            <span className="badge badge-warning navbar-badge">15</span>
                        </a>
                        <div className="dropdown-menu dropdown-menu-lg dropdown-menu-right">
                            <span className="dropdown-item dropdown-header">15 Notifications</span>
                            <div className="dropdown-divider" />
                            <a href="#" className="dropdown-item">
                                <i className="fas fa-envelope mr-2" /> 4 new messages
                                <span className="float-right text-muted text-sm">3 mins</span>
                            </a>
                            <div className="dropdown-divider" />
                            <a href="#" className="dropdown-item">
                                <i className="fas fa-users mr-2" /> 8 friend requests
                                <span className="float-right text-muted text-sm">12 hours</span>
                            </a>
                            <div className="dropdown-divider" />
                            <a href="#" className="dropdown-item">
                                <i className="fas fa-file mr-2" /> 3 new reports
                                <span className="float-right text-muted text-sm">2 days</span>
                            </a>
                            <div className="dropdown-divider" />
                            <a href="#" className="dropdown-item dropdown-footer">See All Notifications</a>
                        </div>
                    </li>

                    <li className="nav-item">
                        <a className="nav-link" data-widget="fullscreen" href="#" role="button">
                            <i className="fas fa-expand-arrows-alt" />
                        </a>
                    </li>
                    <li className="nav-item nav-link">
                        <div>
                            <button className=" btn-outline-danger" onClick={handleSignout}>Cerrar Sesión</button>
                        </div>

                    </li>
                </ul>
            </nav>

        </>
    )
}
