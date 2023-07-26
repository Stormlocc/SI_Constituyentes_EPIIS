import React, { useEffect, useState } from 'react';
import axios from 'axios'

export default function Historial() {
  
  const [users, setUsers] = useState([]);

  //Es un hook como el use state
  useEffect( ()=>{fetchData()}, [] )

  async function fetchData() {
    try {
      // fetch permite hacer peticiones http como post get put delete
      const res = await axios.get('http://localhost:4000/api/perfil');
      setUsers(res.data);
      console.log(users);
    } catch (error) {
      console.error('Error al obtener los datos:', error);
    }
  }

  return (
    <>
    <div className='content-wrapper row'>
      <div className='col-md-4'>
        <div className='card card-body'>
          <h3>Crear nuevo perfil</h3>
          <form>

          </form>
        </div>
      </div>
      <div className='col-md-8'>
        <ul className='list-group'>
          {users.map(user=> 
            (<li key={user._id} className='list-group' >
            {user.nombres}</li>))
          }
        </ul>
      </div>
    </div>
    </>
  )
}
