import React from 'react'

export default function Content() {
  return (
    <>
        {/* Content Wrapper. Contains page content */}
        <div className="content-wrapper">
        {/* Content Header (Page header) */}
        <div className="content-header">
            <div className="container-fluid">
            <div className="row mb-2">
                <div className="col-sm-6">
                <h1 className="m-0">Informacion de constituyentes EPIIS</h1>
                </div>{/* /.col */}
                <div className="col-sm-6">
                <ol className="breadcrumb float-sm-right">
                    <li className="breadcrumb-item"><a href="#">Home</a></li>
                    <li className="breadcrumb-item active">Reportes</li>
                </ol>
                </div>{/* /.col */}
            </div>{/* /.row */}
            </div>{/* /.container-fluid */}
        </div>
        {/* /.content-header */}

        {/* Main content */}
        <div className="content">
            <div className="container-fluid">
                
                {/* /.card */}
                <div className="card">
                    <div className="card-header border-0">
                    <h3 className="card-title">Lista de constituyentes AQUI EL PROBLEMA ES QUE ES UNA TABLA Y HAY 2 columnas p</h3>
                    <div className="card-tools">
                        <a href="#" className="btn btn-tool btn-sm">
                        <i className="fas fa-download" />
                        </a>
                        <a href="#" className="btn btn-tool btn-sm">
                        <i className="fas fa-bars" />
                        </a>
                    </div>
                    </div>
                    <div className="card-body table-responsive p-0">
                    <table className="table table-striped table-valign-middle">
                        //Encabezado
                        <thead>
                        <tr>
                            <th>Nombre(s)</th>
                            <th>Apellidos</th>
                            <th>Tipo de usuario</th>
                            <th>Editar</th>
                        </tr>
                        </thead>
                        <tbody>
                        //Aqui un map para mostrar todos
                        <tr>
                            <td>
                            <img src="dist/img/default-150x150.png" alt="Product 1" className="img-circle img-size-32 mr-2" />
                            Arturo Javier
                            </td>
                            <td>Rozas Huancho</td>
                            <td>
                            <small className="text-success mr-1">
                                <i className="	fab fa-creative-commons-by" />
                            </small>
                            Director de escuela
                            </td>
                            <td>
                            <a href="#" className="text-muted">
                                <i className="far fa-edit" />
                            </a>
                            </td>
                        </tr>
                        
                        </tbody>
                    </table>
                    </div>

                {/* /.card */}
                </div>
            </div>
            {/* /.container-fluid */}
        </div>
        
        {/* /.content */}
        </div>
        {/* /.content-wrapper */}

    </>
  )
}
