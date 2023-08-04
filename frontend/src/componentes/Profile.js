import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function Profile() {
  const [user, setUser] = useState(null);
  const [certificacionNombre, setCertificacionNombre] = useState('');
  const [certificacionFecha, setCertificacionFecha] = useState('');
  const [aceptoAgregar, setAceptoAgregar] = useState(false);
  const [aceptoEditar, setAceptoEditar] = useState(false);
  const navigate = useNavigate();

  const handleCertificacionChange = (event) => {
    const { id, value } = event.target;
    if (id === 'inputCertificacionNombre') {
      setCertificacionNombre(value);
    } else if (id === 'inputCertificacionFecha') {
      setCertificacionFecha(value);
    }
  };

  const handleAgregarCertificacion = async (event) => {
    event.preventDefault();
    if (aceptoAgregar) {
      // Crea una copia actualizada del usuario y agrega la nueva capacitación
      const nuevaCapacitacion = {
        nombre: certificacionNombre,
        fecha: certificacionFecha,
      };
      const updatedUser = {
        ...user,
        perfil: {
          ...user.perfil,
          capacitacion: [...user.perfil.capacitacion, nuevaCapacitacion],
        },
      };

      // Envía los datos actualizados al backend a través de Axios
      try {
        await axios.post('http://localhost:4000/api/users/addCertificacion', updatedUser, {
          headers: {
            'x-access-token': localStorage.getItem('token'),
          },
        });
        // Actualiza el estado del usuario con la nueva capacitación
        setUser(updatedUser);
        // Limpia los campos del formulario
        setCertificacionNombre('');
        setCertificacionFecha('');
      } catch (error) {
        console.error('Error al agregar la certificación:', error);
      }
    } else {
      alert("Tiene que activar el botón para aceptar los cambios");
    }
    setAceptoAgregar(false);
  };

  // Función para manejar la edición del formulario
  const handleEditSubmit = async (event) => {
    event.preventDefault();

    if (aceptoEditar) { // Asegúrate de tener un estado para aceptoEditar similar a aceptoAgregar
      const updatedData = {
        nombres: event.target.inputName.value,
        email: event.target.inputEmail.value,
        tipo_user: event.target.inputTipo_user.value,
        perfil: {
          titulo: [
            {
              nombre: event.target.inputTituloNombre.value,
              fecha: event.target.inputTituloFecha.value,
            },
          ],
          area: event.target.inputArea.value,
          cargo: event.target.inputCargo.value,
        }
      };

      try {
        // Realizar la petición PUT para editar los datos
        const response = await axios.put('http://localhost:4000/api/users/edit', updatedData, {
          headers: {
            'x-access-token': localStorage.getItem('token'),
          },
        });

        // Actualizar el estado del usuario con los datos editados
        setUser(response.data);
        alert('¡Datos editados exitosamente!');
      } catch (error) {
        console.error('Error al editar los datos:', error);
        // Manejar errores aquí
      }
    } else {
      alert("Tiene que activar el botón para aceptar los cambios");
    }
    setAceptoEditar(false); // Asegúrate de resetear aceptoEditar después del submit
  };

  useEffect(() => {
    async function fetchUserData() {
      try {
        const response = await axios.get('http://localhost:4000/api/users/me', {
          headers: {
            'x-access-token': localStorage.getItem('token'),
          },
        });
        //console.log(response.data)
        const { nombres, email, apellidos, tipo_user, perfil } = response.data; // Guarda el usuario en el estado local
        setUser({
          nombres: nombres,
          email: email,
          apellidos: apellidos,
          tipo_user: tipo_user,
          perfil: {
            titulo: perfil.titulo,
            capacitacion: perfil.capacitacion,
            area: perfil.area,
            cargo: perfil.cargo,
            lugar: perfil.lugar
          }
        });

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
  //console.log(user)


  return (
    <>
      <section className="content-wrapper">
        <div className="row">
          <div className="col-md-4">
            <div className="card card-primary card-outline">
              <div className="card-body box-profile">
                <div className="text-center">
                  <img className="profile-user-img img-fluid img-circle" src="../dist/img/avatar5.png" alt="User profile picture" />
                </div>
                <h3 className="profile-username text-center"> {user?.nombres}</h3>
                <h4 className="profile-username text-center"> {user?.apellidos}</h4>
                <p className="text-muted text-center">{user?.tipo_user}</p>
                <ul className="list-group list-group-unbordered mb-3">
                  <li className="list-group-item">
                    <b>Fecha de egresado</b> <a className="float-right">17/12/2016</a>
                  </li>
                  <li className="list-group-item">
                    <b>Constituyente</b> <a className="float-right">{user?.nombres} {user?.apellidos}</a>
                  </li>
                  <li className="list-group-item">
                    <b>Area</b> <a className="float-right">{user?.perfil.area}</a>
                  </li>
                  <li className="list-group-item">
                    <b>Cargo</b> <a className="float-right">{user?.perfil.cargo}</a>
                  </li>
                </ul>
              </div>
              {/* /.card-body */}
            </div>
            <div className="card card-primary">
              <div className="card-header">
                <h3 className="card-title">Sobre mi</h3>
              </div>
              {/* /.card-header */}
              <div className="card-body">
                <strong><i className="fas fa-book mr-1" /> Education</strong>
                <p className="text-muted">
                  Mi rol como constituyente es {user?.tipo_user}
                </p>
                <hr />

                <strong><i className="fas fa-pencil-alt mr-1" /> Titulos</strong>
                <p className="text-muted">
                  {user && user.perfil.titulo.map((certificacion, index) => (
                    <span key={index} className="tag tag-danger">
                      {certificacion.nombre} <p>{certificacion.fecha}</p>
                    </span>
                  ))}
                </p>
              </div>
              {/* /.card-body */}
            </div>
          </div>
          <div className="col-md-8">
            <div className="card">
              <div className="card-header p-2">
                <ul className="nav nav-pills">
                  <li className="nav-item"><a className="nav-link active" href="#timeline" data-toggle="tab"> <i className="fas fa-user-edit" />  Certificaciones y Titulos</a></li>
                  <li className="nav-item"><a className="nav-link" href="#settings" data-toggle="tab"> <i className="far fa-address-card" /> Editar datos</a></li>
                  <li className="nav-item"><a className="nav-link" href="#agregar" data-toggle="tab"> <i className="far fa-address-card" /> Agregar certificacion</a></li>
                </ul>
              </div>{/* /.card-header */}
              <div className="card-body">
                <div className="tab-content">
                  <div className="tab-pane" id="timeline">
                    {/* --------------------------- CERTIFICACIONES Y TITULOS --------------------------- */}
                    {/* -------------------------- --------------------------- -------------------------- */}
                    <div className="card">
                      <div className="card-header">
                        <h1 className="card-title">Lista de certificaciones</h1>
                      </div>
                      <div className="card-body">
                        <table className="table table-bordered table-hover">
                          <thead>
                            <tr>
                              <th style={{ width: 10 }}>#</th>
                              <th>Titulo</th>
                              <th>Fecha finalizacion</th>
                              <th>Progress</th>
                            </tr>
                          </thead>
                          <tbody>
                            {user?.perfil?.capacitacion.map((certificacion, index) => (
                              <tr key={index}>
                                <td>{index + 1}.</td>
                                <td>{certificacion.nombre}</td>
                                <td>{certificacion.fecha}</td>
                                <td>
                                  <div className="progress progress-xs progress-striped active">
                                    <div className="progress-bar bg-success" style={{ width: '100%' }} />
                                  </div>
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                      <div className="card-footer clearfix">
                        <ul className="pagination pagination-sm m-0 float-right">
                          <li className="page-item"><a className="page-link" href="#">«</a></li>
                          <li className="page-item"><a className="page-link" href="#">1</a></li>
                          <li className="page-item"><a className="page-link" href="#">2</a></li>
                          <li className="page-item"><a className="page-link" href="#">»</a></li>
                        </ul>
                      </div>
                    </div>
                    <div className="card">
                      <div className="card-header">
                        <h1 className="card-title">Lista de titulos</h1>
                      </div>
                      {/* /.card-header */}
                      <div className="card-body">
                        <table className="table table-bordered table-hover">
                          <thead>
                            <tr>
                              <th style={{ width: 10 }}>#</th>
                              <th>Titulo</th>
                              <th>Fecha finalizacion</th>
                            </tr>
                          </thead>
                          <tbody>
                            {user?.perfil?.titulo.map((certificacion, index) => (
                              <tr key={index}>
                                <td>{index + 1}.</td>
                                <td>{certificacion.nombre}</td>
                                <td>{certificacion.fecha}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                      {/* /.card-body */}
                      <div className="card-footer clearfix">
                        <ul className="pagination pagination-sm m-0 float-right">
                          <li className="page-item"><a className="page-link" href="#">«</a></li>
                          <li className="page-item"><a className="page-link" href="#">1</a></li>
                          <li className="page-item"><a className="page-link" href="#">2</a></li>
                          <li className="page-item"><a className="page-link" href="#">3</a></li>
                          <li className="page-item"><a className="page-link" href="#">»</a></li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* ------------------------------- EDITAR DATOS ------------------------------------ */}
                  {/* -------------------------- --------------------------- -------------------------- */}
                  <div className="tab-pane" id="settings">
                    <form className="form-horizontal" onSubmit={handleEditSubmit}>
                      <div className="form-group row">
                        <label htmlFor="inputName" className="col-sm-2 col-form-label">Nombres</label>
                        <div className="col-sm-10">
                          <input type="text" className="form-control" id="inputName" placeholder="Nombres" defaultValue={user?.nombres} />
                        </div>
                      </div>
                      <div className="form-group row">
                        <label htmlFor="inputEmail" className="col-sm-2 col-form-label">Email</label>
                        <div className="col-sm-10">
                          <input type="email" className="form-control" id="inputEmail" placeholder="Email" defaultValue={user?.email} />
                        </div>
                      </div>
                      <div className="form-group row">
                        <label htmlFor="inputName2" className="col-sm-2 col-form-label">Rol</label>
                        <div className="col-sm-10">
                          <input type="text" className="form-control" id="inputTipo_user" placeholder="Sera verificado" defaultValue={user?.tipo_user} />
                        </div>
                      </div>
                      <div className="form-group row">
                        <label htmlFor="inputArea" className="col-sm-2 col-form-label">Area</label>
                        <div className="col-sm-10">
                          <input type="text" className="form-control" id="inputArea" placeholder="Area de labor" defaultValue={user?.perfil.area} />
                        </div>
                      </div>
                      <div className="form-group row">
                        <label htmlFor="inputCargo" className="col-sm-2 col-form-label">Cargo</label>
                        <div className="col-sm-10">
                          <input type="text" className="form-control" id="inputCargo" placeholder="Cargo como constituyente" defaultValue={user?.perfil.cargo} />
                        </div>
                      </div>
                      <div className="form-group row">
                        <label htmlFor="inputSkills" className="col-sm-2 col-form-label">Titulo</label>
                        <div className="col-sm-10">
                          <input type="text" className="form-control" id="inputTituloNombre" placeholder="Titulo" />
                        </div>
                      </div>
                      <div className="form-group row">
                        <label htmlFor="inputSkills" className="col-sm-2 col-form-label">Fecha de Titulo</label>
                        <div className="col-sm-10">
                          <input type="text" className="form-control" id="inputTituloFecha" placeholder="Fecha de obtencion de titulo" />
                        </div>
                      </div>
                      <div className="form-group row">
                        <div className="offset-sm-2 col-sm-10">
                          <div className="checkbox">
                            <label>
                              <input
                                type="checkbox"
                                checked={aceptoEditar}
                                onChange={(e) => setAceptoEditar(e.target.checked)}
                              /> Acepto <a href="#">modificar mis datos</a>
                            </label>
                          </div>
                        </div>
                      </div>
                      <div className="form-group row">
                        <div className="offset-sm-2 col-sm-10">
                          <button
                            type="submit"
                            className="btn btn-danger"
                            disabled={!aceptoEditar}
                          >
                            Enviar
                          </button>
                        </div>
                      </div>
                    </form>

                  </div>

                  {/* -------------------------- AGREGAR CERTIFICACION -------------------------------- */}
                  {/* -------------------------- --------------------------- -------------------------- */}
                  <div className="tab-pane" id="agregar">
                    <form className="form-horizontal" onSubmit={handleAgregarCertificacion}>
                      <div className="form-group row">
                        <label htmlFor="inputName" className="col-sm-2 col-form-label">Nombres</label>
                        <div className="col-sm-10">
                          <input type="text" className="form-control" id="inputCertificacionNombre" placeholder="Nombre de certificacion" value={certificacionNombre} onChange={handleCertificacionChange} />
                        </div>
                      </div>
                      <div className="form-group row">
                        <label htmlFor="inputFecha" className="col-sm-2 col-form-label">Fecha</label>
                        <div className="col-sm-10">
                          <input type="text" className="form-control" id="inputCertificacionFecha" placeholder="Fecha certificacion" value={certificacionFecha} onChange={handleCertificacionChange} />
                        </div>
                      </div>
                      <div className="form-group row">
                        <div className="offset-sm-2 col-sm-10">
                          <div className="checkbox">
                            <label>
                              <input
                                type="checkbox"
                                checked={aceptoAgregar}
                                onChange={(e) => setAceptoAgregar(e.target.checked)}
                              /> Acepto agregar <a href="#">certificacion</a>
                            </label>
                          </div>
                        </div>
                      </div>
                      <div className="form-group row">
                        <div className="offset-sm-2 col-sm-10">
                          <button type="submit" className="btn btn-danger" disabled={!aceptoAgregar}> Enviar</button>
                        </div>
                      </div>
                    </form>
                  </div>
                  {/* /.tab-pane */}
                </div>
                {/* /.tab-content */}
              </div>{/* /.card-body */}
            </div>
            {/* /.card */}
          </div>
        </div>
      </section>
    </>
  );
}
