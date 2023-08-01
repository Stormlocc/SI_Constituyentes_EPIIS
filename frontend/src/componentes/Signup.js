import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

export default function Signup() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async(event) => {
    event.preventDefault();
    // Lógica de autenticación y redirección
    try {
      // Realiza una solicitud POST al backend para enviar los datos del formulario
      const response = await axios.post('http://localhost:4000/api/users', {
        email: email,
        password: password,
      });

      console.log(response.data);
      // Si la respuesta es exitosa, redirige al usuario a una página específica
      // Puedes utilizar una condición para determinar a qué página redirigir
      if (response.data.message === 'Usuario registrado exitosamente') {
        navigate('/dashboard'); // Por ejemplo, redirige a '/dashboard'
      } else {
        navigate('/signup'); // Redirige a '/signup' si ocurre algún error de validación en el servidor
      }
    } catch (error) {
      console.error('Error al enviar los datos:', error);
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
