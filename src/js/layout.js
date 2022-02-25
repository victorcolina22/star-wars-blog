import React, { useContext } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./views/home";
import injectContext, { Context } from "./store/appContext";

import { Navbar } from "./component/navbar";
import { IndividualCharacter } from "./views/IndividualCharacter";
import { IndividualPlanet } from "./views/IndividualPlanet";
import { People } from "./views/People";
import { Planets } from "./views/Planets";

//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	const { store, actions } = useContext(Context);

	return (
		<>
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<Navbar />
					<Routes>
						<Route exact path="/" element={<Home />} />
						<Route exact path="/people" element={<People store={store} actions={actions} />} />
						<Route exact path="/planets" element={<Planets store={store} actions={actions} />} />
						<Route exact path="/people/:id" element={<IndividualCharacter />} />
						<Route exact path="/planet/:id" element={<IndividualPlanet />} />
					</Routes>
				</ScrollToTop>
			</BrowserRouter>
		</>
	);
};

export default injectContext(Layout);
