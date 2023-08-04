import React from 'react';
import { Link} from 'react-router-dom';
import backgroundImage from '../img/facu.jpg'; // Cambia la ruta según la ubicación de tu imagen

export default function Portada() {
  const backgroundStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    minHeight: '100vh', // Establece la altura mínima de la vista completa
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start', // Cambiado a 'flex-start' para alinear en el centro superior
    alignItems: 'center'
  };
  
  const titleStyle = {
    background: 'rgba(0, 0, 0, 0.15)',
    color: 'white',
    padding: '10px',
    margin: '40px',
    borderRadius: '20px',
    width: 'fit-content',
    margin: '0 auto',
  };

  const divStyle = {
    margin: '40px'
  };

  return (
    <div style={backgroundStyle}>
      <div className="container">
        <div className="row">
          <div className="col-md-10 mx-auto" style={divStyle}>
            <div style={titleStyle}>
              <h1 className="text-center">PORTADA CONSTITUYENTES</h1>
            </div>
          </div>
        </div>
  
        <div className="row">
          <div className="col-md-10 mx-auto">
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
    </div>
  );
  
  
}
