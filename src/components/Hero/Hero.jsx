// import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Hero.scss";
import Video from "../Video/Video";

import thurtonPromo from "/src/assets/videos/thurton-preschool-promo.mp4";

// const API_URL = `${import.meta.env.VITE_CMS_URL}/api/title`;
// const API_TOKEN = import.meta.env.VITE_CMS_API_TOKEN;

const Hero = function () {
	// const [homepage, setHomepage] = useState({});

	// useEffect(() => {
	// 	const fetchData = async () => {
	// 		try {
	// 			const response = await fetch(API_URL, {
	// 				method: "GET",
	// 				headers: {
	// 					Authorization: `Bearer ${API_TOKEN}`,
	// 					"Content-Type": "application/json",
	// 				},
	// 			});
	// 			const data = await response.json();
	// 			setHomepage(data.data);
	// 		} catch (error) {
	// 			console.error("Error fetching data:", error);
	// 		}
	// 	};

	// 	fetchData();
	// }, []);

	return (
		<section className="hero">
			<Video src={thurtonPromo} />
			<div className="hero__content fb-col-wrapper">
				{/* <h1 className="hero__heading">{homepage.Title}</h1>
				<span className="hero__subheading">{homepage.Description}</span>
				<button className="hero__cta">{homepage.CallToAction}</button> */}
				<h1 className="hero__heading">Thurton & Ashby St Mary Preschool</h1>
				<div className="hero__body">
					<p className="hero__subheading">
						A unique, child-led outdoor setting based out of Thurton Village Hall and the
						surrounding woodland, for children aged 2-5.
					</p>
					<p className="hero__subheading">
						We offer fully funded hours with no additional charges, as well as fee paying places.
					</p>
				</div>
				<div className="hero__actions">
					<Link to="/contact" className="hero__cta">
						Contact us
					</Link>
					<Link to="/" className="hero__cta">
						Term dates
					</Link>
				</div>
			</div>
		</section>
	);
};

export default Hero;
