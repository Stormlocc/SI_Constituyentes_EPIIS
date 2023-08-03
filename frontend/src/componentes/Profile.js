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
        console.log(response.data)
        const { nombres, apellidos, tipo_user, perfil } = response.data; // Guarda el usuario en el estado local
        setUser({
          nombres: nombres,
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
  console.log(user)


  return (
    <>

      <section className="content-wrapper">
        <div className="row">
          <div className="col-md-3">
            {/* Profile Image */}
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
                    <b>Nombres</b> <a className="float-right">{user?.nombres}</a>
                  </li>
                  <li className="list-group-item">
                    <b>Apellidos</b> <a className="float-right">{user?.apellidos}</a>
                  </li>
                </ul>
              </div>
              {/* /.card-body */}
            </div>
            {/* /.card */}
            {/* About Me Box */}
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

                <strong><i className="fas fa-pencil-alt mr-1" /> Certificaciones</strong>
                <p className="text-muted">
                  {user && user.perfil.capacitacion.map((certificacion, index) => (
                    <span key={index} className="tag tag-danger">
                      {certificacion.nombre} <p>{certificacion.fecha}</p>
                    </span>
                  ))}
                </p>
              </div>
              {/* /.card-body */}
            </div>
            {/* /.card */}
          </div>
          {/* /.col */}
          <div className="col-md-7">
            <div className="card">
              <div className="card-header p-2">
                <ul className="nav nav-pills">
                  <li className="nav-item"><a className="nav-link active" href="#timeline" data-toggle="tab">Grados y Titulos</a></li>
                  <li className="nav-item"><a className="nav-link" href="#settings" data-toggle="tab">Editar datos</a></li>
                  <li className="nav-item"><a className="nav-link" href="#agregar" data-toggle="tab">Agregar certificacion</a></li>
                </ul>
              </div>{/* /.card-header */}
              <div className="card-body">
                <div className="tab-content">
                  <div className="tab-pane" id="timeline">
                    {/* ------------------------------------------------------------------------------- */}
                    <div className="card">
                      <div className="card-header">
                        <h1 className="card-title">Lista de titulos ingresados</h1>
                      </div>
                      {/* /.card-header */}
                      <div className="card-body">
                        <table className="table table-bordered">
                          <thead>
                            <tr>
                              <th style={{ width: 10 }}>#</th>
                              <th>Titulo</th>
                              <th>Progress</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>1.</td>
                              <td>Fix and squish bugs</td>
                              <td>
                                <div className="progress progress-xs progress-striped active">
                                  <div className="progress-bar bg-success" style={{ width: '90%' }} />
                                </div>
                              </td>
                            </tr>
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
                    {/* /.card */}


                  </div>
                  {/* EDITAR DATOS */}
                  <div className="tab-pane" id="settings">
                    <form className="form-horizontal">
                      <div className="form-group row">
                        <label htmlFor="inputName" className="col-sm-2 col-form-label">Nombres</label>
                        <div className="col-sm-10">
                          <input type="text" className="form-control" id="inputName" placeholder="Nombres" />
                        </div>
                      </div>
                      <div className="form-group row">
                        <label htmlFor="inputEmail" className="col-sm-2 col-form-label">Email</label>
                        <div className="col-sm-10">
                          <input type="email" className="form-control" id="inputEmail" placeholder="Email" />
                        </div>
                      </div>
                      <div className="form-group row">
                        <label htmlFor="inputName2" className="col-sm-2 col-form-label">Rol</label>
                        <div className="col-sm-10">
                          <input type="text" className="form-control" id="inputTipo_user" placeholder="Sera verificado" />
                        </div>
                      </div>
                      <div className="form-group row">
                        <label htmlFor="inputSkills" className="col-sm-2 col-form-label">Titulo</label>
                        <div className="col-sm-10">
                          <input type="text" className="form-control" id="inputTituloNombre" placeholder="Skills" />
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
                              <input type="checkbox" /> Acepto <a href="#">modificar mis datos</a>
                            </label>
                          </div>
                        </div>
                      </div>
                      <div className="form-group row">
                        <div className="offset-sm-2 col-sm-10">
                          <button type="submit" className="btn btn-danger">Enviar</button>
                        </div>
                      </div>
                    </form>
                  </div>

                  {/* AGREGAR CERTIFICACION */}
                  <div className="tab-pane" id="agregar">
                    <form className="form-horizontal">
                      <div className="form-group row">
                        <label htmlFor="inputName" className="col-sm-2 col-form-label">Nombres</label>
                        <div className="col-sm-10">
                          <input type="text" className="form-control" id="inputName" placeholder="Nombre de certificacion" />
                        </div>
                      </div>
                      <div className="form-group row">
                        <label htmlFor="inputFecha" className="col-sm-2 col-form-label">Fecha</label>
                        <div className="col-sm-10">
                          <input type="text" className="form-control" id="inputName" placeholder="Fecha certificacion" />
                        </div>
                      </div>


                      <div className="form-group row">
                        <div className="offset-sm-2 col-sm-10">
                          <div className="checkbox">
                            <label>
                              <input type="checkbox" /> Acepto agregar <a href="#">certificacion</a>
                            </label>
                          </div>
                        </div>
                      </div>
                      <div className="form-group row">
                        <div className="offset-sm-2 col-sm-10">
                          <button type="submit" className="btn btn-danger">Enviar</button>
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
          {/* /.col */}
        </div>
        {/* /.row */}

      </section>
      {/* /.content */}

    </>
  );
}
