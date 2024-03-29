import React, { useState, useEffect} from 'react';
import axios from 'axios'
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Portada from './componentes/Portada';
import Footer from './componentes/Footer';
import Header from './componentes/Header'
import Reporte from './componentes/Reporte'
import Aside from './componentes/Aside'
import Profile from './componentes/Profile';
import Buscar from './componentes/Buscar';
import Consultar from './componentes/Consultar'
import Filtros from './componentes/Filtros'
import Signup from './componentes/Signup';
import Signin from './componentes/Signin';

const API_URL = 'http://localhost:4000/api/users'; // Reemplaza con la URL de tu servidor backend

function App() {

  const [state, setState] = useState('');

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await axios.get('http://localhost:4000/api/users');
        setState(res.data);
      } catch (error) {
        console.error('Error al obtener los usuarios:', error);
      }
    }

    fetchData(); // Llamamos a la función fetchData dentro de useEffect

  }, []); // Agregamos un array vacío como segundo argumento para que useEffect se ejecute solo una vez al montar el componente
  
  return (
    <BrowserRouter>
      <Routes>

        <Route path='/'  element={<Portada/>}  />

        <Route path='/signup' element={<>
                                <Signup/> 
                                  <Portada />
        </>
        } />

        <Route path='/signin' element={<>
                                <Signin/> 
                                  <Portada />
        </>
        } />

        <Route path='/profile' element={<>
                                  <Header />
                                <Profile/> 
                                  <Aside />
                                  <Footer />
        </>
        } />
        <Route path='/searchCertificados' element={<>
                                  <Header />
                                  <Reporte />
                                  <Aside />
                                  <Footer />
        </>
        } />

        <Route path='/filtros' element={<>
                                  <Header />
                                  <Filtros />
                                  <Aside />
                                  <Footer />
        </>
        } />

        <Route path='/consultar' element={<>
                                  <Header />
                                  <Consultar />
                                  <Aside />
                                  <Footer />
        </>
        } />

        <Route path='/buscar' element={<>
                                  <Header />
                                  <Buscar />
                                  <Aside />
                                  <Footer />
        </>
        } />





      </Routes>

    </BrowserRouter>
  )
}

export default App;
