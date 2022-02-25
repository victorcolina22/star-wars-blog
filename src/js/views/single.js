import React from "react";
import PropTypes from "prop-types";

export const Single = props => {

	return (
		<div>
			<h1>Single character</h1>
		</div>
	);
};

Single.propTypes = {
	match: PropTypes.object
};
