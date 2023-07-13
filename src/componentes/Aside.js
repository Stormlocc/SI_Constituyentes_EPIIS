import React from 'react'

export default function Aside() {
  return (
    <>
        {/* Main Sidebar Container */}
        <aside className="main-sidebar sidebar-dark-primary elevation-4">
        {/* Brand Logo */}
        <a href="index3.html" className="brand-link">
            <img src="dist/img/AdminLTELogo.png" alt="AdminLTE Logo" className="brand-image img-circle elevation-3" style={{opacity: '.8'}} />
            <span className="brand-text font-weight-light">CONSTITUYENTES EPIIS</span>
        </a>
        {/* Sidebar */}
        <div className="sidebar">
            {/* Sidebar user panel (optional) */}
            <div className="user-panel mt-3 pb-3 mb-3 d-flex">
            <div className="image">
                <img src="dist/img/user2-160x160.jpg" className="img-circle elevation-2" alt="User Image" />
            </div>
            <div className="info">
                <a href="#" className="d-block">Alexander Pierce</a>
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
                    <i className="nav-icon fas fa-tachometer-alt" />
                    <p>
                    Otros sitios web
                    <i className="right fas fa-angle-left" />
                    </p>
                </a>
                <ul className="nav nav-treeview">
                    <li className="nav-item">
                    <a href="./index.html" className="nav-link">
                        <i className="far fa-circle nav-icon" />
                        <p>Dashboard v1</p>
                    </a>
                    </li>
                    <li className="nav-item">
                    <a href="./index2.html" className="nav-link">
                        <i className="far fa-circle nav-icon" />
                        <p>Dashboard v2</p>
                    </a>
                    </li>
                    <li className="nav-item">
                    <a href="./index3.html" className="nav-link active">
                        <i className="far fa-circle nav-icon" />
                        <p>Dashboard v3</p>
                    </a>
                    </li>
                </ul>
                </li>
                
                
                
                <li className="nav-item">
                <a href="#" className="nav-link">
                    <i className="nav-icon fas fa-tree" />
                    <p>
                    UI Elements
                    <i className="fas fa-angle-left right" />
                    </p>
                </a>
                <ul className="nav nav-treeview">
                    <li className="nav-item">
                    <a href="pages/UI/general.html" className="nav-link">
                        <i className="far fa-circle nav-icon" />
                        <p>General</p>
                    </a>
                    </li>
                    <li className="nav-item">
                    <a href="pages/UI/icons.html" className="nav-link">
                        <i className="far fa-circle nav-icon" />
                        <p>Icons</p>
                    </a>
                    </li>
                    <li className="nav-item">
                    <a href="pages/UI/buttons.html" className="nav-link">
                        <i className="far fa-circle nav-icon" />
                        <p>Buttons</p>
                    </a>
                    </li>
                    <li className="nav-item">
                    <a href="pages/UI/sliders.html" className="nav-link">
                        <i className="far fa-circle nav-icon" />
                        <p>Sliders</p>
                    </a>
                    </li>
                    <li className="nav-item">
                    <a href="pages/UI/modals.html" className="nav-link">
                        <i className="far fa-circle nav-icon" />
                        <p>Modals &amp; Alerts</p>
                    </a>
                    </li>
                    <li className="nav-item">
                    <a href="pages/UI/navbar.html" className="nav-link">
                        <i className="far fa-circle nav-icon" />
                        <p>Navbar &amp; Tabs</p>
                    </a>
                    </li>
                    <li className="nav-item">
                    <a href="pages/UI/timeline.html" className="nav-link">
                        <i className="far fa-circle nav-icon" />
                        <p>Timeline</p>
                    </a>
                    </li>
                    <li className="nav-item">
                    <a href="pages/UI/ribbons.html" className="nav-link">
                        <i className="far fa-circle nav-icon" />
                        <p>Ribbons</p>
                    </a>
                    </li>
                </ul>
                </li>
                
                
                <li className="nav-header">MENU OPCIONES</li>
               
                
                <li className="nav-item">
                <a href="pages/kanban.html" className="nav-link">
                    <i className="nav-icon fas fa-columns" />
                    <p>
                    Kanban Board
                    </p>
                </a>
                </li>
                
                <li className="nav-item">
                <a href="#" className="nav-link">
                    <i className="nav-icon far fa-plus-square" />
                    <p>
                    Extras
                    <i className="fas fa-angle-left right" />
                    </p>
                </a>
                <ul className="nav nav-treeview">
                    <li className="nav-item">
                    <a href="#" className="nav-link">
                        <i className="far fa-circle nav-icon" />
                        <p>
                        Login &amp; Register v1
                        <i className="fas fa-angle-left right" />
                        </p>
                    </a>
                    <ul className="nav nav-treeview">
                        <li className="nav-item">
                        <a href="pages/examples/login.html" className="nav-link">
                            <i className="far fa-circle nav-icon" />
                            <p>Login v1</p>
                        </a>
                        </li>
                        <li className="nav-item">
                        <a href="pages/examples/register.html" className="nav-link">
                            <i className="far fa-circle nav-icon" />
                            <p>Register v1</p>
                        </a>
                        </li>
                        <li className="nav-item">
                        <a href="pages/examples/forgot-password.html" className="nav-link">
                            <i className="far fa-circle nav-icon" />
                            <p>Forgot Password v1</p>
                        </a>
                        </li>
                        <li className="nav-item">
                        <a href="pages/examples/recover-password.html" className="nav-link">
                            <i className="far fa-circle nav-icon" />
                            <p>Recover Password v1</p>
                        </a>
                        </li>
                    </ul>
                    </li>
                    <li className="nav-item">
                    <a href="#" className="nav-link">
                        <i className="far fa-circle nav-icon" />
                        <p>
                        Login &amp; Register v2
                        <i className="fas fa-angle-left right" />
                        </p>
                    </a>
                    <ul className="nav nav-treeview">
                        <li className="nav-item">
                        <a href="pages/examples/login-v2.html" className="nav-link">
                            <i className="far fa-circle nav-icon" />
                            <p>Login v2</p>
                        </a>
                        </li>
                        <li className="nav-item">
                        <a href="pages/examples/register-v2.html" className="nav-link">
                            <i className="far fa-circle nav-icon" />
                            <p>Register v2</p>
                        </a>
                        </li>
                        <li className="nav-item">
                        <a href="pages/examples/forgot-password-v2.html" className="nav-link">
                            <i className="far fa-circle nav-icon" />
                            <p>Forgot Password v2</p>
                        </a>
                        </li>
                        <li className="nav-item">
                        <a href="pages/examples/recover-password-v2.html" className="nav-link">
                            <i className="far fa-circle nav-icon" />
                            <p>Recover Password v2</p>
                        </a>
                        </li>
                    </ul>
                    </li>
                    <li className="nav-item">
                    <a href="pages/examples/lockscreen.html" className="nav-link">
                        <i className="far fa-circle nav-icon" />
                        <p>Lockscreen</p>
                    </a>
                    </li>
                    <li className="nav-item">
                    <a href="pages/examples/legacy-user-menu.html" className="nav-link">
                        <i className="far fa-circle nav-icon" />
                        <p>Legacy User Menu</p>
                    </a>
                    </li>
                    <li className="nav-item">
                    <a href="pages/examples/language-menu.html" className="nav-link">
                        <i className="far fa-circle nav-icon" />
                        <p>Language Menu</p>
                    </a>
                    </li>
                    <li className="nav-item">
                    <a href="pages/examples/404.html" className="nav-link">
                        <i className="far fa-circle nav-icon" />
                        <p>Error 404</p>
                    </a>
                    </li>
                    <li className="nav-item">
                    <a href="pages/examples/500.html" className="nav-link">
                        <i className="far fa-circle nav-icon" />
                        <p>Error 500</p>
                    </a>
                    </li>
                    <li className="nav-item">
                    <a href="pages/examples/pace.html" className="nav-link">
                        <i className="far fa-circle nav-icon" />
                        <p>Pace</p>
                    </a>
                    </li>
                    <li className="nav-item">
                    <a href="pages/examples/blank.html" className="nav-link">
                        <i className="far fa-circle nav-icon" />
                        <p>Blank Page</p>
                    </a>
                    </li>
                    <li className="nav-item">
                    <a href="starter.html" className="nav-link">
                        <i className="far fa-circle nav-icon" />
                        <p>Starter Page</p>
                    </a>
                    </li>
                </ul>
                </li>
                
                <li className="nav-header">MISCELLANEOUS</li>
                <li className="nav-item">
                <a href="iframe.html" className="nav-link">
                    <i className="nav-icon fas fa-ellipsis-h" />
                    <p>Tabbed IFrame Plugin</p>
                </a>
                </li>
                <li className="nav-item">
                <a href="https://adminlte.io/docs/3.1/" className="nav-link">
                    <i className="nav-icon fas fa-file" />
                    <p>Documentation</p>
                </a>
                </li>
                <li className="nav-header">CONSULTAS POR NIVEL</li>
                <li className="nav-item">
                <a href="#" className="nav-link">
                    <i className="fas fa-circle nav-icon" />
                    <p>Level 1</p>
                </a>
                </li>
                <li className="nav-item">
                <a href="#" className="nav-link">
                    <i className="nav-icon fas fa-circle" />
                    <p>
                    Level 1
                    <i className="right fas fa-angle-left" />
                    </p>
                </a>
                <ul className="nav nav-treeview">
                    <li className="nav-item">
                    <a href="#" className="nav-link">
                        <i className="far fa-circle nav-icon" />
                        <p>Level 2</p>
                    </a>
                    </li>
                    <li className="nav-item">
                    <a href="#" className="nav-link">
                        <i className="far fa-circle nav-icon" />
                        <p>
                        Level 2
                        <i className="right fas fa-angle-left" />
                        </p>
                    </a>
                    <ul className="nav nav-treeview">
                        <li className="nav-item">
                        <a href="#" className="nav-link">
                            <i className="far fa-dot-circle nav-icon" />
                            <p>Level 3</p>
                        </a>
                        </li>
                        <li className="nav-item">
                        <a href="#" className="nav-link">
                            <i className="far fa-dot-circle nav-icon" />
                            <p>Level 3</p>
                        </a>
                        </li>
                        <li className="nav-item">
                        <a href="#" className="nav-link">
                            <i className="far fa-dot-circle nav-icon" />
                            <p>Level 3</p>
                        </a>
                        </li>
                    </ul>
                    </li>
                    <li className="nav-item">
                    <a href="#" className="nav-link">
                        <i className="far fa-circle nav-icon" />
                        <p>Level 2</p>
                    </a>
                    </li>
                </ul>
                </li>
                <li className="nav-item">
                <a href="#" className="nav-link">
                    <i className="fas fa-circle nav-icon" />
                    <p>Level 1</p>
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
