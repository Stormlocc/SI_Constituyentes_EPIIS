import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

export default function Signup() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    // Lógica de autenticación y redirección
    try {
      // Realiza una solicitud POST al backend para enviar los datos del formulario
      const response = await axios.post('http://localhost:4000/api/users/signup', {
        email: email,
        password: password,
      });
      //console.log("Responseeee",response)
      // Aquí recuperar el token y guardarlo en el localStorage
      if (response.data.auth && response.data.token) {
        localStorage.setItem('token', response.data.token);
      }
      // Si la respuesta es exitosa, redirige al usuario a una página específica
      if (response.data.success) {
        navigate('/profile'); // Por ejemplo, redirige a '/dashboard'
      } else {
        // Si hay un mensaje de error en la respuesta, muestra el mensaje en el frontend
        setError(response.data.message || 'Error 1 al iniciar sesión. Verifica tus credenciales de registro.');
      }
    } catch (error) {
      console.error('Error al enviar los datos:', error);
      setError('Error 2 al iniciar sesión. Verifica tus credenciales de registro.');
    }
  };

  return (
    <div className='position-fixed w-100 h-100 d-flex flex-column align-items-center justify-content-center' style={{ background: 'rgba(0, 0, 0, 0.3)' } }>
      <div className='position-fixed w-100 h-100 d-flex align-items-center justify-content-center' >
      <div style={{ background: 'rgba(255, 255, 255, 0.9)', padding: '20px', borderRadius: '10px', margin: '30px' }}>
      <div><h2>Registrarse</h2></div>
        <form onSubmit={handleSubmit}>
        <ul></ul>
        <ul style={{ listStyle: 'none', padding: '0', margin: '0' }}>
              <li style={{ marginBottom: '30px' }}>
                <input
                  type="email"
                  name="email"
                  placeholder="Ingrese su email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </li>
              <li style={{ marginBottom: '30px' }}>
                <input
                  type="password"
                  name="password"
                  placeholder="Ingrese su contraseña"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </li>
              <li>
                <button type="submit" style={{width: '100%', backgroundColor: 'transparent', border: '1px solid blue', color: 'blue', padding: '5px 10px', borderRadius: '5px', cursor: 'pointer' }}>
                  Ingresar</button>
              </li>
            </ul>
        </form>
        {error && <div>{error}</div>} {/* Mostrar el mensaje de error si existe */}
      </div>
      </div>
    </div>
  );
  
}
