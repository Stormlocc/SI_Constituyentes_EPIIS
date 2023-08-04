//frontend/componentes/Signin.js
import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

export default function Signin() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async(event) => {
    event.preventDefault();
    // Lógica de autenticación y redirección
    try {
      // Realiza una solicitud POST al backend para enviar los datos del formulario
      const response = await axios.post('http://localhost:4000/api/users/signin', {
        email: email,
        password: password,
      });
      // Aquí recuperar el token y guardarlo en el localStorage
      if (response.data.auth && response.data.token) {
        localStorage.setItem('token', response.data.token);
      }
      // Aquí puedes manejar la respuesta del servidor si es necesario
      if(response.data.success){
        // Por ejemplo, si la autenticación es exitosa, redirige a '/dashboard'
        navigate('/profile');
        console.log(response.data);
      }

    } catch (error) {
      // Manejo de errores en caso de que la solicitud falle
      console.error('Error al enviar los datos:', error);
      if (error.response && error.response.data && error.response.data === 'Unauthorized') {
        // Si el servidor responde con "Unauthorized", muestra un mensaje de error específico
        setError('Credenciales inválidas. Verifica tu correo electrónico y contraseña.');
      } else {
        // Si no hay un mensaje de error específico, muestra un mensaje genérico
        setError('Error al iniciar sesión. Verifica tus credenciales.');
      }
    }
  };

  return (
    <>
      <h1>Iniciar Sesion</h1>
      <div>
        {error && <p>{error}</p>}
        <form onSubmit={handleSubmit}>
            <div>
              <input
                type="email"
                name="email"
                placeholder="Ingrese su email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type="password"
                name="password"
                placeholder="Ingrese su contraseña"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button type="submit">Ingresar</button>
            </div>
          </form>
      </div>
    </>
  );
}
