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
	}, [navigate]);

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
									<h3 className="card-title">Filtra constituyentes</h3>
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
												<th><i className="fas fa-calendar" /> Fecha egrasado</th>
												<th><i className="fa fa-tasks" /> Cargo</th>
												<th><i className="fas fa-map-marker-alt" /> Lugar</th>
											</tr>
										</thead>
										<tbody>
											{/* Usuario 1 */}
											<tr>
												<td>Juan</td>
												<td>Gómez Ramírez</td>
												<td>comite consultivo</td>
												<td>1@test.com</td>
												<td>10-05-2021</td>
												<td>director</td>
												<td>unsaac cusco</td>
											</tr>

											{/* Usuario 2 */}
											<tr>
												<td>María</td>
												<td>Sánchez López</td>
												<td>constituyente</td>
												<td>2@test.com</td>
												<td>05-12-2022</td>
												<td>estudiante</td>
												<td>unsaac filiales</td>
											</tr>

											{/* Usuario 3 */}
											<tr>
												<td>Luis</td>
												<td>Martínez González</td>
												<td>egresado</td>
												<td>3@test.com</td>
												<td>15-03-2023</td>
												<td>docente</td>
												<td>remoto</td>
											</tr>

											{/* Usuario 4 */}
											<tr>
												<td>Ana</td>
												<td>Pérez Torres</td>
												<td>graduado</td>
												<td>4@test.com</td>
												<td>28-09-2021</td>
												<td>auxiliar</td>
												<td>unsaac cusco</td>
											</tr>

											{/* Usuario 5 */}
											<tr>
												<td>Andrés</td>
												<td>Díaz Ríos</td>
												<td>comite consultivo</td>
												<td>5@test.com</td>
												<td>07-11-2022</td>
												<td>director</td>
												<td>unsaac filiales</td>
											</tr>

											{/* Usuario 6 */}
											<tr>
												<td>Harley</td>
												<td>Vera Olivera</td>
												<td>constituyente</td>
												<td>harley.vera@test.com</td>
												<td>12-05-2022</td>
												<td>docente</td>
												<td>unsaac cusco</td>
											</tr>

											{/* Usuario 7 */}
											<tr>
												<td>Lisha</td>
												<td>Sabah Díaz Cáceres</td>
												<td>graduado</td>
												<td>lisha.sabah@test.com</td>
												<td>05-11-2020</td>
												<td>estudiante</td>
												<td>unsaac filiales</td>
											</tr>


											{/* Usuario 9 */}
											<tr>
												<td>Luis Álvaro</td>
												<td>Monzón Condori</td>
												<td>graduado</td>
												<td>luis.monzon@test.com</td>
												<td>28-09-2019</td>
												<td>auxiliar</td>
												<td>unsaac cusco</td>
											</tr>

											{/* Usuario 10 */}
											<tr>
												<td>Efraina Gladys</td>
												<td>Cutipa Arapa</td>
												<td>egresado</td>
												<td>efraina.cutipa@test.com</td>
												<td>10-06-2020</td>
												<td>docente</td>
												<td>unsaac cusco</td>
											</tr>
											<tr>
												<td>MARÍA DEL PILAR</td>
												<td>VENEGAS VERGARA</td>
												<td>auxiliar</td>
												<td>maria.venegas@test.com</td>
												<td>10-06-2013</td>
												<td>docente</td>
												<td>unsaac cusco</td>
											</tr>

											{/* Usuario 11 */}
											<tr>
												<td>Julio Vladimir</td>
												<td>Quispe Sota</td>
												<td>graduado</td>
												<td>julio.quispe@test.com</td>
												<td>28-11-2018</td>
												<td>estudiante</td>
												<td>unsaac filiales</td>
											</tr>

											{/* Usuario 12 */}
											<tr>
												<td>Enrique</td>
												<td>Gamarra Saldivar</td>
												<td>egresado</td>
												<td>enrique.gamarra@test.com</td>
												<td>20-07-2021</td>
												<td>docente</td>
												<td>unsaac cusco</td>
											</tr>

											{/* Usuario 13 */}
											<tr>
												<td>Lino Aquiles</td>
												<td>Baca Cardenas</td>
												<td>graduado</td>
												<td>lino.baca@test.com</td>
												<td>18-09-2019</td>
												<td>estudiante</td>
												<td>unsaac filiales</td>
											</tr>

											{/* Usuario 14 */}
											<tr>
												<td>Nila Zonia</td>
												<td>Acurio Usca</td>
												<td>constituyente</td>
												<td>nila.acurio@test.com</td>
												<td>15-03-2022</td>
												<td>director</td>
												<td>unsaac cusco</td>
											</tr>

											{/* Usuario 15 */}
											<tr>
												<td>Waldo Elio</td>
												<td>Ibarra Zambrano</td>
												<td>graduado</td>
												<td>waldo.ibarra@test.com</td>
												<td>28-11-2018</td>
												<td>estudiante</td>
												<td>unsaac filiales</td>
											</tr>

											{/* Usuario 16 */}
											<tr>
												<td>Karelia</td>
												<td>Medina Miranda</td>
												<td>constituyente</td>
												<td>karelia.medina@test.com</td>
												<td>15-05-2023</td>
												<td>auxiliar</td>
												<td>remoto</td>
											</tr>

											{/* Usuario 17 */}
											<tr>
												<td>Vanessa Maribel</td>
												<td>Choque Soto</td>
												<td>egresado</td>
												<td>vanessa.choque@test.com</td>
												<td>20-07-2021</td>
												<td>docente</td>
												<td>unsaac cusco</td>
											</tr>

											{/* Usuario 18 */}
											<tr>
												<td>Doris Sabina</td>
												<td>Aguirre Carbajal</td>
												<td>graduado</td>
												<td>doris.aguirre@test.com</td>
												<td>18-09-2019</td>
												<td>estudiante</td>
												<td>unsaac filiales</td>
											</tr>

											{/* Usuario 19 */}
											<tr>
												<td>Boris</td>
												<td>Chullo Llave</td>
												<td>constituyente</td>
												<td>boris.chullo@test.com</td>
												<td>15-03-2022</td>
												<td>director</td>
												<td>unsaac cusco</td>
											</tr>

											{/* Usuario 20 */}
											<tr>
												<td>Carlos Fernando</td>
												<td>Montoya Cubas</td>
												<td>egresado</td>
												<td>carlos.montoya@test.com</td>
												<td>20-07-2021</td>
												<td>docente</td>
												<td>unsaac cusco</td>
											</tr>


											{/* Usuario 22 */}
											<tr>
												<td>Lauro</td>
												<td>Enciso Rodas</td>
												<td>constituyente</td>
												<td>lauro.enciso@test.com</td>
												<td>15-03-2022</td>
												<td>decano</td>
												<td>unsaac cusco</td>
											</tr>


											<tr>
												<td>Rony</td>
												<td>Villafuerte Serna</td>
												<td>egresado</td>
												<td>rony.villafuerte@test.com</td>
												<td>15-03-2021</td>
												<td>director</td>
												<td>remoto</td>
											</tr>



											<tr>
												<td>Julio Vladimir</td>
												<td>Quispe Sota</td>
												<td>graduado</td>
												<td>julio.quispe@test.com</td>
												<td>28-11-2018</td>
												<td>estudiante</td>
												<td>unsaac filiales</td>
											</tr>





											{/* ... Repite el patrón para los usuarios restantes ... */}
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
