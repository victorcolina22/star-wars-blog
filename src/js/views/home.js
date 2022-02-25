import React from "react";

import video from '../../assets/video/space-video.mp4';
import { Link } from "react-router-dom";


export const Home = () => {

	return (
		<>
			<video autoPlay muted loop id="video">
				<source src={video} type="video/mp4" />
			</video>

			<div className="home-container animate__animated animate__fadeInUp animate__slower">
				<h1 className="home-container__title">star wars blog</h1>
				<Link
					className="home-container__button animate__animated animate__fadeInUp animate__slow animate__delay-3s"
					to="/people">
					get in
				</Link>
			</div>
		</>
	)
}
