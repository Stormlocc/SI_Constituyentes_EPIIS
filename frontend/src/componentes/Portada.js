import React from 'react';
import { Link } from 'react-router-dom';

const backgroundStyle = {
  backgroundImage: 'url("/ruta-de-tu-imagen.jpg")', // Reemplaza "/ruta-de-tu-imagen.jpg" con la ruta de tu imagen de fondo
  backgroundSize: 'cover',
  backgroundPosition: 'center',
};

export default function Portada() {
  return (
    <div className="container-fluid h-100 d-flex align-items-center" style={backgroundStyle}>
      <div className="row w-100">
        <div className="col-md-6 mx-auto">
          <h1 className="text-center">PORTADA CONSTITUYENTES</h1>
          <Link className='navbar-brand d-block text-center mb-3' to='/dashboard'>
            Dashboard
          </Link>
        </div>
      </div>

      <div className="row w-100">
        <div className="col-md-6 mx-auto">
          <div className="row">
            <div className="col-6">
              <Link to="/signin" className="btn btn-primary btn-block">
                <i className="fas fa-columns mr-2" />
                Iniciar sesión
              </Link>
            </div>
            <div className="col-6">
              <Link to="/signup" className="btn btn-secondary btn-block">
                <i className="fas fa-columns mr-2" />
                Crear usuario
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
