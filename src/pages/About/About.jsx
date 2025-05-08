import { useEffect, useState } from "react";
import Hero from "../../partials/Hero/Hero";
import ContentBlock from "../../partials/ContentBlock/ContentBlock";
import TeamMembers from "./TeamMembers/TeamMembers";
import Committee from "./Committee/Committee";
import "./About.scss";

const API_URL = `${
	import.meta.env.VITE_CMS_URL
}/api/about?populate[contentBlocks][populate]=image&populate[heroImage]=true`;
const API_TOKEN = import.meta.env.VITE_CMS_API_TOKEN;

const About = function () {
	const [content, setContent] = useState({
		heading: "",
		body: [],
		contentBlocks: [],
		heroImage: { url: "" },
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
		<>
			<Hero heading="About Us" coverImg={content.heroImage.url} />
			<section className="about fb-col-wrapper">
				<h2 className="about__heading">{content.heading}</h2>
				<div className="about__content-blocks">
					{content.contentBlocks.map(block => (
						<ContentBlock key={block.id} content={block} />
					))}
				</div>
			</section>
			<TeamMembers heading={content.staffHeading} body={content.staffBody} />
			<Committee heading={content.committeeHeading} body={content.committeeBody} />
		</>
	);
};

export default About;
