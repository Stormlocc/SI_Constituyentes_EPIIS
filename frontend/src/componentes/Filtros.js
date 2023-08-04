// Aqui agregar el descargar con j2son
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function Filtros() {
	const [user, setUser] = useState(null);
	const navigate = useNavigate();

	useEffect(() => {
		async function fetchUserData() {
			try {
				const response = await axios.get('http://localhost:4000/api/users');
				//console.log(response.data)
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
	}, [navigate ]);
	
	return (
		<>
			{/* Main content */}
			<section className="content-wrapper">
				<div className="container-fluid">
					<div className="row">
						<div className="col-12">
							{/* /.card */}
							<div className="card">
								<div className="card-header">
									<h3 className="card-title">DataTable with default features</h3>
								</div>
								{/* /.card-header */}
								<div className="card-body">
									<table id="example1" className="table table-bordered table-striped">
										<thead>
											<tr>
												<th><i className="far fa-address-card" /> Nombres</th>
												<th><i className="far fa-address-card" /> Apellidos</th>
												<th><i className="fas fa-user-tie" /> Rol</th>
												<th><i className="fas fa-male" /> Email</th>
											</tr>
										</thead>
										<tbody>
											{user?.map((userData) => (
											<tr>
												<td>{userData.nombres}</td>
												<td>{userData.apellidos}</td>
												<td>{userData.tipo_user}</td>
												<td>{userData.email}</td>
											</tr>
											))}
											<tr>
												<td>Otros usuarios</td>
												<td>Todos los correos</td>
												<td>Mas roles</td>
												<td>asf</td>
											</tr>
										</tbody>

									</table>
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
