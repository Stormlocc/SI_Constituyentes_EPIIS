import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function Profile() {
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
      <div className='content-wrapper'>
        <h1>Este es el perfil</h1>
        {user ? (
          <>
            <p>Nombre de usuario: {user.email}</p>
            <p>Correo electrónico: {user.email}</p>
            {/* Mostrar más detalles del usuario si es necesario */}
          </>
        ) : (
          <p>Cargando datos del perfil...</p>
        )}
      </div>
    </>
  );
}
