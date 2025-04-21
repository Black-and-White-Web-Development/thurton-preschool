import { useEffect, useState } from "react";
import Hero from "../../partials/Hero/Hero";
import ContentBlock from "../../partials/ContentBlock/ContentBlock";
import TeamMembers from "./TeamMembers/TeamMembers";
import Committee from "./Committee/Committee";
import "./About.scss";

import coverImg from "/src/assets/images/about-us.jpg";

const API_URL = `${import.meta.env.VITE_CMS_URL}/api/about?populate[contentBlocks][populate]=image`;
const API_TOKEN = import.meta.env.VITE_CMS_API_TOKEN;

const About = function () {
	const [about, setAbout] = useState({
		heading: "",
		body: [],
		contentBlocks: [],
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
				<div className="about__content-blocks">
					{about.contentBlocks.map(block => (
						<ContentBlock key={block.id} content={block} />
					))}
				</div>
			</section>
			<TeamMembers heading={about.staffHeading} body={about.staffBody} />
			<Committee heading={about.committeeHeading} body={about.committeeBody} />
		</>
	);
};

export default About;
