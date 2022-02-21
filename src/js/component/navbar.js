import { useContext } from 'react';
import { Link } from 'react-router-dom';

import { Context } from '../store/appContext';

import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import logo from '../../assets/star-wars-logo.png';


export const Navbar = () => {

	const { store, actions } = useContext(Context);
	// const { favorites } = store;
	const { deleteFavorite } = actions;
	const favorites = JSON.parse(localStorage.getItem('favs')) || [];

	return (
		// <nav className="navbar navbar-dark bg-dark mb-3">
		// 	<div className="navbar__container">
		// 		<Link to="/">
		// 			<img
		// 				className="navbar__image"
		// 				src={logo} alt="star-wars-logo" />
		// 		</Link>
		// 		<ul className='navbar__items m-0'>
		// 			<div className="dropdown">
		// 				<button
		// 					className="btn btn-outline-warning dropdown-toggle"
		// 					type="button"
		// 					id="dropdownMenuButton1"
		// 					data-bs-toggle="dropdown"
		// 					aria-expanded="false">
		// 					Favorites
		// 					<span className='favCounter'>{favorites.length}</span>
		// 				</button>
		// 				<ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
		// 					{
		// 						favorites.map((fav) => {
		// 							return favorites.length > 0
		// 								?
		// 								(
		// 									<li
		// 										key={fav.name}
		// 										style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}
		// 									>
		// 										<Link
		// 											to={`/${fav.type}/${fav.id}`}
		// 											style={{ textDecoration: "none" }}
		// 										>
		// 											<span className='dropdown-item'>
		// 												{fav.name}
		// 											</span>
		// 										</Link>
		// 										<FontAwesomeIcon
		// 											className='mx-2'
		// 											style={{ cursor: "pointer" }}
		// 											icon={faTrash}
		// 											onClick={() => deleteFavorite(fav.name)} />
		// 									</li>
		// 								)
		// 								:
		// 								(
		// 									<li>
		// 										<span className="dropdown-item text-center">Empty</span>
		// 									</li>
		// 								)
		// 						})
		// 					}
		// 				</ul>
		// 			</div>
		// 			<Link className='links' to="/people">People</Link>
		// 			<Link className='links' to="/planets">Planets</Link>
		// 		</ul>
		// 	</div>
		// </nav>

		<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
			<div className="container-fluid">
				<Link to="/">
					<img
						className="navbar__image"
						src={logo} alt="star-wars-logo" />
				</Link>
				<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse" id="navbarSupportedContent">
					<ul className='navbar-nav me-auto'></ul>
					<ul className='navbar-nav me-auto'></ul>
					<ul className='navbar__items m-0'>
						<div className="dropdown">
							<button
								className="btn btn-outline-warning dropdown-toggle"
								type="button"
								id="dropdownMenuButton1"
								data-bs-toggle="dropdown"
								aria-expanded="false">
								Favorites
								<span className='favCounter'>{favorites.length}</span>
							</button>
							<ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
								{
									favorites.map((fav) => {
										return favorites.length > 0
											&&
											(
												<li
													key={fav.name}
													style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}
												>
													<Link
														to={`/${fav.type}/${fav.id}`}
														style={{ textDecoration: "none" }}
													>
														<span className='dropdown-item'>
															{fav.name}
														</span>
													</Link>
													<FontAwesomeIcon
														className='mx-2'
														style={{ cursor: "pointer" }}
														icon={faTrash}
														onClick={() => deleteFavorite(fav.name)} />
												</li>
											)
									})
								}
							</ul>
						</div>
						<Link className='links' to="/people">People</Link>
						<Link className='links' to="/planets">Planets</Link>
					</ul>
				</div>
			</div>
		</nav>
	);
};
