import "./Hero.scss";

const Hero = function () {
	return (
		<section className="hero fb-col-wrapper">
			<div className="hero__content fb-col-wrapper__content">
				<h1 className="hero__heading">
					Terence Allbright
					<br />
					<span className="emphasis">Composer</span>
				</h1>
				<span className="hero__subheading">
					British composer and pianist known for BBC Radio Drama scores, choral works, and chamber
					music.
				</span>
				<button className="hero__cta">Get in touch</button>
			</div>
			<div className="hero__image-container fb-col-wrapper__image"></div>
		</section>
	);
};

export default Hero;
