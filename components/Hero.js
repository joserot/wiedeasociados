import React from "react";

const Hero = (props) => {
	const title = props.title;
	return (
		<div className="p-5 text-center bg-light">
			<h1 className="mb-3" dangerouslySetInnerHTML={{ __html: title }}></h1>
		</div>
	);
};

export default Hero;
