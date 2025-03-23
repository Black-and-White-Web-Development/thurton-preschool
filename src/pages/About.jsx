import Biography from "../components/Biography/Biography";
import Hero from "../components/Hero/Hero";
import Quote from "../components/Quote/Quote";
import "./About.scss";

import coverImg from "/src/assets/images/about-us.jpg";

const About = function () {
	return (
		<>
			<Hero heading="About Us" coverImg={coverImg} />
			<section className="about fb-col-wrapper">
				<div className="about__content-wrapper">
					<div className="about__media">
						<Quote
							quote="...it was the beautiful way accompanist Terence Allbright played the tiny, pregnant postlude to each song which made the experience truly profound."
							author="Ivan Hewitt"
						/>
					</div>
					<div className="about__content">
						<h2 className="about__subheading">Biography</h2>
						<Biography />
					</div>
				</div>
			</section>
		</>
	);
};

export default About;
