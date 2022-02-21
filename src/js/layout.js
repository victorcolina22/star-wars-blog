import React, { useContext } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./views/home";
// import { Demo } from "./views/demo";
// import { Single } from "./views/single";
import injectContext, { Context } from "./store/appContext";

import { Navbar } from "./component/navbar";
// import { Footer } from "./component/footer";
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
						<Route exact path="/character/:id" element={<IndividualCharacter />} />
						<Route exact path="/planets/:id" element={<IndividualPlanet />} />
						{/* <Route>
							<h1>Not found!</h1>
						</Route> */}
					</Routes>
				</ScrollToTop>
			</BrowserRouter>
		</>
	);
};

export default injectContext(Layout);
