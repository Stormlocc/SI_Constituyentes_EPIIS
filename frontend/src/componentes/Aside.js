import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom'

export default function Aside() {

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


    return (
        <>
            {/* Main Sidebar Container */}
            <aside className="main-sidebar sidebar-dark-primary elevation-4 position-fixed h-100">
                {/* Brand Logo */}
                <a href='/dashboard' className="brand-link">
                    <img src="dist/img/informatica.png" alt="AdminLTE Logo" className="brand-image img-circle elevation-3" style={{ opacity: '.8' }} />
                    <span className="brand-text font-weight-light">CONSTITUYENTES</span>
                </a>
                {/* Sidebar */}
                <div className="sidebar">
                    {/* Sidebar user panel (optional) */}
                    <div className="user-panel mt-3 pb-3 mb-3 d-flex">
                        <div className="image">
                            <img src="dist/img/avatar5.png" className="img-circle elevation-2" alt="User Image" />
                        </div>
                        <div className="info">
                            {user ? (
                                <Link to="/profile" className="d-block">
                                    {user.nombres} {user.apellidos}
                                </Link>
                            ) : (
                                <p>Cargando...</p>
                            )}

                        </div>
                    </div>
                    {/* SidebarSearch Form */}
                    <div className="form-inline">
                        <div className="input-group" data-widget="sidebar-search">
                            <input className="form-control form-control-sidebar" type="search" placeholder="Search" aria-label="Search" />
                            <div className="input-group-append">
                                <button className="btn btn-sidebar">
                                    <i className="fas fa-search fa-fw" />
                                </button>
                            </div>
                        </div>
                    </div>
                    {/* Sidebar Menu */}
                    <nav className="mt-2">
                        <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
                            {/* Add icons to the links using the .nav-icon class with font-awesome or any other icon font library */}
                            <li className="nav-item menu-open">
                                <a href="#" className="nav-link active">
                                    <i className="nav-icon fas  fa-globe" />
                                    <p>
                                        Otros sitios web
                                        <i className="right fas fa-angle-left" />
                                    </p>
                                </a>
                                <ul className="nav nav-treeview">
                                    <li className="nav-item">
                                        <a href="https://www.unsaac.edu.pe/" target="_blank" className="nav-link">
                                            <i className="fas fa-mouse-pointer nav-icon"></i><p>Web UNSAAC</p>
                                        </a>
                                    </li>

                                    <li className="nav-item">
                                        <a href="https://www.facebook.com/profile.php?id=100093387651558" target="_blank" className="nav-link">
                                            <i className="fas fa-mouse-pointer nav-icon"></i><p>Facebook</p>
                                        </a>
                                    </li>

                                    <li className="nav-item">
                                        <a href="http://in.unsaac.edu.pe/home/" target="_blank" className="nav-link">
                                            <i className="fas fa-mouse-pointer nav-icon"></i><p>Sitio web EPIIS</p>
                                        </a>
                                    </li>
                                </ul>
                            </li>

                            <li className="nav-header">MENU OPCIONES</li>

                            <li className="nav-item">
                                <Link to="/Profile" className="nav-link">
                                    <i className="nav-icon fas fa-columns" />
                                    <p>Perfil</p>
                                </Link>
                            </li>
                            {user && user.tipo_user !== 'constituyente' && (
                                <>
                                    <li className="nav-item">
                                        <Link to="/filtros" className="nav-link">
                                            <i className="nav-icon fas fa-columns" />
                                            <p>Filtros constituyentes</p>
                                        </Link>
                                    </li>  

                            <li className="nav-item">
                                <Link to="/searchCertificados" className="nav-link">
                                    <i className="nav-icon fas fa-columns" />
                                    <p>Busqueda Certificados</p>
                                </Link>
                            </li>
                            </>
                            )}

                            <li className="nav-header">OTROS</li>
                            <li className="nav-item">
                                <a href="https://adminlte.io/docs/3.1/" className="nav-link">
                                    <i className="nav-icon fas fa-ellipsis-h" />
                                    <p>Acreditacion</p>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="https://stormlocc.github.io/INFamily-Plan-Trabajo/" className="nav-link">
                                    <i className="nav-icon fas fa-file" />
                                    <p>Centro Federado</p>
                                </a>
                            </li>

                        </ul>
                    </nav>
                    {/* /.sidebar-menu */}
                </div>
                {/* /.sidebar */}
            </aside>
        </>
    )
}
