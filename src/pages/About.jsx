import Biography from "../components/Biography/Biography";
import Quote from "../components/Quote/Quote";
import TerenceAllbrightPortrait from "/src/assets/images/terence-allbright-02.jpg";
import "./About.scss";

const About = function () {
	return (
		<>
			<section className="about fb-col-wrapper">
				<h1>About</h1>
				<div className="about__content-wrapper">
					<div className="about__media">
						<img
							src={TerenceAllbrightPortrait}
							alt="Terence looking relaxed and professional on campus"
							width={640}
							height={640}
							className="about__portrait"
						/>
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
