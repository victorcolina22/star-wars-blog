import React, { useContext } from "react";

import { Context } from "../store/appContext";

import { People } from "./People";
import { Planets } from "./Planets";


export const Home = () => {

	const { store, actions } = useContext(Context);

	return (
		<div className="home-container animate__animated animate__fadeIn">
			{
				!!store.people
					?
					(
						<>
							<People store={store} actions={actions} />

							<Planets store={store} actions={actions} />
						</>
					)
					:
					(
						<div className="spinner">
							<div className="spinner-grow text-warning" role="status">
								<span className="visually-hidden">Loading...</span>
							</div>
						</div>
					)
			}
		</div>
	)
}
