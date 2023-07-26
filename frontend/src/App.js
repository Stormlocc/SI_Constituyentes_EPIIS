import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Portada from './componentes/Portada';
import Footer from './componentes/Footer';
import Header from './componentes/Header'
import Reporte from './componentes/Reporte'
import Aside from './componentes/Aside'
import Profile from './componentes/Profile';
import ActualizarInformacion from './componentes/ActualizarInformacion';
import Buscar from './componentes/Buscar';
import Consultar from './componentes/Consultar'
import Historial from './componentes/Historial'

import 'bootstrap/dist/css/adminlte.min.css'
import 'bootstrap/plugins/fontawesome-free/css/all.min.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path='/'  element={<Portada/>}  />

        <Route path='/profile' element={<>
                                  <Header />
                                <Profile/> 
                                  <Aside />
                                  <Footer />
        </>
        } />
        <Route path='/dashboard' element={<>
                                  <Header />
                                  <Reporte />
                                  <Aside />
                                  <Footer />
        </>
        } />

        <Route path='/actualizarCte' element={<>
                                  <Header />
                                  <ActualizarInformacion />
                                  <Aside />
                                  <Footer />
        </>
        } />

        <Route path='/historial' element={<>
                                  <Header />
                                  <Historial />
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
