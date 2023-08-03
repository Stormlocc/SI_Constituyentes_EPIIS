import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const json2csv = require('json2csv');

export default function Reporte() {

	/******* VERIFICAR SI EL USUARIO INICIO SESION PARA MOSTRAR EL COMPONENTE  *******/
	const [user, setUser] = useState(null);
	const [usersList, setUsersList] = useState([]);
	const [downloadCSV, setDownloadCSV] = useState(false);

	const navigate = useNavigate();
	useEffect(() => {

		async function fetchUserData() {
			try {
				const response = await axios.get('http://localhost:4000/api/users/me', {
					headers: {
						'x-access-token': localStorage.getItem('token'),
					},
				});
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

		async function fetchUsersList() {
			try {
				const response = await axios.get('http://localhost:4000/api/users');
				setUsersList(response.data); // Guarda la lista de usuarios en el estado local
			} catch (error) {
				console.error('Error al obtener la lista de usuarios:', error);
				// Manejar errores aquí
			}
		}

		if (downloadCSV) {
			const fields = ['nombres', 'apellidos', 'tipo_user', 'email'];
            const csvData = json2csv.parse(usersList, { fields });
			
            const blob = new Blob([csvData], { type: 'text/csv;charset=utf-8;' });
            const link = document.createElement('a');
            const url = URL.createObjectURL(blob);
            link.href = url;
            link.setAttribute('download', 'constituyentes.csv');
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
			
            setDownloadCSV(false);
        }

		fetchUserData();
		fetchUsersList();
	}, [navigate, downloadCSV, usersList]);

	const handleDownloadCSV = () => {
        setDownloadCSV(true);
    };

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
									<a href="#" className="btn btn-tool btn-sm" onClick={handleDownloadCSV}>
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
											<th>NOMBRES</th>
											<th>APELLIDOS</th>
											<th>ROL</th>
											<th>EMAIL</th>
										</tr>
									</thead>
									<tbody>
										{usersList.map((user) => (
											<tr key={user._id}>
												<td>
													<img
														src="dist/img/default-150x150.png"
														alt="Product 1"
														className="img-circle img-size-32 mr-2"
													/>
													{user.nombres}
												</td>
												<td>{user.apellidos}</td>
												<td>{user.tipo_user}</td>
												<td>
													<a href="#" className="text-muted">
														<i className="fas fa-search" />
														{user.email}
													</a>
												</td>
											</tr>
										))}
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
