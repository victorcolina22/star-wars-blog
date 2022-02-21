import React, { useContext } from "react";

import { Context } from "../store/appContext";

import { People } from "./People";
import { Planets } from "./Planets";

import video from '../../assets/video/space-video.mp4';


export const Home = () => {

	// const { store, actions } = useContext(Context);

	return (
		<>
			<video autoPlay muted loop id="video">
				<source src={video} type="video/mp4" />
			</video>
			<div className="home-container animate__animated animate__fadeInUp animate__slower">
				{/* {
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
			} */}
				<h1 className="home-container__title">star wars blog</h1>
			</div>
		</>
	)
}
