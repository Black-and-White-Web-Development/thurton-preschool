import PropTypes from "prop-types";
import "./Hero.scss";

const Hero = function ({ heading, coverImg }) {
	return (
		<section className="hero">
			<img src={coverImg} alt="" className="hero__cover-img" />
			<div className="hero__content fb-col-wrapper">
				<h1 className="hero__heading">{heading}</h1>
			</div>
		</section>
	);
};

Hero.propTypes = {
	heading: PropTypes.string.isRequired,
	coverImg: PropTypes.string,
};

export default Hero;
