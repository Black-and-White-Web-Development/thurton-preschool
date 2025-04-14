import { useEffect, useState } from "react";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";
import { Link } from "react-router-dom";
import Hero from "../../partials/Hero/Hero";
import TeamMembers from "./TeamMembers/TeamMembers";
import Committee from "./Committee/Committee";
import "./About.scss";

import coverImg from "/src/assets/images/about-us.jpg";

const BASE_URL = `${import.meta.env.VITE_CMS_URL}`;
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
						<article key={block.id} className="content-block">
							{block.image && (
								<img
									src={BASE_URL + block.image.url}
									alt={block.image.alternativeText}
									className="content-block__image"
								/>
							)}
							<div className="content-block__content">
								<h3 className="contentblock__heading">{block.heading}</h3>
								<BlocksRenderer
									content={block.body}
									blocks={{
										paragraph: ({ children }) => (
											<p className="content-block__paragraph">{children}</p>
										),
										heading: ({ children }) => (
											<p className="content-block__paragraph">{children} </p>
										),
										link: ({ children, url }) => (
											<Link to={url} target="_blank" className="content-block__link">
												{children} (opens in new tab)
											</Link>
										),
									}}
								/>
							</div>
						</article>
					))}
				</div>
			</section>
			<TeamMembers />
			<Committee />
		</>
	);
};

export default About;
