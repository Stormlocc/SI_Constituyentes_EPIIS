import React from 'react'
import { Link } from 'react-router-dom'

export default function Aside() {
  return (
    <>
        {/* Main Sidebar Container */}
        <aside className="main-sidebar sidebar-dark-primary elevation-4">
        {/* Brand Logo */}
        <a href='/dashboard' className="brand-link">
            <img src="dist/img/AdminLTELogo.png" alt="AdminLTE Logo" className="brand-image img-circle elevation-3" style={{opacity: '.8'}} />
            <span className="brand-text font-weight-light">CONSTITUYENTES</span>
        </a>
        {/* Sidebar */}
        <div className="sidebar">
            {/* Sidebar user panel (optional) */}
            <div className="user-panel mt-3 pb-3 mb-3 d-flex">
            <div className="image">
                <img src="dist/img/user2-160x160.jpg" className="img-circle elevation-2" alt="User Image" />
            </div>
            <div className="info">
                <Link to="/profile" className="d-block">Alexander Pierce</Link>
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
                {/* Add icons to the links using the .nav-icon class
                with font-awesome or any other icon font library */}
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
                    <a href="https://www.unsaac.edu.pe/" target="_blank" className="nav-link">
                    <i className="fas fa-mouse-pointer nav-icon"></i><p>Facebook</p>
                    </a>
                    </li>

                    <li className="nav-item">
                    <a href="https://www.unsaac.edu.pe/" target="_blank" className="nav-link">
                    <i className="fas fa-mouse-pointer nav-icon"></i><p>Sitio web EPIIS</p>
                    </a>
                    </li>
                </ul>
                </li>
                

                <li className="nav-header">MENU OPCIONES</li>
               
                <li className="nav-item">
                <Link to="/actualizarCte" className="nav-link">
                    <i className="nav-icon fas fa-columns" />
                    <p>Actualizar informacion</p>
                </Link>
                </li>
                <li className="nav-item">
                <Link to="/historial" className="nav-link">
                    <i className="nav-icon fas fa-columns" />
                    <p>Historial</p>
                </Link>
                </li>
                
                <li className="nav-item">
                <a href="#" className="nav-link">
                    <i className="nav-icon far fa-plus-square" />
                    <p>
                    Listar
                    <i className="fas fa-angle-left right" />
                    </p>
                </a>
                <ul className="nav nav-treeview">
                    <li className="nav-item">
                    <Link to="/consultar" className="nav-link">
                        <i className="far fa-circle nav-icon" />
                        <p>Consultar constituyentes</p>
                    </Link>
                    </li>
                    <li className="nav-item">
                    <Link to="/buscar" className="nav-link">
                        <i className="far fa-circle nav-icon" />
                        <p>Buscar constituyentes</p>
                    </Link>
                    </li>
                    <li className="nav-item">
                    <Link to="/dashboard" className="nav-link">
                        <i className="far fa-circle nav-icon" />
                        <p>Reporte constituyentes</p>
                    </Link>
                    </li>
                </ul>
                </li>
                
                <li className="nav-header">OTROS</li>
                <li className="nav-item">
                <a href="iframe.html" className="nav-link">
                    <i className="nav-icon fas fa-ellipsis-h" />
                    <p>Acreditacion</p>
                </a>
                </li>
                <li className="nav-item">
                <a href="https://adminlte.io/docs/3.1/" className="nav-link">
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
