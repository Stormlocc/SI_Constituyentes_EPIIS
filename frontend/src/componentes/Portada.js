import React from 'react'
import { Link } from 'react-router-dom'

export default function Portada() {
  return (
    <>
      <div>
        <h1>PORTADA cpmt CONSTITU</h1>
        <Link className='navbar-brand' to='/dashboard'>
          dashboaard
        </Link>
      </div>

      <div>
        <Link to="/signin" className="nav-link">
                      <i className="nav-icon fas fa-columns" />
                      <p>Iniciar sesion</p>
                  </Link>
      </div>

      <div>
        <Link to="/signup" className="nav-link">
                      <i className="nav-icon fas fa-columns" />
                      <p>Crear usuario</p>
                  </Link>
      </div>

    </>
  )
}
