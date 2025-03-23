import Hero from "../components/Hero/Hero";
import "./Resources.scss";

import coverImg from "/src/assets/images/resources.jpg";

const Resources = function () {
	return (
		<>
			<Hero heading="Resources" coverImg={coverImg} />
			<section className="resources fb-col-wrapper"></section>
		</>
	);
};

export default Resources;
