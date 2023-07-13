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
            <div className="row">
                <div className="col-lg-6">
                
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
                        <thead>
                        <tr>
                            <th>Identificador</th>
                            <th>DNI</th>
                            <th>Nombre</th>
                            <th>Apellidos</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>
                            <img src="dist/img/default-150x150.png" alt="Product 1" className="img-circle img-size-32 mr-2" />
                            Docente 1
                            </td>
                            <td>67886501</td>
                            <td>
                            <small className="text-success mr-1">
                                <i className="fas fa-arrow-up" />
                                12%
                            </small>
                            Director de escuela
                            </td>
                            <td>
                            <a href="#" className="text-muted">
                                <i className="fas fa-search" />
                            </a>
                            </td>
                        </tr>
                        <tr>
                            <td>
                            <img src="dist/img/default-150x150.png" alt="Product 1" className="img-circle img-size-32 mr-2" />
                            Another Product
                            </td>
                            <td>$29 USD</td>
                            <td>
                            <small className="text-warning mr-1">
                                <i className="fas fa-arrow-down" />
                                0.5%
                            </small>
                            123,234 Sold
                            </td>
                            <td>
                            <a href="#" className="text-muted">
                                <i className="fas fa-search" />
                            </a>
                            </td>
                        </tr>
                        <tr>
                            <td>
                            <img src="dist/img/default-150x150.png" alt="Product 1" className="img-circle img-size-32 mr-2" />
                            Amazing Product
                            </td>
                            <td>$1,230 USD</td>
                            <td>
                            <small className="text-danger mr-1">
                                <i className="fas fa-arrow-down" />
                                3%
                            </small>
                            198 Sold
                            </td>
                            <td>
                            <a href="#" className="text-muted">
                                <i className="fas fa-search" />
                            </a>
                            </td>
                        </tr>
                        <tr>
                            <td>
                            <img src="dist/img/default-150x150.png" alt="Product 1" className="img-circle img-size-32 mr-2" />
                            Perfect Item
                            <span className="badge bg-danger">NEW</span>
                            </td>
                            <td>$199 USD</td>
                            <td>
                            <small className="text-success mr-1">
                                <i className="fas fa-arrow-up" />
                                63%
                            </small>
                            87 Sold
                            </td>
                            <td>
                            <a href="#" className="text-muted">
                                <i className="fas fa-search" />
                            </a>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                    </div>
                </div>
                {/* /.card */}
                </div>
                {/* /.col-md-6 */}
                <div className="col-lg-6">
                <div className="card">
                    <div className="card-header border-0">
                    <div className="d-flex justify-content-between">
                        <h3 className="card-title">Sales</h3>
                        <a href="javascript:void(0);">View Report</a>
                    </div>
                    </div>
                    <div className="card-body">
                    <div className="d-flex">
                        <p className="d-flex flex-column">
                        <span className="text-bold text-lg">$18,230.00</span>
                        <span>Sales Over Time</span>
                        </p>
                        <p className="ml-auto d-flex flex-column text-right">
                        <span className="text-success">
                            <i className="fas fa-arrow-up" /> 33.1%
                        </span>
                        <span className="text-muted">Since last month</span>
                        </p>
                    </div>
                    {/* /.d-flex */}
                    <div className="position-relative mb-4">
                        <canvas id="sales-chart" height={200} />
                    </div>
                    <div className="d-flex flex-row justify-content-end">
                        <span className="mr-2">
                        <i className="fas fa-square text-primary" /> This year
                        </span>
                        <span>
                        <i className="fas fa-square text-gray" /> Last year
                        </span>
                    </div>
                    </div>
                </div>
                
                </div>
                {/* /.col-md-6 */}
            </div>
            {/* /.row */}
            </div>
            {/* /.container-fluid */}
        </div>
        
        {/* /.content */}
        </div>
        {/* /.content-wrapper */}

    </>
  )
}
