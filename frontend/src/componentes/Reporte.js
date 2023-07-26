import React from 'react'

export default function Reporte() {
	return (
		<>
			{/* Content Wrapper. Contains page content */}
			<div className="content-wrapper">
				{/* Content Header (Page header) */}
				<div className="content-header">
					<div className="container-fluid">
								<h1 className="m-0">Informacion de constituyentes EPIIS</h1>
					</div>{/* /.container-fluid */}
				</div>
				{/* /.content-header */}

				{/* Main content */}
				<div className="content">
					<div className="container-fluid">

						{/* /.card */}
						<div className="card">
							<div className="card-header border-0">
								<h3 className="card-title">Lista de constituyentes</h3>
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
										{/* Agregar <tr> para cada fila */}
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

									</tbody>
								</table>
							</div>
						</div>
						{/* /.card */}
					</div>
				</div>
				{/* /.content */}
			</div>
			{/* /.content-wrapper */}

		</>
	)
}
