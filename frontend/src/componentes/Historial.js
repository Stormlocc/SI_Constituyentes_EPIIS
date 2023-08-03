// Aqui agregar el descargar con j2son
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function Profile() {
	const [user, setUser] = useState(null);
	const [isLoading, setIsLoading] = useState(true);

	const navigate = useNavigate();

	useEffect(() => {
		async function fetchUserData() {
			try {
				const response = await axios.get('http://localhost:4000/api/users');
				setUser(response.data); // Guarda el usuario en el estado local
				setIsLoading(false);
			} catch (error) {
				setIsLoading(false);
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
		console.log(user)

		fetchUserData();
	}, [navigate]);


	return (
		<>
			{/* Main content */}
			<section className="content-wrapper">
				<div className="container-fluid">
					<div className="row">
						<div className="col-12">
							<div className="card">
							</div>
							{/* /.card */}
							<div className="card">
								<div className="card-header">
									<h3 className="card-title">DataTable with default features</h3>
								</div>
								{/* /.card-header */}
								<div className="card-body">
									{isLoading ? (
										<p>Cargando usuarios...</p>
									) : (
										<table id="example1" className="table table-bordered table-striped">
											<thead>
												<tr>
													<th>Nombres</th>
													<th>Apellidos</th>
													<th>Rol</th>
													<th>Email</th>
												</tr>
											</thead>
											<tbody>
												<tr>
													<td>Other browsers</td>
													<td>All others</td>
													<td>-</td>
													<td>U</td>
												</tr>
												<tr>
													<td>Other browsers</td>
													<td>All others</td>
													<td>-</td>
													<td>U</td>
												</tr>
											</tbody>

										</table>
									)}
								</div>
								{/* /.card-body */}
							</div>
							{/* /.card */}
						</div>
						{/* /.col */}
					</div>
					{/* /.row */}
				</div>
				{/* /.container-fluid */}
			</section>
			{/* /.content */}

		</>
	);
}
