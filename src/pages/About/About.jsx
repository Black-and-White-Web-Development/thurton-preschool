import { useEffect, useState } from "react";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";
import { Link } from "react-router-dom";
import Hero from "../../partials/Hero/Hero";
import TeamMembers from "./TeamMembers/TeamMembers";
import Committee from "./Committee/Committee";
import "./About.scss";

import coverImg from "/src/assets/images/about-us.jpg";

const API_URL = `${import.meta.env.VITE_CMS_URL}/api/about`;
const API_TOKEN = import.meta.env.VITE_CMS_API_TOKEN;

const About = function () {
	const [about, setAbout] = useState({
		heading: "",
		body: [],
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
				setAbout(data.data);
			} catch (error) {
				console.error("Error fetching data:", error);
			}
		};

		fetchData();
	}, []);

	return (
		<>
			<Hero heading="About Us" coverImg={coverImg} />
			<section className="about fb-col-wrapper">
				<h2 className="about__heading">{about.heading}</h2>
				<BlocksRenderer
					content={about.body}
					blocks={{
						paragraph: ({ children }) => <p className="about__paragraph">{children}</p>,
						heading: ({ children }) => <h3 className="about__subheading">{children} </h3>,
						link: ({ children, url }) => (
							<Link to={url} target="_blank" className="about__link">
								{children} (opens in new tab)
							</Link>
						),
					}}
				/>
			</section>
			<TeamMembers />
			<Committee />
		</>
	);
};

export default About;
