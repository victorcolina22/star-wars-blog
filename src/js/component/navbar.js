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
		<nav className="navbar navbar-dark bg-dark mb-3">
			<div className="navbar__container">
				<Link to="/">
					<img
						className="navbar__image"
						src={logo} alt="star-wars-logo" />
				</Link>
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
									?
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
									:
									(
										<li>
											<span className="dropdown-item text-center">Empty</span>
										</li>
									)
							})
						}
					</ul>
				</div>
			</div>
		</nav>
	);
};
