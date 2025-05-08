import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./HeroHome.scss";
import Video from "../Video/Video";

const API_URL = `${
	import.meta.env.VITE_CMS_URL
}/api/home?populate[pages]=true&populate[heroMedia]=true`;
const API_TOKEN = import.meta.env.VITE_CMS_API_TOKEN;

const HeroHome = function () {
	const [content, setContent] = useState({
		subheadline: "",
		headline: "",
		pages: [],
		heading: "",
		heroMedia: { url: "" },
	});

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
				setContent(data.data);
			} catch (error) {
				console.error("Error fetching data:", error);
			}
		};

		fetchData();
	}, []);

	return (
		<section className="hero--home">
			{content.heroMedia.url && <Video src={content.heroMedia.url} />}
			<div className="hero--home__content fb-col-wrapper">
				<h1 className="hero--home__heading">{content.headline}</h1>
				<div className="hero--home__body">
					{content.subheadline
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
					{content.pages.map(link => (
						<Link key={link.id} to={link.url} className="hero--home__cta">
							{link.title}
						</Link>
					))}
				</div>
			</div>
		</section>
	);
};

export default HeroHome;
