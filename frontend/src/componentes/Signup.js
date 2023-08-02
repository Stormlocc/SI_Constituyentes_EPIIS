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
        navigate('/dashboard'); // Por ejemplo, redirige a '/dashboard'
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
    <>
      <div>
        <h1>Signup Registrar usuario</h1>
        <Link to="/dashboard">Dashboard</Link>
      </div>

      <div>
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
          {error && <div>{error}</div>} {/* Mostrar el mensaje de error si existe */}
      </div>
    </>
  );
}
