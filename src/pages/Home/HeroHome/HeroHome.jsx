import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./HeroHome.scss";
import Video from "../Video/Video";

import thurtonPromo from "/src/assets/videos/thurton-preschool-promo.mp4";

const API_URL = `${import.meta.env.VITE_CMS_URL}/api/home`;
const API_TOKEN = import.meta.env.VITE_CMS_API_TOKEN;

const HeroHome = function () {
	const [homepage, setHomepage] = useState({});

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await fetch(API_URL, {
					method: "GET",
					headers: {
						Authorization: `Bearer ${API_TOKEN}`,
						"Content-Type": "application/json",
					},
				});
				const data = await response.json();
				setHomepage(data.data);
			} catch (error) {
				console.error("Error fetching data:", error);
			}
		};

		fetchData();
	}, []);

	return (
		<section className="hero--home">
			<Video src={thurtonPromo} />
			<div className="hero--home__content fb-col-wrapper">
				<h1 className="hero--home__heading">{homepage.headline}</h1>
				<div className="hero--home__body">
					{homepage.subheadline
						?.split("\n")
						.filter(body => body.trim() !== "")
						.map((body, i) => (
							<p className="hero--home__subheading" key={i}>
								{body}
								<br />
							</p>
						))}
				</div>
				<div className="hero--home__actions">
					<Link to="/contact" className="hero--home__cta">
						Contact us
					</Link>
					<Link to="/resources/#term-dates" className="hero--home__cta">
						Term dates
					</Link>
				</div>
			</div>
		</section>
	);
};

export default HeroHome;
