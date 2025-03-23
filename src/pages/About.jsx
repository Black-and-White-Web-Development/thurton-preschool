import Hero from "../components/Hero/Hero";
import "./About.scss";

import coverImg from "/src/assets/images/about-us.jpg";

const About = function () {
	return (
		<>
			<Hero heading="About Us" coverImg={coverImg} />
			<section className="about fb-col-wrapper"></section>
		</>
	);
};

export default About;
